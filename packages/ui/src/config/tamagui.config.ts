import { defaultConfig } from '@tamagui/config/v4';
import { type TamaguiConfig, createTamagui } from 'tamagui';
import { animations } from './animations';
import { bodyFont, headingFont } from './fonts';

const config: TamaguiConfig = createTamagui({
  ...defaultConfig,
  animations: animations as any,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
  },
});

// Export the configuration
export default config;

// Add module declaration for Tamagui
declare module 'tamagui' {
  // This tells Tamagui to use our config type
  interface TamaguiCustomConfig {}
}
