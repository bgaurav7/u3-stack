// Shared types for U3-Stack

// User types (for future auth implementation)
export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Theme types
export type ThemeMode = 'light' | 'dark' | 'system';

// Environment types
export type Environment = 'development' | 'production' | 'test';

// Component state types
export type ComponentState = 'idle' | 'loading' | 'success' | 'error';

// Export all types
export type * from './types';
