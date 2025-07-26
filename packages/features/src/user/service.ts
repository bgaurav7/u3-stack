/**
 * @fileoverview User feature business logic service
 */

import { userSchema } from './schema';
import type { CreateUserInput, UpdateUserInput, User } from './types';

// Mock user storage (replace with database in production)
const users: User[] = [];
let nextId = 1;

export const userService = {
  async getAllUsers(): Promise<User[]> {
    return users;
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
      id: `user-${nextId++}`,
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
