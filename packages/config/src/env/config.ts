/**
 * Server-side environment configuration for U3-Stack using dotenv-flow and env-var
 * This config is now server-only since individual apps use local .env files for client-side variables
 */

import { resolve } from 'node:path';
import type { Config } from '@u3/types';
import { config as dotenvConfig } from 'dotenv-flow';
import env from 'env-var';

// Detect environment
const isServer = typeof window === 'undefined';
const isBrowser = !isServer;

// Initialize dotenv-flow only on server side
if (isServer) {
  // Load environment files from the env directory at the workspace root
  const envDir = resolve(process.cwd(), '../../env');

  dotenvConfig({
    path: envDir,
    pattern: '.env[.node_env][.local]',
    default_node_env: 'development',
  });
}

// Type-safe environment variable access using env-var
// Returns empty values for browser to maintain compatibility
function getEnvVar(key: string, defaultValue = ''): string {
  if (isBrowser) return defaultValue;
  return env.get(key).default(defaultValue).asString();
}

function getEnvNumber(key: string, defaultValue: number): number {
  if (isBrowser) return defaultValue;
  return env.get(key).default(defaultValue).asIntPositive();
}

function getEnvBoolean(key: string, defaultValue = false): boolean {
  if (isBrowser) return defaultValue;
  return env.get(key).default(defaultValue.toString()).asBool();
}

function getEnvEnum<T extends string>(
  key: string,
  allowedValues: readonly T[],
  defaultValue: T
): T {
  if (isBrowser) return defaultValue;
  return env
    .get(key)
    .default(defaultValue)
    .asEnum([...allowedValues]) as T;
}

// Create a type-safe configuration object for server-side use
const config: Config = {
  app: {
    nodeEnv: getEnvEnum(
      'NODE_ENV',
      ['development', 'production', 'test'] as const,
      'development'
    ),
    name: getEnvVar('APP_NAME', 'U3-Stack'),
    version: getEnvVar('APP_VERSION', '0.1.0'),
    port: getEnvNumber('PORT', 3000),
    url: getEnvVar('APP_URL', 'http://localhost:3000'),
  },
  server: {
    host: getEnvVar('HOST', 'localhost'),
    logLevel: getEnvEnum(
      'LOG_LEVEL',
      ['debug', 'info', 'warn', 'error'] as const,
      'info'
    ),
  },
  auth: {
    clerkSecretKey: getEnvVar('CLERK_SECRET_KEY'),
  },
  database: {
    url: getEnvVar('DATABASE_URL'),
    directUrl: getEnvVar('DATABASE_DIRECT_URL'),
  },
  features: {
    analytics: getEnvBoolean('ENABLE_ANALYTICS'),
    errorTracking: getEnvBoolean('ENABLE_ERROR_TRACKING'),
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
  if (isBrowser) return;

  const errors: string[] = [];

  try {
    // Validate required production variables
    if (isProduction) {
      if (!config.auth.clerkSecretKey) {
        errors.push('CLERK_SECRET_KEY is required in production');
      }
    }

    // Validate database URL format if provided
    if (config.database.url) {
      const validProtocols = ['postgres://', 'postgresql://'];
      const hasValidProtocol = validProtocols.some(protocol =>
        config.database.url.startsWith(protocol)
      );
      if (!hasValidProtocol) {
        errors.push(
          'DATABASE_URL must be a valid PostgreSQL connection string (postgres:// or postgresql://)'
        );
      }
    }

    // Validate port range
    if (config.app.port < 1 || config.app.port > 65535) {
      errors.push('PORT must be between 1 and 65535');
    }

    // Validate URL format
    if (config.app.url) {
      try {
        new URL(config.app.url);
      } catch {
        errors.push('APP_URL must be a valid URL');
      }
    }
  } catch (error) {
    errors.push(`Configuration validation error: ${error}`);
  }

  // Report validation errors
  if (errors.length > 0) {
    console.error('Environment configuration validation failed:');
    errors.forEach(error => console.error(`- ${error}`));

    if (isProduction) {
      throw new Error('Invalid environment configuration');
    } else {
      console.warn('⚠️  Environment validation warnings (development mode)');
    }
  } else if (isDevelopment) {
    console.log('✅ Environment configuration validated successfully');
  }
}

/**
 * Initialize environment configuration
 * Call this early in your application startup
 */
export function initializeConfig(): void {
  if (isBrowser) return;

  try {
    validateConfig();
  } catch (error) {
    console.error('Failed to initialize configuration:', error);
    if (isProduction) {
      process.exit(1);
    }
  }
}

/**
 * Export the configuration object
 */
export { config };

/**
 * Export environment detection helpers
 */
export { isServer, isBrowser };
