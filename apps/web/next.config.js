const { withTamagui } = require('@tamagui/next-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    'react-native',
    'expo',
    'expo-router',
    '@u3/ui',
    '@u3/types',
    'tamagui',
    '@tamagui/config',
    '@tamagui/toast',
    '@tamagui/animations-react-native',
    '@tamagui/font-inter',
  ],
  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Expo Router configuration
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  // Bundle analyzer
  ...(process.env.ANALYZE === 'true' && {
    webpack: config => {
      config.plugins.push(
        new (require('@next/bundle-analyzer')({
          enabled: true,
        }))()
      );
      return config;
    },
  }),
};

const tamaguiConfig = withTamagui({
  config: '../../packages/ui/src/config/tamagui.config.ts',
  components: ['tamagui'], // Only core tamagui
  disableExtraction: true, // Disable all extraction for now
});

module.exports = tamaguiConfig(nextConfig);
