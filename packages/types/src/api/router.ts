// AppRouter type definition for tRPC
// This defines the structure of the main application router

/**
 * AppRouter type representing the complete tRPC router structure
 * Uses 'any' type for flexibility while the API structure evolves
 */
export type AppRouter = any;

/**
 * Type for the router creation function parameters
 */
export type AppRouterConfig = {
  health: any;
  todo: any;
  auth: any;
  user: any;
};
