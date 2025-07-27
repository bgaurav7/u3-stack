/**
 * @u3/app - Cross-platform app package
 *
 * This package provides shared screens, hooks, API utilities, and authentication
 * components that work across both web and React Native environments.
 *
 * Features:
 * - Clerk authentication integration
 * - tRPC client with React Query
 * - Cross-platform screens (Login, Home)
 * - Custom hooks for auth state management
 * - Utility functions for common operations
 */

// ============================================================================
// SCREENS - UI Components
// ============================================================================

/**
 * Pre-built screens for common app flows
 * All screens are responsive and work on web and mobile
 */
export * from './screens';

// ============================================================================
// HOOKS - Custom React Hooks
// ============================================================================

/**
 * Custom hooks for authentication state and other common functionality
 * Provides consistent interfaces across platforms
 */
export * from './hooks';

// ============================================================================
// API - tRPC Client and Utilities
// ============================================================================

/**
 * tRPC client configuration and utilities
 * Includes cross-platform storage and error handling
 */
export * from './api';

// ============================================================================
// AUTH - Authentication Components and Utilities
// ============================================================================

/**
 * Clerk authentication wrappers and utilities
 * Platform-agnostic authentication interface
 */
export * from './auth';

// ============================================================================
// UTILS - Utility Functions
// ============================================================================

/**
 * Cross-platform utility functions
 * Pure functions that work consistently across environments
 */
export * from './utils';
