/**
 * @fileoverview Todo tRPC router with CRUD operations
 * Implements list, getById, create, update, delete procedures with proper validation
 */

import { TRPCError } from '@trpc/server';
import { todoService } from '@u3/features/todo';
import {
  createTodoSchema,
  todoIdSchema,
  updateTodoSchema,
} from '@u3/features/todo/schema';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const todoRouter = router({
  /**
   * List all todos - public endpoint for demo purposes
   * In production, this might be protected and filtered by user
   */
  list: publicProcedure.query(async () => {
    try {
      return await todoService.getAllTodos();
    } catch (error) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch todos',
        cause: error,
      });
    }
  }),

  /**
   * Get todo by ID - public endpoint for demo purposes
   * In production, this might be protected and filtered by user ownership
   */
  getById: publicProcedure.input(todoIdSchema).query(async ({ input }) => {
    try {
      const todo = await todoService.getTodoById(input.id);

      if (!todo) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `Todo with id ${input.id} not found`,
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
