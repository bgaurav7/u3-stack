/**
 * Web storage provider using localStorage
 * Implements StorageInterface for web environments
 */

import { initializeStorage } from '@u3/app/api/storage';
import type { StorageInterface } from '@u3/types';

/**
 * Web storage implementation using localStorage
 */
export const webStorageProvider: StorageInterface = {
  async getItem(key: string): Promise<string | null> {
    if (typeof window === 'undefined') return null;
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('Failed to retrieve from localStorage:', error);
      return null;
    }
  },

  async setItem(key: string, value: string): Promise<void> {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  },

  async removeItem(key: string): Promise<void> {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
    }
  },
};

/**
 * Initialize web storage provider automatically
 * This ensures storage is available when the module is imported
 */
initializeStorage(webStorageProvider);
