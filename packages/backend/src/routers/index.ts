// Barrel exports for all routers
// This file provides clean imports for router modules
// Enables importing routers as: import { healthRouter, todoRouter } from '@u3/backend/routers'

// Feature routers will be exported here as they are implemented
// These exports will be uncommented when the respective router files are created

// Re-export common router types and utilities for convenience
// This allows consumers to import router types directly from the routers barrel
export type {} from // Router type definitions will be added here when routers are implemented
'../server';
// Health router - provides system health and status endpoints
export { healthRouter } from './health';
// Todo router - provides CRUD operations for todo management
export { todoRouter } from './todo';
