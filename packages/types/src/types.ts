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
