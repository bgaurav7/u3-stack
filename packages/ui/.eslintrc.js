module.exports = {
  extends: ['../../.eslintrc.js'],
  rules: {
    // Custom rule to prevent direct tamagui imports outside config and primitives
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['tamagui'],
            message:
              'Direct imports from "tamagui" are not allowed. Use primitives from "../primitives" instead.',
            allowTypeImports: true,
          },
        ],
      },
    ],
  },
  overrides: [
    {
      // Allow tamagui imports in config and primitives folders
      files: ['src/config/**/*', 'src/primitives/**/*'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
  ],
};
