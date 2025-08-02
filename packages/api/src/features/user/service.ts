/**
 * @fileoverview User feature business logic service
 */

import type { CreateUserInput, UpdateUserInput, User } from '@u3/types';
import { generateUUID } from '../../utils';
import { userSchema } from './schema';

// Mock user storage (replace with database in production)
const users: User[] = [];

export const userService = {
  async getAllUsers(): Promise<User[]> {
    return users;
  },

  // Test utility - clear all users (for testing only)
  _clearUsers(): void {
    users.length = 0;
  },

  async getUserById(id: string): Promise<User | null> {
    const user = users.find(u => u.id === id);
    return user || null;
  },

  async getUserByEmail(email: string): Promise<User | null> {
    const user = users.find(u => u.email === email);
    return user || null;
  },

  async createUser(input: CreateUserInput): Promise<User> {
    // Check if user already exists
    const existingUser = users.find(u => u.email === input.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const newUser: User = {
      id: generateUUID(),
      email: input.email,
      name: input.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Validate with schema
    const validatedUser = userSchema.parse(newUser);
    users.push(validatedUser);

    return validatedUser;
  },

  async updateUser(
    id: string,
    input: Partial<UpdateUserInput>
  ): Promise<User | null> {
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
      return null;
    }

    // Check email uniqueness if updating email
    if (input.email) {
      const existingUser = users.find(
        u => u.email === input.email && u.id !== id
      );
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
    }

    const updatedUser = {
      ...users[userIndex],
      ...input,
      updatedAt: new Date(),
    };

    // Validate with schema
    const validatedUser = userSchema.parse(updatedUser);
    users[userIndex] = validatedUser;

    return validatedUser;
  },

  async deleteUser(id: string): Promise<boolean> {
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
      return false;
    }

    users.splice(userIndex, 1);
    return true;
  },
};
