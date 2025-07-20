/**
 * Type definitions for ESLint configuration
 */

export interface ESLintRule {
  [key: string]: 'off' | 'warn' | 'error' | [string, any] | [string, any, any];
}

export interface ESLintOverride {
  files: string[];
  extends?: string[];
  plugins?: string[];
  env?: Record<string, boolean>;
  rules?: ESLintRule;
  settings?: Record<string, any>;
}

export interface ESLintConfig {
  root?: boolean;
  parser?: string;
  parserOptions?: {
    ecmaVersion?: number;
    sourceType?: 'module' | 'script';
    ecmaFeatures?: {
      jsx?: boolean;
      [key: string]: any;
    };
  };
  env?: Record<string, boolean>;
  extends?: string[];
  plugins?: string[];
  rules?: ESLintRule;
  settings?: Record<string, any>;
  overrides?: ESLintOverride[];
}

declare const eslintConfig: ESLintConfig;
export = eslintConfig;
