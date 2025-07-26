import { shorthands } from '@tamagui/shorthands';
import { tokens } from '@tamagui/themes';
import { createTamagui } from 'tamagui';
import { animations } from './animations';
import { bodyFont, headingFont } from './fonts';
import { themes } from './themes';

// Create the Tamagui configuration with explicit tokens
export const config = createTamagui({
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  themes,
  tokens,
});

// Types for the Tamagui configuration
export type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
