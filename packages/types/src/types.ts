// Additional type definitions

// Form types
export interface FormField<T = string> {
  value: T;
  error?: string;
  touched: boolean;
  required?: boolean;
}

export interface FormState<T extends Record<string, unknown>> {
  fields: { [K in keyof T]: FormField<T[K]> };
  isValid: boolean;
  isSubmitting: boolean;
}

// Navigation types
export interface RouteParams {
  [key: string]: string | string[] | undefined;
}

// Storage types
export interface StorageItem<T = unknown> {
  value: T;
  timestamp: number;
  expiresAt?: number;
}

// Event types
export interface CustomEvent<T = unknown> {
  type: string;
  payload: T;
  timestamp: number;
}

// ============================================================================
// API Types
// ============================================================================

/**
 * Simplified AppRouter type definition
 * This represents the shape of the API without needing the full implementation
 *
 * For now, we'll use 'any' to avoid complex type constraints and let
 * the actual API implementation provide the real types at runtime.
 */
export type AppRouter = any;

/**
 * Common API response types
 */
export interface HealthCheckResponse {
  status: string;
  timestamp: string;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateTodoInput {
  title: string;
}

export interface UpdateTodoInput {
  id: string;
  title?: string;
  completed?: boolean;
}

export interface DeleteTodoInput {
  id: string;
}

export interface UpdateUserInput {
  name?: string;
}
