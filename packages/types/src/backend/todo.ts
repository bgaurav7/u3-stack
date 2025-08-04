// Todo-related schemas and types - Schema-driven approach
import { z } from 'zod';

// ============================================================================
// ZOD SCHEMAS - Source of truth for validation and types
// ============================================================================

export const todoSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  completed: z.boolean().default(false),
  userId: z.string().min(1), // Changed from .uuid() to .min(1) to accept Clerk user IDs
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

// ============================================================================
// TYPESCRIPT TYPES - Inferred from schemas to ensure consistency
// ============================================================================

export type Todo = z.infer<typeof todoSchema>;
export type CreateTodoInput = z.infer<typeof createTodoSchema>;
export type UpdateTodoInput = z.infer<typeof updateTodoSchema>;
export type TodoIdInput = z.infer<typeof todoIdSchema>;
