/**
 * Dummy test file for cross-package validation
 * This file tests that apps can import from packages
 */

// Test import from @u3/config package
import { configMessage, getConfigInfo } from '../packages/config/hello';

export const appMessage = 'Hello from apps directory!';

export function testCrossPackageImport() {
  console.log('Testing cross-package imports...');
  console.log('App message:', appMessage);
  console.log('Config message:', configMessage);

  const configInfo = getConfigInfo();
  console.log('Config info:', configInfo);

  return {
    success: true,
    appMessage,
    configMessage,
    configInfo,
    timestamp: new Date().toISOString(),
  };
}

// Test the import immediately (Node.js specific)
// This would be handled differently in a browser environment
