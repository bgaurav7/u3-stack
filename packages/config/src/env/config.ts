/**
 * Browser-compatible environment configuration for U3-Stack
 */

// Detect environment
const isServer = typeof window === 'undefined';

// Create a simple configuration object that works in both browser and server
const config = {
  app: {
    nodeEnv:
      isServer && process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
    port: isServer && process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    url: isServer && process.env.APP_URL ? process.env.APP_URL : '',
  },
  auth: {
    clerkPublishableKey:
      isServer && process.env.CLERK_PUBLISHABLE_KEY
        ? process.env.CLERK_PUBLISHABLE_KEY
        : '',
    clerkSecretKey:
      isServer && process.env.CLERK_SECRET_KEY
        ? process.env.CLERK_SECRET_KEY
        : '',
  },
  database: {
    url: isServer && process.env.DATABASE_URL ? process.env.DATABASE_URL : '',
    directUrl:
      isServer && process.env.DATABASE_DIRECT_URL
        ? process.env.DATABASE_DIRECT_URL
        : '',
  },
  features: {
    analytics: isServer && process.env.ENABLE_ANALYTICS === 'true',
  },
};

// Environment-specific helpers
export const isDevelopment = config.app.nodeEnv === 'development';
export const isProduction = config.app.nodeEnv === 'production';
export const isTest = config.app.nodeEnv === 'test';

/**
 * Validate required environment variables
 * Only runs validation in server environment
 */
export function validateConfig(): void {
  if (!isServer) return;

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
  if (config.database.url && !config.database.url.startsWith('postgres://')) {
    errors.push('DATABASE_URL must be a valid PostgreSQL connection string');
  }

  // Report validation errors
  if (errors.length > 0) {
    console.error('Environment configuration validation failed:');
    errors.forEach(error => console.error(`- ${error}`));
    if (isProduction) {
      throw new Error('Invalid environment configuration');
    }
  }
}

/**
 * Type definitions for the configuration object
 */
export type Config = typeof config;

/**
 * Export the configuration object
 */
export { config };
