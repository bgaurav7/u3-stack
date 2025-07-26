/**
 * @fileoverview Todo feature business logic service
 */

import { todoSchema } from './schema';
import type { CreateTodoInput, Todo, UpdateTodoInput } from './types';

// In-memory storage for demo (replace with database in production)
const todos: Todo[] = [];
let nextId = 1;

export const todoService = {
  async getAllTodos(): Promise<Todo[]> {
    return todos;
  },

  async getTodoById(id: string): Promise<Todo | null> {
    const todo = todos.find(t => t.id === id);
    return todo || null;
  },

  async createTodo(input: CreateTodoInput & { userId: string }): Promise<Todo> {
    const newTodo: Todo = {
      id: `todo-${nextId++}`,
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
