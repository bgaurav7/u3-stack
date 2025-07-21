module.exports = api => {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Runtime for babel helpers
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: true,
          regenerator: true,
        },
      ],

      // Module resolver for monorepo
      [
        'module-resolver',
        {
          root: ['../..'],
          alias: {
            '@u3/ui': '../../packages/ui/src',
          },
          extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
        },
      ],

      // Tamagui plugin for optimized components
      [
        '@tamagui/babel-plugin',
        {
          components: ['@u3/ui', 'tamagui'],
          config: '../../packages/config/src/tamagui.config.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
        'tamagui-plugin', // Add unique name to avoid duplicates
      ],
    ],
  };
};
