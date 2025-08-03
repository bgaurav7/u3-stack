'use client';

/**
 * Navigation error types
 */
export type NavigationError = {
  type: 'navigation_failed' | 'route_not_found' | 'sheet_load_failed';
  message: string;
  originalError?: Error;
  fallbackPath?: string;
};

/**
 * Navigation error handler options
 */
export interface NavigationErrorHandlerOptions {
  fallbackPath?: string;
  onError?: (error: NavigationError) => void;
  showUserMessage?: boolean;
}

/**
 * Default fallback path for navigation errors
 */
const DEFAULT_FALLBACK_PATH = '/app';

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
    fallbackPath: '/app',
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

  // Check if it matches sheet route pattern
  const sheetRoutePattern = /^\/t\/[a-zA-Z0-9\-_]+$/;
  return sheetRoutePattern.test(path);
};
