/**
 * Clerk-specific type definitions
 * These types extend the base auth types with Clerk-specific functionality
 */

import type { AppAuthUser } from '../frontend/auth';

/**
 * Clerk user type - extends base auth user with Clerk-specific fields
 */
export interface ClerkUser extends Omit<AppAuthUser, 'firstName' | 'lastName'> {
  emailAddresses: {
    emailAddress: string;
    verified: boolean;
  }[];
  phoneNumbers: {
    phoneNumber: string;
    verified: boolean;
  }[];
  firstName: string | null;
  lastName: string | null;
  imageUrl: string;
}

/**
 * Clerk session token claims
 */
export interface ClerkTokenClaims {
  sub: string; // User ID
  email?: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  exp: number;
  iat: number;
  iss: string;
  aud?: string;
  azp?: string;
}

/**
 * Clerk authentication context
 */
export interface ClerkAuthContext {
  user: ClerkUser | null;
  isSignedIn: boolean;
  isLoading: boolean;
  session: {
    id: string;
    getToken: (options?: { template?: string }) => Promise<string | null>;
  } | null;
}
