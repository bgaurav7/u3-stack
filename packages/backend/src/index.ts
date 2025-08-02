/**
 * Barrel exports for @u3/backend package
 * This file provides clean import paths for consuming packages
 *
 * Usage examples:
 * - Frontend: import type { AppRouter } from '@u3/backend'
 * - Feature packages: import { router, publicProcedure } from '@u3/backend'
 * - Middleware: import { authMiddleware } from '@u3/backend/middleware'
 */

// ============================================================================
// PRIMARY EXPORTS - Main API interface for frontend consumption
// ============================================================================

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
 * Allows importing specific routers: import { healthRouter } from '@u3/backend'
 */
export * from './routers';
