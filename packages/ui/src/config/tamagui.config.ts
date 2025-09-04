import { shorthands } from '@tamagui/shorthands'
import { createTamagui } from 'tamagui'
import { animations } from './animations'
import { fonts } from './tokens'
import { media } from './media'
import { themes } from './themes'
import { tokens } from './tokens'

// Create the Tamagui configuration with our custom tokens and themes
export const config = createTamagui({
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts,
  themes,
  tokens,
  media,
  defaultTheme: 'light',
})

// Default export for webpack loader compatibility
export default config

// Types for the Tamagui configuration
export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
