/**
 * Type definitions for Prettier configuration
 */

export interface PrettierOverride {
  files: string | string[];
  options: Partial<PrettierConfig>;
}

export interface PrettierConfig {
  // Basic formatting
  semi: boolean;
  singleQuote: boolean;
  quoteProps: 'as-needed' | 'consistent' | 'preserve';
  trailingComma: 'none' | 'es5' | 'all';
  tabWidth: number;
  useTabs: boolean;
  printWidth: number;

  // Line endings
  endOfLine: 'auto' | 'lf' | 'crlf' | 'cr';

  // JSX
  jsxSingleQuote: boolean;
  jsxBracketSameLine: boolean;

  // Other options
  bracketSpacing: boolean;
  arrowParens: 'avoid' | 'always';
  proseWrap: 'always' | 'never' | 'preserve';
  htmlWhitespaceSensitivity: 'css' | 'strict' | 'ignore';

  // Overrides
  overrides?: PrettierOverride[];
}

declare const prettierConfig: PrettierConfig;
export = prettierConfig;
