/**
 * @fileoverview Todo feature Zod schemas for validation
 */

import { z } from 'zod';

export const todoSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  completed: z.boolean().default(false),
  userId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createTodoSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().optional(),
});

export const updateTodoSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  completed: z.boolean().optional(),
});

export const todoIdSchema = z.object({
  id: z.string().uuid(),
});
