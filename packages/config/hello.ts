/**
 * Dummy test file for cross-package validation
 * This file tests that the config package can be imported and used
 */

export const configMessage = 'Hello from @u3/config package!';

export function getConfigInfo() {
  return {
    packageName: '@u3/config',
    version: '0.1.0',
    description: 'Shared configuration for U3-Stack monorepo',
    timestamp: new Date().toISOString(),
  };
}

// Test environment utilities
export { loadEnv, getEnv, requireEnv } from './src/env.js';

// Re-export configurations for testing
// Note: Only TypeScript and environment utilities are available
// ESLint and Prettier have been replaced with Biome
