/**
 * @fileoverview Auth feature Zod schemas for validation
 */

import { z } from 'zod';

export const authUserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1).max(255),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1).max(255),
});

export const authResultSchema = z.object({
  user: authUserSchema,
  token: z.string(),
});
