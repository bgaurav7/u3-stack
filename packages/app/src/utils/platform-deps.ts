/**
 * Platform-specific dependencies handler
 * This module safely loads platform-specific dependencies without breaking webpack builds
 */

// Platform detection - more robust detection method
const isReactNative =
  typeof window === 'undefined' &&
  typeof navigator !== 'undefined' &&
  navigator.product === 'ReactNative';

export interface PlatformDeps {
  useRouter?: () => {
    replace: (path: string) => void;
    push: (path: string) => void;
  };
  Alert?: { alert: (title: string, message: string) => void };
  // biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
  useSignIn?: () => any;
  // biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
  useSignUp?: () => any;
}

/**
 * Get platform-specific dependencies with safe fallbacks
 */
export function getPlatformDeps(): PlatformDeps {
  const deps: PlatformDeps = {};

  if (isReactNative) {
    // Mobile environment - provide fallbacks if packages not available
    deps.useRouter = () => ({
      replace: () => console.log('Navigation not available'),
      push: () => console.log('Navigation not available'),
    });

    deps.Alert = {
      alert: (title: string, message: string) =>
        console.log(`${title}: ${message}`),
    };

    deps.useSignIn = () => ({});
    deps.useSignUp = () => ({});
  } else {
    // Web environment - use browser APIs and provide fallbacks
    deps.useRouter = () => ({
      replace: (path: string) => {
        if (typeof window !== 'undefined') {
          window.location.href = path;
        }
      },
      push: (path: string) => {
        if (typeof window !== 'undefined') {
          window.location.href = path;
        }
      },
    });

    deps.Alert = {
      alert: (title: string, message: string) => {
        if (typeof window !== 'undefined' && window.alert) {
          window.alert(`${title}: ${message}`);
        } else {
          console.log(`${title}: ${message}`);
        }
      },
    };

    deps.useSignIn = () => ({});
    deps.useSignUp = () => ({});
  }

  return deps;
}

export { isReactNative };
