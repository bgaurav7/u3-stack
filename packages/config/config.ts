/**
 * Type-safe environment configuration for U3-Stack
 * Uses dotenv-flow for layered .env file loading and env-var for validation
 */

import { resolve } from 'node:path';
import { config as dotenvFlow } from 'dotenv-flow';
import env from 'env-var';

// Initialize dotenv-flow to load layered .env files
dotenvFlow({
  path: resolve(process.cwd(), 'env'),
  pattern: '.env[.node_env][.local]',
  default_node_env: 'development',
});

/**
 * Application configuration with type-safe environment variable access
 */
export const config = {
  // Application
  app: {
    name: env.get('APP_NAME').default('U3-Stack').asString(),
    version: env.get('APP_VERSION').default('0.1.0').asString(),
    nodeEnv: env
      .get('NODE_ENV')
      .default('development')
      .asEnum(['development', 'production', 'test']),
  },

  // Server Configuration
  server: {
    port: env.get('PORT').default(3000).asPortNumber(),
    host: env.get('HOST').default('localhost').asString(),
  },

  // Database Configuration
  database: {
    url: env
      .get('DATABASE_URL')
      .default('postgresql://localhost:5432/u3stack_dev')
      .asUrlString(),
  },

  // Authentication (Clerk)
  auth: {
    clerkPublishableKey: env
      .get('CLERK_PUBLISHABLE_KEY')
      .default('')
      .asString(),
    clerkSecretKey: env.get('CLERK_SECRET_KEY').default('').asString(),
  },

  // API Configuration
  api: {
    url: env.get('API_URL').default('http://localhost:3000/api').asUrlString(),
  },

  // Logging
  logging: {
    level: env
      .get('LOG_LEVEL')
      .default('info')
      .asEnum(['debug', 'info', 'warn', 'error']),
  },

  // Feature Flags
  features: {
    enableAnalytics: env.get('ENABLE_ANALYTICS').default('false').asBool(),
    enableErrorTracking: env
      .get('ENABLE_ERROR_TRACKING')
      .default('false')
      .asBool(),
    hotReload: env.get('HOT_RELOAD').default('false').asBool(),
    enableDevtools: env.get('ENABLE_DEVTOOLS').default('false').asBool(),
  },

  // Security (Production)
  security: {
    secureCookies: env.get('SECURE_COOKIES').default('false').asBool(),
    trustProxy: env.get('TRUST_PROXY').default('false').asBool(),
  },
} as const;

/**
 * Type definitions for the configuration object
 */
export type Config = typeof config;

/**
 * Environment-specific configuration helpers
 */
export const isDevelopment = config.app.nodeEnv === 'development';
export const isProduction = config.app.nodeEnv === 'production';
export const isTest = config.app.nodeEnv === 'test';

/**
 * Validate required environment variables
 * Call this during application startup to ensure all required vars are present
 */
export function validateConfig(): void {
  const errors: string[] = [];

  // Validate required production variables
  if (isProduction) {
    if (!config.auth.clerkPublishableKey) {
      errors.push('CLERK_PUBLISHABLE_KEY is required in production');
    }
    if (!config.auth.clerkSecretKey) {
      errors.push('CLERK_SECRET_KEY is required in production');
    }
  }

  // Validate database URL format
  try {
    new URL(config.database.url);
  } catch {
    errors.push('DATABASE_URL must be a valid URL');
  }

  // Validate API URL format
  try {
    new URL(config.api.url);
  } catch {
    errors.push('API_URL must be a valid URL');
  }

  if (errors.length > 0) {
    throw new Error(`Configuration validation failed:\n${errors.join('\n')}`);
  }
}

/**
 * Default export for convenience
 */
export default config;
