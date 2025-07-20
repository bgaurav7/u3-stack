/**
 * Type definitions for TypeScript configuration
 */

export interface CompilerOptions {
  // Language and Environment
  target?: string;
  lib?: string[];
  module?: string;
  moduleResolution?: string;
  allowImportingTsExtensions?: boolean;
  resolveJsonModule?: boolean;
  allowJs?: boolean;
  checkJs?: boolean;

  // Bundler mode
  allowSyntheticDefaultImports?: boolean;
  esModuleInterop?: boolean;
  isolatedModules?: boolean;
  verbatimModuleSyntax?: boolean;

  // Type Checking
  strict?: boolean;
  noImplicitAny?: boolean;
  strictNullChecks?: boolean;
  strictFunctionTypes?: boolean;
  strictBindCallApply?: boolean;
  strictPropertyInitialization?: boolean;
  noImplicitThis?: boolean;
  useUnknownInCatchVariables?: boolean;
  alwaysStrict?: boolean;
  noUnusedLocals?: boolean;
  noUnusedParameters?: boolean;
  exactOptionalPropertyTypes?: boolean;
  noImplicitReturns?: boolean;
  noFallthroughCasesInSwitch?: boolean;
  noUncheckedIndexedAccess?: boolean;
  noImplicitOverride?: boolean;
  noPropertyAccessFromIndexSignature?: boolean;

  // Emit
  declaration?: boolean;
  declarationMap?: boolean;
  sourceMap?: boolean;
  removeComments?: boolean;
  importHelpers?: boolean;
  downlevelIteration?: boolean;
  newLine?: string;

  // Interop Constraints
  forceConsistentCasingInFileNames?: boolean;
  skipLibCheck?: boolean;
  skipDefaultLibCheck?: boolean;

  // Path Mapping
  baseUrl?: string;
  paths?: Record<string, string[]>;

  // Other options
  [key: string]: any;
}

export interface ProjectReference {
  path: string;
  prepend?: boolean;
}

export interface TypeScriptConfig {
  $schema?: string;
  compilerOptions?: CompilerOptions;
  include?: string[];
  exclude?: string[];
  extends?: string;
  references?: ProjectReference[];
  files?: string[];
  compileOnSave?: boolean;
  typeAcquisition?: Record<string, any>;
  watchOptions?: Record<string, any>;
}

declare const tsConfig: TypeScriptConfig;
export = tsConfig;
