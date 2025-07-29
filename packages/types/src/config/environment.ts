// Environment and configuration types for U3-Stack

/**
 * Environment types
 */
export type Environment = 'development' | 'production' | 'test';

/**
 * Log level types
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/**
 * Server environment configuration type
 * This represents the structure of the config object from @u3/config
 */
export type Config = {
  app: {
    nodeEnv: Environment;
    name: string;
    version: string;
    port: number;
    url: string;
  };
  server: {
    host: string;
    logLevel: LogLevel;
  };
  auth: {
    clerkSecretKey: string;
  };
  database: {
    url: string;
    directUrl: string;
  };
  features: {
    analytics: boolean;
    errorTracking: boolean;
  };
};
