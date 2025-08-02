/**
 * Main configuration exports
 * Centralizes access to all configuration modules
 */

// Export environment configuration
export { default as envConfig } from './env';
export {
  config,
  initializeConfig,
  isBrowser,
  isDevelopment,
  isProduction,
  isServer,
  isTest,
  validateConfig,
} from './env/config';
