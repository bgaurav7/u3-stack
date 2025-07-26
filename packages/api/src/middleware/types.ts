/**
 * Base types and interfaces for tRPC middleware
 * Provides type definitions for middleware composition and context handling
 */

import type { TRPCError } from '@trpc/server';
import type { Context } from '../server';

/**
 * Base middleware context interface
 * Extends the main Context with middleware-specific properties
 */
export interface MiddlewareContext extends Context {
  // Additional context properties can be added here
  startTime?: number;
  requestId?: string;
}

/**
 * Authenticated context interface
 * Guarantees that user is present after authentication middleware
 */
export interface AuthenticatedContext extends MiddlewareContext {
  user: {
    id: string;
    email: string;
    name: string;
    roles?: string[];
  };
}

/**
 * Middleware result interface
 * Defines the structure of middleware execution results
 */
export interface MiddlewareResult<TContext = MiddlewareContext> {
  ctx: TContext;
  next: () => Promise<MiddlewareResult<TContext>>;
}

/**
 * Middleware function type definition
 * Generic type for creating type-safe middleware functions
 */
export type MiddlewareFunction<
  TInputContext extends MiddlewareContext = MiddlewareContext,
  TOutputContext extends MiddlewareContext = TInputContext,
> = (opts: {
  ctx: TInputContext;
  next: () => Promise<{ ctx: TOutputContext }>;
  path?: string;
  type?: 'query' | 'mutation' | 'subscription';
}) => Promise<{ ctx: TOutputContext }>;

/**
 * Error handler type for middleware
 * Standardizes error handling across middleware
 */
export type MiddlewareErrorHandler = (
  error: TRPCError | Error,
  context: {
    path?: string;
    type?: 'query' | 'mutation' | 'subscription';
    ctx: MiddlewareContext;
  }
) => TRPCError | Error;

/**
 * Middleware configuration interface
 * Allows configuration of middleware behavior
 */
export interface MiddlewareConfig {
  enabled?: boolean;
  errorHandler?: MiddlewareErrorHandler;
  skipPaths?: string[];
  onlyPaths?: string[];
}

/**
 * Middleware metadata interface
 * Provides information about middleware for debugging and monitoring
 */
export interface MiddlewareMetadata {
  name: string;
  version?: string;
  description?: string;
  dependencies?: string[];
  order?: number;
}

/**
 * Composed middleware interface
 * Represents a middleware with its configuration and metadata
 */
export interface ComposedMiddleware {
  middleware: MiddlewareFunction;
  config: MiddlewareConfig;
  metadata: MiddlewareMetadata;
}

/**
 * Middleware pipeline interface
 * Manages the execution order and composition of multiple middleware
 */
export interface MiddlewarePipeline {
  add(middleware: ComposedMiddleware): void;
  remove(name: string): boolean;
  execute<TContext extends MiddlewareContext>(
    ctx: TContext,
    path?: string,
    type?: 'query' | 'mutation' | 'subscription'
  ): Promise<TContext>;
  getMiddleware(name: string): ComposedMiddleware | undefined;
  list(): ComposedMiddleware[];
}

/**
 * Authentication token interface
 * Standardizes token structure for authentication middleware
 */
export interface AuthToken {
  type: 'Bearer' | 'Basic' | 'ApiKey';
  value: string;
  expiresAt?: Date;
  scopes?: string[];
}

/**
 * User session interface
 * Represents an authenticated user session
 */
export interface UserSession {
  id: string;
  email: string;
  name: string;
  roles?: string[];
  permissions?: string[];
  sessionId?: string;
  expiresAt?: Date;
}

/**
 * Validation error interface
 * Standardizes validation error structure
 */
export interface ValidationError {
  field: string;
  message: string;
  code: string;
  value?: any;
}

/**
 * Request logging interface
 * Standardizes request logging structure
 */
export interface RequestLog {
  requestId: string;
  method: string;
  path: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  statusCode?: number;
  error?: string;
  userId?: string;
  userAgent?: string;
  ip?: string;
}
