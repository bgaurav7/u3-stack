// Type definitions for @u3/config package

export interface TypeScriptConfig {
  compilerOptions: Record<string, any>;
  include?: string[];
  exclude?: string[];
  references?: Array<{ path: string }>;
}

export interface EnvUtils {
  loadEnv: (path?: string) => void;
  getEnv: (key: string, defaultValue?: string) => string;
  requireEnv: (key: string) => string;
}

export interface AppConfig {
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

export interface ConfigModule {
  config: AppConfig;
  validateConfig: () => void;
  isDevelopment: boolean;
  isProduction: boolean;
  isTest: boolean;
  default: AppConfig;
}

declare const config: {
  typescript: TypeScriptConfig;
  env: EnvUtils;
  config: ConfigModule;
};

export = config;
