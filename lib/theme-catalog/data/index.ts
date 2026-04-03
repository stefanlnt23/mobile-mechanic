import type { ThemeCategory, WebsiteTheme } from '../types/theme'
import { corporateThemes } from './corporate'
import { creativeThemes } from './creative'
import { darkThemes } from './dark'
import { lightThemes } from './light'
import { luxuryThemes } from './luxury'
import { minimalThemes } from './minimal'
import { mixedThemes } from './mixed'
import { modernStartupThemes } from './modern-startup'

export const categories: Array<ThemeCategory | 'All'> = [
  'All',
  'Dark',
  'Light',
  'Mixed',
  'Luxury',
  'Minimal',
  'Corporate',
  'Creative',
  'Modern Startup',
]

export const websiteThemes: WebsiteTheme[] = [
  ...luxuryThemes,
  ...lightThemes,
  ...mixedThemes,
  ...darkThemes,
  ...minimalThemes,
  ...creativeThemes,
  ...corporateThemes,
  ...modernStartupThemes,
]

export {
  corporateThemes,
  creativeThemes,
  darkThemes,
  lightThemes,
  luxuryThemes,
  minimalThemes,
  mixedThemes,
  modernStartupThemes,
}
