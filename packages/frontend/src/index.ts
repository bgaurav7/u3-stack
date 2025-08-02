/**
 * @u3/frontend - Cross-platform frontend package
 *
 * This package provides shared screens, hooks, API utilities, and authentication
 * interfaces that work across both web and React Native environments.
 *
 * Features:
 * - Platform-agnostic authentication interfaces
 * - tRPC client with React Query
 * - Cross-platform screens (Login, Home)
 * - Custom hooks for common functionality
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
 * Custom hooks for common functionality
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
// UTILS - Utility Functions
// ============================================================================

/**
 * Cross-platform utility functions
 * Pure functions that work consistently across environments
 */
export * from './utils';
