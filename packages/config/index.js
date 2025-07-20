// Main entry point for @u3/config package
// This file exports all shared configurations

module.exports = {
  eslint: require('./.eslintrc.base.js'),
  prettier: require('./prettier.config.js'),
  typescript: require('./tsconfig.base.json'),
  env: require('./src/env.js'),
};
