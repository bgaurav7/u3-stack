/**
 * @fileoverview Auth feature business logic service
 */

import { authResultSchema, authUserSchema } from './schema';
import type { AuthResult, AuthUser, LoginInput, RegisterInput } from './types';

// Mock user storage (replace with database in production)
const users: AuthUser[] = [];
let nextId = 1;

export const authService = {
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
      id: `user-${nextId++}`,
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
