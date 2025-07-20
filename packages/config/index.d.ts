// Type definitions for @u3/config package

export interface ESLintConfig {
  extends: string[];
  rules: Record<string, any>;
  env: Record<string, boolean>;
  parser?: string;
  parserOptions?: Record<string, any>;
}

export interface PrettierConfig {
  semi: boolean;
  singleQuote: boolean;
  tabWidth: number;
  trailingComma: string;
  printWidth: number;
  endOfLine: string;
}

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
  eslint: ESLintConfig;
  prettier: PrettierConfig;
  typescript: TypeScriptConfig;
  env: EnvUtils;
};

export = config;
