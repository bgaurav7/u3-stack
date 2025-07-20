module.exports = {
  extends: ['./.eslintrc.base.js'],
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off', // Allow require() in config files
  },
};
