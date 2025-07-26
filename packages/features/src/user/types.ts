/**
 * @fileoverview User feature type definitions
 */

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserInput {
  email: string;
  name: string;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
}

export interface UserIdInput {
  id: string;
}
