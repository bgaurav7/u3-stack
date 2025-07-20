/**
 * JavaScript export for the TypeScript config
 * This allows the config to be imported from both JS and TS files
 */

const {
  config,
  validateConfig,
  isDevelopment,
  isProduction,
  isTest,
} = require('./dist/config.js');

module.exports = {
  config,
  validateConfig,
  isDevelopment,
  isProduction,
  isTest,
  default: config,
};
