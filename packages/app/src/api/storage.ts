/**
 * Storage implementation and initialization
 * Interface definition is in @u3/types
 */

import type { StorageInterface } from '@u3/types';

/**
 * Default no-op storage implementation for fallback
 */
export const createFallbackStorage = (): StorageInterface => ({
  async getItem(): Promise<string | null> {
    console.warn('No storage provider configured, using fallback');
    return null;
  },
  async setItem(): Promise<void> {
    console.warn('No storage provider configured, using fallback');
  },
  async removeItem(): Promise<void> {
    console.warn('No storage provider configured, using fallback');
  },
});

/**
 * Global storage instance
 * Should be initialized by platform-specific providers
 */
let storageInstance: StorageInterface = createFallbackStorage();

/**
 * Initialize storage with a platform-specific implementation
 */
export function initializeStorage(storage: StorageInterface): void {
  storageInstance = storage;
}

/**
 * Get the current storage instance
 */
export function getStorage(): StorageInterface {
  return storageInstance;
}

export type { StorageInterface } from '@u3/types';
// Re-export for convenience
export { STORAGE_KEYS } from '@u3/types';
