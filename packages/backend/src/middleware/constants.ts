/**
 * Constants for middleware configuration and behavior
 * Centralizes configuration values and standard constants
 */

/**
 * Standard middleware execution orders
 * Lower numbers execute first, higher numbers execute later
 */
export const MIDDLEWARE_ORDER = {
  // Security and validation middleware (highest priority)
  SECURITY: 1,
  RATE_LIMIT: 5,
  CORS: 10,

  // Request processing middleware
  REQUEST_ID: 15,
  TIMING: 20,
  LOGGING: 25,
  DEBUG: 30,

  // Authentication and authorization middleware
  AUTH: 50,
  AUTHORIZATION: 55,

  // Business logic middleware
  VALIDATION: 70,
  TRANSFORMATION: 75,

  // Response processing middleware (lowest priority)
  RESPONSE_TRANSFORM: 90,
  CLEANUP: 95,
  FINALIZE: 100,
} as const;

/**
 * Standard HTTP status codes used in middleware
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
} as const;

/**
 * Standard tRPC error codes
 */
export const TRPC_ERROR_CODES = {
  PARSE_ERROR: 'PARSE_ERROR',
  BAD_REQUEST: 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  METHOD_NOT_SUPPORTED: 'METHOD_NOT_SUPPORTED',
  TIMEOUT: 'TIMEOUT',
  CONFLICT: 'CONFLICT',
  PRECONDITION_FAILED: 'PRECONDITION_FAILED',
  PAYLOAD_TOO_LARGE: 'PAYLOAD_TOO_LARGE',
  UNPROCESSABLE_CONTENT: 'UNPROCESSABLE_CONTENT',
  TOO_MANY_REQUESTS: 'TOO_MANY_REQUESTS',
  CLIENT_CLOSED_REQUEST: 'CLIENT_CLOSED_REQUEST',
} as const;

/**
 * Standard authentication token types
 */
export const AUTH_TOKEN_TYPES = {
  BEARER: 'Bearer',
  BASIC: 'Basic',
  API_KEY: 'ApiKey',
} as const;

/**
 * Standard HTTP headers used in middleware
 */
export const HTTP_HEADERS = {
  AUTHORIZATION: 'authorization',
  CONTENT_TYPE: 'content-type',
  USER_AGENT: 'user-agent',
  X_FORWARDED_FOR: 'x-forwarded-for',
  X_REAL_IP: 'x-real-ip',
  X_REQUEST_ID: 'x-request-id',
  X_CORRELATION_ID: 'x-correlation-id',
  X_API_KEY: 'x-api-key',
  CACHE_CONTROL: 'cache-control',
  ETAG: 'etag',
  IF_NONE_MATCH: 'if-none-match',
} as const;

/**
 * Default configuration values for middleware
 */
export const DEFAULT_CONFIG = {
  // Rate limiting defaults
  RATE_LIMIT: {
    MAX_REQUESTS: 100,
    WINDOW_MS: 60 * 1000, // 1 minute
  },

  // Authentication defaults
  AUTH: {
    TOKEN_EXPIRY: 24 * 60 * 60 * 1000, // 24 hours
    REFRESH_TOKEN_EXPIRY: 7 * 24 * 60 * 60 * 1000, // 7 days
  },

  // Logging defaults
  LOGGING: {
    LOG_LEVEL: 'info',
    LOG_REQUESTS: true,
    LOG_RESPONSES: false,
    LOG_ERRORS: true,
  },

  // Validation defaults
  VALIDATION: {
    STRIP_UNKNOWN: true,
    ABORT_EARLY: false,
  },

  // Timing defaults
  TIMING: {
    LOG_SLOW_REQUESTS: true,
    SLOW_REQUEST_THRESHOLD: 1000, // 1 second
  },
} as const;

/**
 * Standard middleware names
 * Used for consistent middleware identification
 */
export const MIDDLEWARE_NAMES = {
  AUTH: 'auth',
  AUTHORIZATION: 'authorization',
  LOGGING: 'logging',
  VALIDATION: 'validation',
  RATE_LIMIT: 'rateLimit',
  CORS: 'cors',
  TIMING: 'timing',
  DEBUG: 'debug',
  REQUEST_ID: 'requestId',
  SECURITY: 'security',
  TRANSFORMATION: 'transformation',
  RESPONSE_TRANSFORM: 'responseTransform',
  CLEANUP: 'cleanup',
} as const;

/**
 * Standard log levels
 */
export const LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug',
  TRACE: 'trace',
} as const;

/**
 * Standard validation error codes
 */
export const VALIDATION_ERROR_CODES = {
  REQUIRED: 'required',
  INVALID_TYPE: 'invalid_type',
  INVALID_FORMAT: 'invalid_format',
  TOO_SHORT: 'too_short',
  TOO_LONG: 'too_long',
  TOO_SMALL: 'too_small',
  TOO_BIG: 'too_big',
  INVALID_ENUM: 'invalid_enum',
  CUSTOM: 'custom',
} as const;

/**
 * Standard user roles
 */
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator',
  GUEST: 'guest',
} as const;

/**
 * Standard permissions
 */
export const PERMISSIONS = {
  READ: 'read',
  WRITE: 'write',
  DELETE: 'delete',
  ADMIN: 'admin',
} as const;

/**
 * Environment-specific constants
 */
export const ENVIRONMENT = {
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production',
  TEST: 'test',
} as const;

/**
 * Cache-related constants
 */
export const CACHE = {
  DEFAULT_TTL: 5 * 60 * 1000, // 5 minutes
  MAX_TTL: 24 * 60 * 60 * 1000, // 24 hours
  NO_CACHE: 0,
} as const;

/**
 * Request size limits
 */
export const REQUEST_LIMITS = {
  MAX_BODY_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_QUERY_LENGTH: 2048,
  MAX_HEADER_SIZE: 8192,
} as const;
