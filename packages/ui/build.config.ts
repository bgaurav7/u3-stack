import { tamaguiBuild } from '@tamagui/build';

export default tamaguiBuild({
  entry: {
    index: 'src/index.ts',
    'config/index': 'src/config/index.ts',
  },
  format: ['cjs', 'esm'],
  external: ['react', 'react-native'],
  skipTypes: true, // We handle types separately with tsc

  // Enable static extraction for better performance
  useReactNativeWebLite: true,

  // Optimize the build
  optimize: {
    // Remove console.log statements in production
    removeConsole: process.env.NODE_ENV === 'production',

    // Tree-shake unused code
    treeshake: true,
  },

  // Configure Tamagui specific options
  tamaguiOptions: {
    components: ['tamagui'],
    config: './src/config/tamagui.config.ts',
  },
});
