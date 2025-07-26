/**
 * Barrel exports for all middleware
 * This file provides clean imports for middleware modules and utilities
 */

// Base middleware classes and builders
export {
  BaseMiddleware,
  createMiddlewareBuilder,
  createSimpleMiddleware,
  SimpleMiddleware,
} from './base';
// Base middleware types and interfaces
export type {
  AuthenticatedContext,
  AuthToken,
  ComposedMiddleware,
  MiddlewareConfig,
  MiddlewareContext,
  MiddlewareErrorHandler,
  MiddlewareFunction,
  MiddlewareMetadata,
  MiddlewarePipeline,
  MiddlewareResult,
  RequestLog,
  UserSession,
  ValidationError,
} from './types';
// Middleware composition utilities
export {
  composeMiddleware,
  conditionalMiddleware,
  createDebugMiddleware,
  createMiddleware,
  createMiddlewarePipeline,
  createRateLimitMiddleware,
  createTimingMiddleware,
  defaultErrorHandler,
  validateMiddlewareDependencies,
} from './utils';
// export type { MiddlewareBuilder } from './base';

// Constants and configuration
export {
  AUTH_TOKEN_TYPES,
  CACHE,
  DEFAULT_CONFIG,
  ENVIRONMENT,
  HTTP_HEADERS,
  HTTP_STATUS,
  LOG_LEVELS,
  MIDDLEWARE_NAMES,
  MIDDLEWARE_ORDER,
  PERMISSIONS,
  REQUEST_LIMITS,
  TRPC_ERROR_CODES,
  USER_ROLES,
  VALIDATION_ERROR_CODES,
} from './constants';

// Specific middleware implementations will be exported here as they are implemented
// export { authMiddleware } from './auth'
// export { loggingMiddleware } from './logging'
// export { validationMiddleware } from './validation'
