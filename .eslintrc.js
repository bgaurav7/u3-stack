module.exports = {
  root: true,
  extends: ['./packages/config/.eslintrc.base.js'],
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off', // Allow require() in config files
    'no-console': 'off', // Allow console in test and config files
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '.next/',
    '.turbo/',
    'coverage/',
    '*.d.ts', // Ignore TypeScript declaration files
    '.prettierrc.js', // Ignore prettier config
  ],
};
