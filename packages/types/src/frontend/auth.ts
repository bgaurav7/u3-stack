/**
 * Platform-agnostic authentication interfaces
 * These interfaces are implemented by each platform (web/mobile) with their specific auth providers
 */

export interface AppAuthUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AppAuthState {
  isSignedIn: boolean;
  isLoading: boolean;
  user: AppAuthUser | null;
}

export interface SignInResult {
  success: boolean;
  error?: string;
  requiresVerification?: boolean;
}

export interface SignUpResult {
  success: boolean;
  error?: string;
  requiresVerification?: boolean;
}

export interface AuthProvider {
  // Authentication state
  useAuth: () => AppAuthState;

  // Sign in functionality
  signIn: (email: string, password: string) => Promise<SignInResult>;

  // Sign up functionality
  signUp: (email: string, password: string) => Promise<SignUpResult>;

  // Email verification
  verifyEmail: (code: string) => Promise<SignInResult>;

  // Sign out
  signOut: () => Promise<void>;

  // Navigation
  navigate: (path: string) => void;

  // Alert/notification
  showAlert: (title: string, message: string) => void;
}

export interface RouterProvider {
  replace: (path: string) => void;
  push: (path: string) => void;
}

export interface AlertProvider {
  alert: (title: string, message: string) => void;
}
