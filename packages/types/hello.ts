/**
 * Dummy test file for cross-package validation
 * This file tests that packages can import from other packages
 */

// Test import from @u3/config package
import { configMessage, getConfigInfo } from '../config/hello';

export const typesMessage = 'Hello from @u3/types package!';

export interface TestResult {
  success: boolean;
  messages: {
    types: string;
    config: string;
  };
  configInfo: ReturnType<typeof getConfigInfo>;
  timestamp: string;
}

export function testPackageToPackageImport(): TestResult {
  console.log('Testing package-to-package imports...');
  console.log('Types message:', typesMessage);
  console.log('Config message:', configMessage);

  const configInfo = getConfigInfo();
  console.log('Config info:', configInfo);

  return {
    success: true,
    messages: {
      types: typesMessage,
      config: configMessage,
    },
    configInfo,
    timestamp: new Date().toISOString(),
  };
}

// Common types that might be used across the monorepo
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

// Test the import immediately (Node.js specific)
// This would be handled differently in a browser environment
