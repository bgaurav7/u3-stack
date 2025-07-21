const { withTamagui } = require('@tamagui/next-plugin');
const { withExpo } = require('@expo/next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    'expo-router',
    '@u3/ui',
    '@tamagui/core',
    '@tamagui/config',
    '@tamagui/button',
    '@tamagui/card',
    '@tamagui/input',
    '@tamagui/text',
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
  config: './tamagui.config.ts',
  components: ['@u3/ui'],
  importsWhitelist: ['constants.js', 'colors.js'],
  logTimings: true,
  disableExtraction: process.env.NODE_ENV === 'development',
  experimental: {
    optimizeCss: true,
  },
});

module.exports = withExpo(tamaguiConfig(nextConfig));
