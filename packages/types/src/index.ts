// Shared types for U3-Stack

// Common utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

// API Response types
export interface ApiResponse<T = unknown> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}

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
