const { withTamagui } = require('@tamagui/next-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    'react-native',
    'expo',
    'expo-router',
    '@u3/ui',
    '@u3/config',
    'tamagui',
    '@tamagui/config',
    '@tamagui/toast',
    '@tamagui/animations-react-native',
    '@tamagui/font-inter',
  ],
  experimental: {
    forceSwcTransforms: true,
  },
  // Expo Router configuration
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

const tamaguiConfig = withTamagui({
  config: '../../packages/config/src/tamagui.config.ts',
  components: ['tamagui', '@u3/ui'],
  importsWhitelist: ['constants.js', 'colors.js'],
  logTimings: true,
  disableExtraction: process.env.NODE_ENV === 'development',
  experimental: {
    optimizeCss: true,
  },
});

module.exports = tamaguiConfig(nextConfig);
