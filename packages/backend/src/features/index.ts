/**
 * @fileoverview Barrel exports for all feature packages
 * This file provides convenient access to all feature functionality
 */

// Re-export todo features
export * as todo from './todo';
// Individual feature exports
export { todoService } from './todo/service';
