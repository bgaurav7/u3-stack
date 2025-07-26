/**
 * @fileoverview Auth tRPC router with authentication endpoints
 * Implements login, register, and token validation procedures
 */

import { TRPCError } from '@trpc/server';
import { authService } from '@u3/features/auth';
import { loginSchema, registerSchema } from '@u3/features/auth/schema';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const authRouter = router({
  /**
   * Login endpoint - public procedure for user authentication
   * Takes email and password, returns user info and auth token
   */
  login: publicProcedure.input(loginSchema).mutation(async ({ input }) => {
    try {
      const result = await authService.login(input);

      if (!result) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid email or password',
        });
      }

      return result;
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error;
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to authenticate user',
        cause: error,
      });
    }
  }),

  /**
   * Register endpoint - public procedure for user registration
   * Takes email, password, and name, creates new user and returns auth info
   */
  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ input }) => {
      try {
        const result = await authService.register(input);
        return result;
      } catch (error) {
        if (error instanceof Error && error.message === 'User already exists') {
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'User with this email already exists',
          });
        }

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to register user',
          cause: error,
        });
      }
    }),

  /**
   * Get current user - protected endpoint that returns authenticated user info
   * Uses the user context injected by authentication middleware
   */
  me: protectedProcedure.query(async ({ ctx }) => {
    try {
      // Return the authenticated user from context
      return ctx.user;
    } catch (error) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get user information',
        cause: error,
      });
    }
  }),

  /**
   * Logout endpoint - protected procedure for user logout
   * In a real implementation, this would invalidate the token
   * For now, it just returns success (client should remove token)
   */
  logout: protectedProcedure.mutation(async () => {
    try {
      // In a real implementation, you would invalidate the token here
      // For now, just return success - client should remove the token
      return { success: true, message: 'Logged out successfully' };
    } catch (error) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to logout user',
        cause: error,
      });
    }
  }),
});
