/**
 * Environment configuration exports
 * Provides centralized access to all environment-related utilities
 */

// Default export for convenience
export {
  type Config,
  config,
  config as default,
  isDevelopment,
  isProduction,
  isTest,
  validateConfig,
} from './config';
