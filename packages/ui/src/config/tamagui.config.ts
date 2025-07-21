import { config } from '@tamagui/config/v3';
import { type TamaguiInternalConfig, createTamagui } from '@tamagui/core';

const tamaguiConfig: TamaguiInternalConfig = createTamagui({
  ...config,
  // Custom theme overrides
  themes: {
    ...config.themes,
    // Add custom theme variations if needed
    light: {
      ...config.themes.light,
      // Custom light theme tokens
      background: '#ffffff',
      backgroundHover: '#f5f5f5',
      backgroundPress: '#eeeeee',
      backgroundFocus: '#f0f0f0',
      color: '#000000',
      colorHover: '#333333',
      colorPress: '#666666',
      colorFocus: '#000000',
    },
    dark: {
      ...config.themes.dark,
      // Custom dark theme tokens
      background: '#000000',
      backgroundHover: '#1a1a1a',
      backgroundPress: '#2a2a2a',
      backgroundFocus: '#1f1f1f',
      color: '#ffffff',
      colorHover: '#cccccc',
      colorPress: '#999999',
      colorFocus: '#ffffff',
    },
  },
  // Custom tokens
  tokens: {
    ...config.tokens,
    // Add custom design tokens if needed
    space: {
      ...config.tokens.space,
      // Custom spacing tokens
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 48,
    },
    size: {
      ...config.tokens.size,
      // Custom size tokens
      buttonSmall: 32,
      buttonMedium: 40,
      buttonLarge: 48,
    },
  },
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}
