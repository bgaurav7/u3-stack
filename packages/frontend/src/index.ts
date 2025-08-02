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
// PAGES - UI Components
// ============================================================================

/**
 * Pre-built pages for common app flows
 * All pages are responsive and work on web and mobile
 */
export * from './pages';

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
