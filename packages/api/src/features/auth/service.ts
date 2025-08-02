/**
 * @fileoverview Auth feature business logic service
 */

import type {
  AuthResult,
  AuthUser,
  LoginInput,
  RegisterInput,
} from '@u3/types';
import { generateUUID } from '../../utils';
import { authResultSchema, authUserSchema } from './schema';

// Mock user storage (replace with database in production)
const users: AuthUser[] = [];

export const authService = {
  // Test utility - clear all users (for testing only)
  _clearUsers(): void {
    users.length = 0;
  },

  async login(input: LoginInput): Promise<AuthResult | null> {
    // Mock authentication logic
    const user = users.find(u => u.email === input.email);

    if (!user) {
      return null;
    }

    // In production, verify password hash
    const authResult: AuthResult = {
      user,
      token: `mock-token-${user.id}`,
    };

    return authResultSchema.parse(authResult);
  },

  async register(input: RegisterInput): Promise<AuthResult> {
    // Check if user already exists
    const existingUser = users.find(u => u.email === input.email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const newUser: AuthUser = {
      id: generateUUID(),
      email: input.email,
      name: input.name,
    };

    // Validate with schema
    const validatedUser = authUserSchema.parse(newUser);
    users.push(validatedUser);

    const authResult: AuthResult = {
      user: validatedUser,
      token: `mock-token-${validatedUser.id}`,
    };

    return authResultSchema.parse(authResult);
  },

  async validateToken(token: string): Promise<AuthUser | null> {
    // Mock token validation
    if (!token.startsWith('mock-token-')) {
      return null;
    }

    const userId = token.replace('mock-token-', '');
    const user = users.find(u => u.id === userId);

    return user || null;
  },
};
