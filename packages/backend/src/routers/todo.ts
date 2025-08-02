/**
 * @fileoverview Todo tRPC router with CRUD operations
 * Implements list, getById, create, update, delete procedures with proper validation
 */

import { TRPCError } from '@trpc/server';
import { createTodoSchema, todoIdSchema, updateTodoSchema } from '@u3/types';
import { todoService } from '../features/todo';
import { protectedProcedure, router } from '../trpc';

export const todoRouter = router({
  /**
   * List user's todos - protected endpoint requiring authentication
   * Returns only todos belonging to the authenticated user
   */
  list: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await todoService.getAllTodosByUser(ctx.user.id);
    } catch (error) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch todos',
        cause: error,
      });
    }
  }),

  /**
   * Get todo by ID - protected endpoint requiring authentication
   * Returns todo only if it belongs to the authenticated user
   */
  getById: protectedProcedure
    .input(todoIdSchema)
    .query(async ({ input, ctx }) => {
      try {
        const todo = await todoService.getTodoById(input.id, ctx.user.id);

        if (!todo) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: `Todo with id ${input.id} not found or you don't have permission to access it`,
          });
        }

        return todo;
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch todo',
          cause: error,
        });
      }
    }),

  /**
   * Create new todo - protected endpoint requiring authentication
   * Automatically associates todo with authenticated user
   */
  create: protectedProcedure
    .input(createTodoSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const todo = await todoService.createTodo({
          ...input,
          userId: ctx.user.id,
        });

        return todo;
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to create todo',
          cause: error,
        });
      }
    }),

  /**
   * Update existing todo - protected endpoint requiring authentication
   * Only allows users to update their own todos
   */
  update: protectedProcedure
    .input(updateTodoSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const { id, ...updateData } = input;
        const updatedTodo = await todoService.updateTodo(
          id,
          updateData,
          ctx.user.id
        );

        if (!updatedTodo) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: `Todo with id ${id} not found or you don't have permission to update it`,
          });
        }

        return updatedTodo;
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to update todo',
          cause: error,
        });
      }
    }),

  /**
   * Delete todo - protected endpoint requiring authentication
   * Only allows users to delete their own todos
   */
  delete: protectedProcedure
    .input(todoIdSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const deleted = await todoService.deleteTodo(input.id, ctx.user.id);

        if (!deleted) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: `Todo with id ${input.id} not found or you don't have permission to delete it`,
          });
        }

        return { success: true, id: input.id };
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to delete todo',
          cause: error,
        });
      }
    }),
});
