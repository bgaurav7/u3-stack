/**
 * Route Detection Utilities
 *
 * Provides utilities for detecting sheet routes, extracting parameters,
 * validating route patterns, and handling navigation errors for the U3-Stack route-backed sheets system.
 */

// Types for sheet configuration
export interface SheetConfig {
  type: 'task';
  id: string;
  basePath: string;
}

export type SheetType = 'task';

// Constants
const DEFAULT_SHEET_BASE_PATH = '/t';
const DEFAULT_FALLBACK_PATH = '/t';

// Navigation error types
export type NavigationError = {
  type: 'navigation_failed' | 'route_not_found' | 'sheet_load_failed';
  message: string;
  originalError?: Error;
  fallbackPath?: string;
};

export interface NavigationErrorHandlerOptions {
  fallbackPath?: string;
  onError?: (error: NavigationError) => void;
  showUserMessage?: boolean;
}

export interface RouteMatch {
  type: SheetType;
  id: string;
  params: Record<string, string>;
}

export interface RouteValidationResult {
  isValid: boolean;
  error?: string;
  match?: RouteMatch;
}

// Route patterns for different sheet types
const SHEET_ROUTE_PATTERNS = {
  task: {
    pattern: /^\/t\/([^/]+)\/?$/,
    basePath: '/t',
    type: 'task' as const,
  },
  // Future sheet types can be added here
  // project: {
  //   pattern: /^\/app\/p\/([^\/]+)\/?$/,
  //   basePath: '/app',
  //   type: 'project' as const,
  // },
} as const;

/**
 * Checks if a given pathname represents a sheet route
 * @param pathname - The URL pathname to check
 * @returns boolean indicating if this is a sheet route
 */
export function isSheetRoute(pathname: string): boolean {
  if (!pathname || typeof pathname !== 'string') {
    return false;
  }

  // Check against all known sheet route patterns
  return Object.values(SHEET_ROUTE_PATTERNS).some(({ pattern }) =>
    pattern.test(pathname)
  );
}

/**
 * Extracts sheet type and parameters from a pathname
 * @param pathname - The URL pathname to parse
 * @returns SheetConfig object or null if not a valid sheet route
 */
export function getSheetConfig(pathname: string): SheetConfig | null {
  if (!pathname || typeof pathname !== 'string') {
    return null;
  }

  // Check each pattern to find a match
  for (const [_, config] of Object.entries(SHEET_ROUTE_PATTERNS)) {
    const match = pathname.match(config.pattern);
    if (match?.[1]) {
      const result = {
        type: config.type,
        id: match[1],
        basePath: config.basePath,
      };
      return result;
    }
  }

  return null;
}

/**
 * Extracts route parameters from a sheet route pathname
 * @param pathname - The URL pathname to parse
 * @returns Record of parameter key-value pairs or empty object
 */
export function extractRouteParams(pathname: string): Record<string, string> {
  if (!pathname || typeof pathname !== 'string') {
    return {};
  }

  // For task routes, extract the task ID
  const taskMatch = pathname.match(SHEET_ROUTE_PATTERNS.task.pattern);
  if (taskMatch?.[1]) {
    return {
      id: taskMatch[1],
      type: 'task',
    };
  }

  return {};
}

/**
 * Validates a sheet route and returns detailed validation result
 * @param pathname - The URL pathname to validate
 * @returns RouteValidationResult with validation status and details
 */
export function validateSheetRoute(pathname: string): RouteValidationResult {
  // Basic input validation
  if (!pathname || typeof pathname !== 'string') {
    return {
      isValid: false,
      error: 'Invalid pathname: must be a non-empty string',
    };
  }

  // Check if it's a sheet route at all
  if (!isSheetRoute(pathname)) {
    return {
      isValid: false,
      error: 'Not a valid sheet route pattern',
    };
  }

  // Extract and validate the match
  const config = getSheetConfig(pathname);
  if (!config) {
    return {
      isValid: false,
      error: 'Failed to extract sheet configuration',
    };
  }

  // Validate the extracted ID
  if (!config.id || config.id.trim().length === 0) {
    return {
      isValid: false,
      error: 'Invalid or missing sheet ID',
    };
  }

  // Additional validation for specific sheet types
  switch (config.type) {
    case 'task':
      if (!isValidTaskId(config.id)) {
        return {
          isValid: false,
          error: 'Invalid task ID format',
        };
      }
      break;
    default:
      return {
        isValid: false,
        error: `Unknown sheet type: ${config.type}`,
      };
  }

  // If we get here, the route is valid
  return {
    isValid: true,
    match: {
      type: config.type,
      id: config.id,
      params: extractRouteParams(pathname),
    },
  };
}

/**
 * Gets the base path for a given sheet route
 * @param pathname - The sheet route pathname
 * @returns The base path to return to when closing the sheet
 */
export function getSheetBasePath(pathname: string): string {
  const config = getSheetConfig(pathname);
  return config?.basePath || DEFAULT_SHEET_BASE_PATH;
}

/**
 * Constructs a sheet route URL from type and ID
 * @param type - The sheet type
 * @param id - The sheet ID
 * @returns The constructed route URL
 */
export function buildSheetRoute(type: SheetType, id: string): string {
  if (!id || id.trim().length === 0) {
    throw new Error('Sheet ID is required');
  }

  switch (type) {
    case 'task':
      return `/t/${encodeURIComponent(id)}`;
    default:
      throw new Error(`Unknown sheet type: ${type}`);
  }
}

/**
 * Checks if a sheet route matches a specific type
 * @param pathname - The pathname to check
 * @param type - The sheet type to match against
 * @returns boolean indicating if the route matches the type
 */
export function isSheetRouteOfType(pathname: string, type: SheetType): boolean {
  const config = getSheetConfig(pathname);
  return config?.type === type;
}

/**
 * Gets all supported sheet types
 * @returns Array of supported sheet types
 */
export function getSupportedSheetTypes(): SheetType[] {
  return Object.keys(SHEET_ROUTE_PATTERNS) as SheetType[];
}

// Helper functions for validation

/**
 * Validates task ID format
 * @param id - The task ID to validate
 * @returns boolean indicating if the ID is valid
 */
function isValidTaskId(id: string): boolean {
  if (!id || typeof id !== 'string') {
    return false;
  }

  // Task IDs should be non-empty and not contain invalid characters
  // Allow alphanumeric, hyphens, underscores, and dots
  const validIdPattern = /^[a-zA-Z0-9._-]+$/;
  return validIdPattern.test(id) && id.length > 0 && id.length <= 100;
}

/**
 * Normalizes a pathname by removing trailing slashes and ensuring it starts with /
 * @param pathname - The pathname to normalize
 * @returns Normalized pathname
 */
export function normalizePathname(pathname: string): string {
  if (!pathname || typeof pathname !== 'string') {
    return '/';
  }

  // Ensure it starts with /
  let normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;

  // Remove trailing slash unless it's the root
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  return normalized;
}

/**
 * Checks if two pathnames represent the same sheet route
 * @param pathname1 - First pathname
 * @param pathname2 - Second pathname
 * @returns boolean indicating if they represent the same sheet route
 */
export function isSameSheetRoute(
  pathname1: string,
  pathname2: string
): boolean {
  const config1 = getSheetConfig(normalizePathname(pathname1));
  const config2 = getSheetConfig(normalizePathname(pathname2));

  if (!config1 || !config2) {
    return false;
  }

  return config1.type === config2.type && config1.id === config2.id;
}

// Navigation Error Handling Functions

/**
 * Handle navigation errors with fallback navigation
 */
export const handleNavigationError = (
  error: Error,
  navigate: (path: string) => void,
  options: NavigationErrorHandlerOptions = {}
): NavigationError => {
  const {
    fallbackPath = DEFAULT_FALLBACK_PATH,
    onError,
    showUserMessage = true,
  } = options;

  // Create navigation error object
  const navigationError: NavigationError = {
    type: 'navigation_failed',
    message: `Navigation failed: ${error.message}`,
    originalError: error,
    fallbackPath,
  };

  // Log error for debugging
  console.error('Navigation error:', error);

  // Call error callback if provided
  onError?.(navigationError);

  // Show user-friendly message if enabled
  if (showUserMessage && typeof window !== 'undefined') {
    // Simple alert for now - could be replaced with toast system
    console.warn('Navigation failed. Redirecting to main app.');
  }

  // Attempt fallback navigation
  try {
    navigate(fallbackPath);
  } catch (fallbackError) {
    console.error('Fallback navigation also failed:', fallbackError);

    // If fallback fails, try to go to root
    try {
      navigate('/');
    } catch (rootError) {
      console.error('Root navigation failed:', rootError);
      // Last resort - reload page
      if (typeof window !== 'undefined') {
        window.location.href = fallbackPath;
      }
    }
  }

  return navigationError;
};

/**
 * Handle sheet-specific navigation errors
 */
export const handleSheetNavigationError = (
  error: Error,
  navigate: (path: string) => void,
  sheetId?: string
): NavigationError => {
  console.error(
    `Sheet navigation error${sheetId ? ` for ID: ${sheetId}` : ''}:`,
    error
  );

  // Try to navigate back to main app
  return handleNavigationError(error, navigate, {
    fallbackPath: DEFAULT_FALLBACK_PATH,
    onError: err => {
      console.error('Sheet error details:', err);
    },
  });
};

/**
 * Wrap navigation function with error handling
 */
export const withNavigationErrorHandling = (
  navigate: (path: string) => void,
  options: NavigationErrorHandlerOptions = {}
) => {
  return (path: string) => {
    try {
      navigate(path);
    } catch (error) {
      handleNavigationError(error as Error, navigate, options);
    }
  };
};

/**
 * Check if a route is valid (basic validation)
 */
export const isValidRoute = (path: string): boolean => {
  // Basic route validation
  if (!path || typeof path !== 'string') {
    return false;
  }

  // Must start with /
  if (!path.startsWith('/')) {
    return false;
  }

  // Check for valid characters (basic check)
  const validRoutePattern = /^\/[a-zA-Z0-9\-_/]*$/;
  return validRoutePattern.test(path);
};

/**
 * Validate sheet route format
 */
export const isValidSheetRoute = (path: string): boolean => {
  if (!isValidRoute(path)) {
    return false;
  }

  // Use shared validation logic
  return isSheetRoute(path);
};
