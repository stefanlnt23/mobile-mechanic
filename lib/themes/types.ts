export type ThemeCategory =
  | 'Dark'
  | 'Light'
  | 'Mixed'
  | 'Luxury'
  | 'Minimal'
  | 'Corporate'
  | 'Creative'
  | 'Modern Startup'

export type WebsiteTheme = {
  id: string
  name: string
  category: ThemeCategory
  description: string
  mood: string
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  surfaceColor: string
  textColor: string
  mutedTextColor: string
  accentColor: string
  palette: string[]
  fonts: {
    heading: string
    body: string
    accent: string
    pairing: string
  }
  tags: string[]
}
