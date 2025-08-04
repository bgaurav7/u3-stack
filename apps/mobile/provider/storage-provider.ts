/**
 * Mobile storage provider using AsyncStorage
 * Implements StorageInterface for React Native environments
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeStorage } from '@u3/frontend';
import type { StorageInterface } from '@u3/types';

/**
 * React Native storage implementation using AsyncStorage
 */
export const mobileStorageProvider: StorageInterface = {
  async getItem(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.warn('Failed to retrieve from AsyncStorage:', error);
      return null;
    }
  },

  async setItem(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.warn('Failed to save to AsyncStorage:', error);
    }
  },

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to remove from AsyncStorage:', error);
    }
  },
};

/**
 * Initialize mobile storage provider automatically
 * This ensures storage is available when the module is imported
 */
initializeStorage(mobileStorageProvider);
