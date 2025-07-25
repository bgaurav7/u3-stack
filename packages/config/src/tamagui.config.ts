import { shorthands } from '@tamagui/shorthands';
import { tokens } from '@tamagui/themes/v4';
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

export default config;
