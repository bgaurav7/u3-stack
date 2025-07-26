/**
 * Main configuration exports
 * Centralizes access to all configuration modules
 */

// Export environment configuration
export { default as envConfig } from './env';
export {
  type Config,
  config,
  initializeConfig,
  isBrowser,
  isDevelopment,
  isProduction,
  isServer,
  isTest,
  validateConfig,
} from './env/config';
