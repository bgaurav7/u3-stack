/**
 * Barrel exports for @u3/api package
 * This file provides clean import paths for consuming packages
 *
 * Usage examples:
 * - Frontend: import type { AppRouter } from '@u3/api'
 * - Feature packages: import { router, publicProcedure } from '@u3/api'
 * - Middleware: import { authMiddleware } from '@u3/api/middleware'
 */

// ============================================================================
// PRIMARY EXPORTS - Main API interface for frontend consumption
// ============================================================================

/**
 * AppRouter type - Essential for frontend tRPC client setup
 * This is the primary export that enables end-to-end type safety
 */
export type { AppRouter } from './server';

/**
 * Main app router instance - Used by Next.js API handler
 * This is the composed router that includes all feature routers
 */
export { appRouter } from './server';

// ============================================================================
// SERVER UTILITIES - For building routers and procedures
// ============================================================================

/**
 * TypeScript types for server utilities
 * Enables proper typing when extending the API
 */
export type {
  Context,
  TRPCMiddleware,
  TRPCProcedure,
  TRPCRouter,
} from './server';
/**
 * Core tRPC utilities for building feature routers
 * These are the building blocks for creating new routers and procedures
 */
export {
  createAppRouter,
  createContext,
  loggedPublicProcedure,
  middleware,
  protectedProcedure,
  publicProcedure,
  router,
} from './server';

// ============================================================================
// MIDDLEWARE EXPORTS - Cross-cutting concerns
// ============================================================================

/**
 * All middleware utilities and types
 * Provides access to authentication, logging, validation, and other middleware
 */
export * from './middleware';

// ============================================================================
// ROUTER EXPORTS - Feature-based routing
// ============================================================================

/**
 * All feature routers for direct access if needed
 * Allows importing specific routers: import { healthRouter } from '@u3/api'
 */
export * from './routers';
