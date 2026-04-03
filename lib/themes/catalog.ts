import { websiteThemes } from '@/lib/theme-catalog/data'
import type { WebsiteTheme } from './types'

export const allThemes = websiteThemes as WebsiteTheme[]

export const themesById = Object.fromEntries(allThemes.map((theme) => [theme.id, theme]))

export const defaultThemeId = 'neon-circuit'

export const defaultTheme = themesById[defaultThemeId] ?? allThemes[0]
