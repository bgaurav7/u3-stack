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

declare const config: {
  typescript: TypeScriptConfig;
  env: EnvUtils;
};

export = config;
