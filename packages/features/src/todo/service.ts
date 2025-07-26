/**
 * @fileoverview Todo feature business logic service
 */

import { generateUUID } from '../utils';
import { todoSchema } from './schema';
import type { CreateTodoInput, Todo, UpdateTodoInput } from './types';

// In-memory storage for demo (replace with database in production)
const todos: Todo[] = [];

export const todoService = {
  async getAllTodos(): Promise<Todo[]> {
    return todos;
  },

  // Test utility - clear all todos (for testing only)
  _clearTodos(): void {
    todos.length = 0;
  },

  async getTodoById(id: string): Promise<Todo | null> {
    const todo = todos.find(t => t.id === id);
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
