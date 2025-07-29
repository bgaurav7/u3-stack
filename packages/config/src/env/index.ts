/**
 * Environment configuration exports
 * Server-side only configuration for U3-Stack
 */

// Export server-side config (no browser support needed since apps use local .env files)
export {
  config,
  config as default,
  initializeConfig,
  isBrowser,
  isDevelopment,
  isProduction,
  isServer,
  isTest,
  validateConfig,
} from './config';
