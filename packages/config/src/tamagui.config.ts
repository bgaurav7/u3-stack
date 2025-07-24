import { gray, grayDark } from '@tamagui/colors';
import { shorthands } from '@tamagui/shorthands';
import { themes as tamaguiThemes } from '@tamagui/themes';
import { tokens } from '@tamagui/themes/v4';
import { createTamagui } from 'tamagui';
import { animations } from './animations';
import { bodyFont, headingFont } from './fonts';

// Ensure each theme has a displayName and all required properties
const themes: Record<string, any> = {};

// Use for...of instead of forEach for better performance
for (const [key, theme] of Object.entries(tamaguiThemes)) {
  themes[key] = {
    ...theme,
    displayName: key,
    outlineColor: '$gray10',
  };
}

// Add missing color tokens
themes.light = {
  ...themes.light,
  ...gray,
};

themes.dark = {
  ...themes.dark,
  ...grayDark,
};

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
