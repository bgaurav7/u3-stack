/**
 * Route Detection Utilities
 *
 * Provides utilities for detecting sheet routes, extracting parameters,
 * and validating route patterns for the U3-Stack route-backed sheets system.
 */

// Types for sheet configuration
export interface SheetConfig {
  type: 'task';
  id: string;
  basePath: string;
}

export type SheetType = 'task';

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
    pattern: /^\/t\/([^/]+)$/,
    basePath: '/t',
    type: 'task' as const,
  },
  // Future sheet types can be added here
  // project: {
  //   pattern: /^\/app\/p\/([^\/]+)$/,
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
  for (const [, config] of Object.entries(SHEET_ROUTE_PATTERNS)) {
    const match = pathname.match(config.pattern);
    if (match?.[1]) {
      return {
        type: config.type,
        id: match[1],
        basePath: config.basePath,
      };
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
  return config?.basePath || '/t';
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
