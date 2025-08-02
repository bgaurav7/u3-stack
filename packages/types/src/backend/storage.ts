/**
 * Platform-agnostic storage interface
 * To be implemented by platform-specific providers
 */
export interface StorageInterface {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

/**
 * Storage keys used throughout the application
 */
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user-preferences',
} as const;
