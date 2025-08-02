/**
 * @fileoverview Todo feature business logic service
 */

import type { CreateTodoInput, Todo, UpdateTodoInput } from '@u3/types';
import { todoSchema } from '@u3/types';
import { generateUUID } from '../../utils';

// In-memory storage for demo (replace with database in production)
const todos: Todo[] = [];

export const todoService = {
  async getAllTodosByUser(userId: string): Promise<Todo[]> {
    return todos.filter(todo => todo.userId === userId);
  },

  async getTodoById(id: string, userId?: string): Promise<Todo | null> {
    const todo = todos.find(t => t.id === id);
    // If userId is provided, ensure the todo belongs to the user
    if (todo && userId && todo.userId !== userId) {
      return null;
    }
    return todo || null;
  },

  async createTodo(input: CreateTodoInput & { userId: string }): Promise<Todo> {
    const newTodo: Todo = {
      id: generateUUID(),
      title: input.title,
      description: input.description,
      completed: false,
      userId: input.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Validate with schema
    const validatedTodo = todoSchema.parse(newTodo);
    todos.push(validatedTodo);

    return validatedTodo;
  },

  async updateTodo(
    id: string,
    input: Partial<UpdateTodoInput>,
    userId: string
  ): Promise<Todo | null> {
    const todoIndex = todos.findIndex(t => t.id === id && t.userId === userId);

    if (todoIndex === -1) {
      return null;
    }

    const updatedTodo = {
      ...todos[todoIndex],
      ...input,
      updatedAt: new Date(),
    };

    // Validate with schema
    const validatedTodo = todoSchema.parse(updatedTodo);
    todos[todoIndex] = validatedTodo;

    return validatedTodo;
  },

  async deleteTodo(id: string, userId: string): Promise<boolean> {
    const todoIndex = todos.findIndex(t => t.id === id && t.userId === userId);

    if (todoIndex === -1) {
      return false;
    }

    todos.splice(todoIndex, 1);
    return true;
  },
};
