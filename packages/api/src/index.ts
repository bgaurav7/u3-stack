// Barrel exports for @u3/api package
// This file provides clean import paths for consuming packages

// Export middleware for reuse
export * from './middleware';
// Export all routers for direct access if needed
export * from './routers';
// Export main server configuration and types
// Export router utilities for extension
export {
  type AppRouter,
  appRouter,
  protectedProcedure,
  publicProcedure,
  router,
} from './server';
