/**
 * Type definitions for the configuration module
 */

export interface Config {
  app: {
    name: string;
    version: string;
    nodeEnv: 'development' | 'production' | 'test';
  };
  server: {
    port: number;
    host: string;
  };
  database: {
    url: string;
  };
  auth: {
    clerkPublishableKey: string;
    clerkSecretKey: string;
  };
  api: {
    url: string;
  };
  logging: {
    level: 'debug' | 'info' | 'warn' | 'error';
  };
  features: {
    enableAnalytics: boolean;
    enableErrorTracking: boolean;
    hotReload: boolean;
    enableDevtools: boolean;
  };
  security: {
    secureCookies: boolean;
    trustProxy: boolean;
  };
}

export declare const config: Config;
export declare function validateConfig(): void;
export declare const isDevelopment: boolean;
export declare const isProduction: boolean;
export declare const isTest: boolean;

declare const _default: Config;
export default _default;