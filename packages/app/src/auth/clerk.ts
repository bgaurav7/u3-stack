// Platform detection without React Native dependencies
const isReactNative =
  typeof window === 'undefined' &&
  typeof navigator !== 'undefined' &&
  navigator.product === 'ReactNative';

// Platform-specific imports - using any due to dynamic platform-specific imports
// biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
let ClerkProvider: any;
// biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
let SignIn: any;
// biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
let SignUp: any;
// biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
let SignedIn: any;
// biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
let SignedOut: any;
// biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
let UserButton: any;
// biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
let useAuth: any;
// biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
let useUser: any;
// biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
let useClerk: any;

// Dynamic imports based on platform using safe detection
if (!isReactNative) {
  // Web imports
  try {
    // biome-ignore lint/security/noGlobalEval: Required to prevent webpack from bundling React Native dependencies
    const clerkReact = eval('require')('@clerk/clerk-react');
    ClerkProvider = clerkReact.ClerkProvider;
    SignIn = clerkReact.SignIn;
    SignUp = clerkReact.SignUp;
    SignedIn = clerkReact.SignedIn;
    SignedOut = clerkReact.SignedOut;
    UserButton = clerkReact.UserButton;
    useAuth = clerkReact.useAuth;
    useUser = clerkReact.useUser;
    useClerk = clerkReact.useClerk;
  } catch (_e) {
    // Clerk React not available, provide fallbacks
    // biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
    ClerkProvider = ({ children }: any) => children;
    SignIn = () => null;
    SignUp = () => null;
    // biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
    SignedIn = ({ children }: any) => children;
    // biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
    SignedOut = ({ children }: any) => children;
    UserButton = () => null;
    useAuth = () => ({});
    useUser = () => ({});
    useClerk = () => ({});
  }
} else {
  // React Native imports
  try {
    // biome-ignore lint/security/noGlobalEval: Required to prevent webpack from bundling React Native dependencies
    const clerkExpo = eval('require')('@clerk/clerk-expo');
    ClerkProvider = clerkExpo.ClerkProvider;
    SignIn = clerkExpo.SignIn;
    SignUp = clerkExpo.SignUp;
    SignedIn = clerkExpo.SignedIn;
    SignedOut = clerkExpo.SignedOut;
    UserButton = clerkExpo.UserButton;
    useAuth = clerkExpo.useAuth;
    useUser = clerkExpo.useUser;
    useClerk = clerkExpo.useClerk;
  } catch (_e) {
    // Clerk Expo not available, provide fallbacks
    // biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
    ClerkProvider = ({ children }: any) => children;
    SignIn = () => null;
    SignUp = () => null;
    // biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
    SignedIn = ({ children }: any) => children;
    // biome-ignore lint/suspicious/noExplicitAny: Required for dynamic platform imports
    SignedOut = ({ children }: any) => children;
    UserButton = () => null;
    useAuth = () => ({});
    useUser = () => ({});
    useClerk = () => ({});
  }
}

/**
 * User data interface
 */
export interface AuthUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Authentication state interface
 */
export interface AuthState {
  isSignedIn: boolean;
  isLoading: boolean;
  user: AuthUser | null;
}

/**
 * Transform Clerk user to our AuthUser interface
 */
// biome-ignore lint/suspicious/noExplicitAny: Clerk user type varies by platform
function transformClerkUser(clerkUser: any): AuthUser | null {
  if (!clerkUser) return null;

  return {
    id: clerkUser.id,
    email: clerkUser.primaryEmailAddress?.emailAddress || '',
    firstName: clerkUser.firstName || undefined,
    lastName: clerkUser.lastName || undefined,
    fullName: clerkUser.fullName || undefined,
    imageUrl: clerkUser.imageUrl || undefined,
    createdAt: clerkUser.createdAt ? new Date(clerkUser.createdAt) : undefined,
    updatedAt: clerkUser.updatedAt ? new Date(clerkUser.updatedAt) : undefined,
  };
}

/**
 * Custom hook that wraps Clerk's useAuth with our interface
 */
export function useAuthWrapper(): AuthState {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();

  return {
    isSignedIn: isSignedIn || false,
    isLoading: !isLoaded,
    user: transformClerkUser(user),
  };
}

/**
 * Custom hook for sign out functionality
 */
export function useSignOut() {
  const { signOut } = useClerk();

  return {
    signOut: async () => {
      try {
        await signOut();
      } catch (error) {
        console.error('Sign out error:', error);
        throw error;
      }
    },
  };
}

// Re-export Clerk components and hooks
export {
  ClerkProvider,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
  useClerk,
};
