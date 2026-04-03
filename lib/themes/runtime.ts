import type { WebsiteTheme } from './types'
import { defaultTheme, themesById } from './catalog'

export const THEME_STORAGE_KEY = 'mobile-mechanic-theme'

const SHADE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

type Rgb = [number, number, number]

function clamp(value: number, min = 0, max = 255) {
  return Math.min(max, Math.max(min, value))
}

function hexToRgb(hex: string): Rgb {
  const normalized = hex.trim().replace('#', '')
  const expanded =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => `${char}${char}`)
          .join('')
      : normalized

  if (expanded.length !== 6) {
    return [0, 0, 0]
  }

  return [0, 2, 4].map((offset) => parseInt(expanded.slice(offset, offset + 2), 16)) as Rgb
}

function rgbToChannels(rgb: Rgb) {
  return `${rgb[0]} ${rgb[1]} ${rgb[2]}`
}

function mix(a: Rgb, b: Rgb, t: number): Rgb {
  const safeT = Math.min(1, Math.max(0, t))
  return [0, 1, 2].map((index) => clamp(Math.round(a[index] + (b[index] - a[index]) * safeT))) as Rgb
}

function rgbToHex([r, g, b]: Rgb) {
  return `#${[r, g, b]
    .map((channel) => clamp(channel).toString(16).padStart(2, '0'))
    .join('')}`
}

function luminance([r, g, b]: Rgb) {
  const toLinear = (value: number) => {
    const v = value / 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  }

  const [lr, lg, lb] = [toLinear(r), toLinear(g), toLinear(b)]
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb
}

function buildSlateScale(theme: WebsiteTheme) {
  const bg = hexToRgb(theme.backgroundColor)
  const surface = hexToRgb(theme.surfaceColor)
  const text = hexToRgb(theme.textColor)
  const muted = hexToRgb(theme.mutedTextColor)

  const scale: Record<number, string> = {
    50: rgbToChannels(mix(text, bg, 0.04)),
    100: rgbToChannels(mix(text, bg, 0.1)),
    200: rgbToChannels(mix(text, muted, 0.2)),
    300: rgbToChannels(mix(text, muted, 0.42)),
    400: rgbToChannels(mix(text, muted, 0.62)),
    500: rgbToChannels(mix(muted, bg, 0.25)),
    600: rgbToChannels(mix(muted, bg, 0.38)),
    700: rgbToChannels(mix(surface, text, 0.22)),
    800: rgbToChannels(mix(surface, text, 0.16)),
    900: rgbToChannels(mix(surface, bg, 0.35)),
    950: rgbToChannels(surface),
  }

  return scale
}

function buildAccentScale(baseHex: string) {
  const base = hexToRgb(baseHex)
  const white = hexToRgb('#ffffff')
  const black = hexToRgb('#000000')

  return {
    100: rgbToChannels(mix(base, white, 0.72)),
    200: rgbToChannels(mix(base, white, 0.54)),
    300: rgbToChannels(mix(base, white, 0.36)),
    400: rgbToChannels(mix(base, white, 0.2)),
    500: rgbToChannels(base),
    600: rgbToChannels(mix(base, black, 0.13)),
    700: rgbToChannels(mix(base, black, 0.26)),
  }
}

export function resolveTheme(themeId: string | null | undefined) {
  if (!themeId) {
    return defaultTheme
  }

  return themesById[themeId] ?? defaultTheme
}

export function toThemeCssVariables(theme: WebsiteTheme): Record<string, string> {
  const bg = hexToRgb(theme.backgroundColor)
  const surface = hexToRgb(theme.surfaceColor)
  const text = hexToRgb(theme.textColor)
  const muted = hexToRgb(theme.mutedTextColor)
  const brand = hexToRgb(theme.primaryColor)
  const accent = hexToRgb(theme.accentColor)
  const secondary = hexToRgb(theme.secondaryColor)
  const success = hexToRgb('#22c55e')

  const isDark = luminance(bg) < 0.42
  const overlayBase = isDark ? [255, 255, 255] as Rgb : [0, 0, 0] as Rgb
  const contrastBase = isDark ? [255, 255, 255] as Rgb : text
  const inverseBase = isDark ? [0, 0, 0] as Rgb : bg

  const slate = buildSlateScale(theme)
  const orange = buildAccentScale(theme.primaryColor)
  const cyan = buildAccentScale(theme.accentColor)
  const green = buildAccentScale('#22c55e')
  const blue = buildAccentScale(rgbToHex(mix(accent, brand, 0.55)))

  const vars: Record<string, string> = {
    '--theme-bg': rgbToChannels(bg),
    '--theme-surface': rgbToChannels(surface),
    '--theme-surface-elevated': rgbToChannels(mix(surface, secondary, 0.25)),
    '--theme-text': rgbToChannels(text),
    '--theme-text-muted': rgbToChannels(muted),
    '--theme-border': rgbToChannels(mix(surface, text, isDark ? 0.22 : 0.18)),
    '--theme-brand': rgbToChannels(brand),
    '--theme-accent': rgbToChannels(accent),
    '--theme-secondary': rgbToChannels(secondary),
    '--theme-success': rgbToChannels(success),
    '--theme-warning': rgbToChannels(mix(brand, [251, 191, 36], 0.45)),
    '--theme-overlay': rgbToChannels(overlayBase),
    '--theme-shadow': rgbToChannels(mix(bg, [0, 0, 0], 0.45)),
    '--white': rgbToChannels(contrastBase),
    '--black': rgbToChannels(inverseBase),
    '--background': rgbToChannels(bg),
    '--surface': rgbToChannels(surface),
    '--brand': rgbToChannels(brand),
    '--whatsapp': rgbToChannels(success),
    '--ink': rgbToChannels(text),
    '--muted': rgbToChannels(muted),
  }

  for (const step of SHADE_STEPS) {
    vars[`--slate-${step}`] = slate[step]
  }

  for (const [step, value] of Object.entries(orange)) {
    vars[`--orange-${step}`] = value
  }

  for (const [step, value] of Object.entries(cyan)) {
    vars[`--cyan-${step}`] = value
  }

  for (const [step, value] of Object.entries(green)) {
    vars[`--green-${step}`] = value
  }

  for (const [step, value] of Object.entries(blue)) {
    vars[`--blue-${step}`] = value
  }

  return vars
}

export function applyTheme(themeId: string | null | undefined) {
  if (typeof document === 'undefined') {
    return
  }

  const theme = resolveTheme(themeId)
  const vars = toThemeCssVariables(theme)
  const root = document.documentElement

  root.dataset.theme = theme.id

  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value)
  }
}
