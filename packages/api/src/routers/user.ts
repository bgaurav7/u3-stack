/**
 * @fileoverview User tRPC router with user management endpoints
 * Implements CRUD operations for user management
 */

import { TRPCError } from '@trpc/server';
import { userService } from '@u3/features/user';
import {
  createUserSchema,
  updateUserSchema,
  userIdSchema,
} from '@u3/features/user/schema';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const userRouter = router({
  /**
   * List all users - public endpoint for demo purposes
   * In production, this might be protected and have pagination/filtering
   */
  list: publicProcedure.query(async () => {
    try {
      return await userService.getAllUsers();
    } catch (error) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch users',
        cause: error,
      });
    }
  }),

  /**
   * Get user by ID - public endpoint for demo purposes
   * In production, this might be protected or have privacy controls
   */
  getById: publicProcedure.input(userIdSchema).query(async ({ input }) => {
    try {
      const user = await userService.getUserById(input.id);

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `User with id ${input.id} not found`,
        });
      }

      return user;
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error;
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch user',
        cause: error,
      });
    }
  }),

  /**
   * Create new user - protected endpoint requiring authentication
   * In production, this might be admin-only or part of registration flow
   */
  create: protectedProcedure
    .input(createUserSchema)
    .mutation(async ({ input }) => {
      try {
        const user = await userService.createUser(input);
        return user;
      } catch (error) {
        if (
          error instanceof Error &&
          error.message === 'User with this email already exists'
        ) {
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'User with this email already exists',
          });
        }

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to create user',
          cause: error,
        });
      }
    }),

  /**
   * Update user - protected endpoint requiring authentication
   * Users can only update their own profile, or admins can update any user
   * For now, allowing any authenticated user to update any user (demo purposes)
   */
  update: protectedProcedure
    .input(updateUserSchema)
    .mutation(async ({ input }) => {
      try {
        const { id, ...updateData } = input;
        const updatedUser = await userService.updateUser(id, updateData);

        if (!updatedUser) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: `User with id ${id} not found`,
          });
        }

        return updatedUser;
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        if (
          error instanceof Error &&
          error.message === 'User with this email already exists'
        ) {
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'User with this email already exists',
          });
        }

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to update user',
          cause: error,
        });
      }
    }),

  /**
   * Delete user - protected endpoint requiring authentication
   * In production, this would likely be admin-only or self-deletion with confirmation
   * For now, allowing any authenticated user to delete any user (demo purposes)
   */
  delete: protectedProcedure.input(userIdSchema).mutation(async ({ input }) => {
    try {
      const deleted = await userService.deleteUser(input.id);

      if (!deleted) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `User with id ${input.id} not found`,
        });
      }

      return { success: true, id: input.id };
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error;
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to delete user',
        cause: error,
      });
    }
  }),

  /**
   * Get current user profile - protected endpoint
   * Returns the authenticated user's own profile information
   */
  profile: protectedProcedure.query(async ({ ctx }) => {
    try {
      // Get full user details from the service using the authenticated user's ID
      const user = await userService.getUserById(ctx.user.id);

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User profile not found',
        });
      }

      return user;
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error;
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get user profile',
        cause: error,
      });
    }
  }),

  /**
   * Update current user profile - protected endpoint
   * Allows authenticated users to update their own profile
   */
  updateProfile: protectedProcedure
    .input(updateUserSchema.omit({ id: true }))
    .mutation(async ({ input, ctx }) => {
      try {
        const updatedUser = await userService.updateUser(ctx.user.id, input);

        if (!updatedUser) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'User profile not found',
          });
        }

        return updatedUser;
      } catch (error) {
        if (
          error instanceof Error &&
          error.message === 'User with this email already exists'
        ) {
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'User with this email already exists',
          });
        }

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to update user profile',
          cause: error,
        });
      }
    }),
});
