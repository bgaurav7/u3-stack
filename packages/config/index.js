// Main entry point for @u3/config package
// This file exports all shared configurations

module.exports = {
  typescript: require('./tsconfig.base.json'),
  env: require('./src/env.js'),
};
