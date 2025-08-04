/**
 * API Response Types
 *
 * These types represent what actually comes over the wire from the API.
 * Dates are serialized as strings in JSON, so we need separate types
 * for API responses vs internal application types.
 */

import type {
  Todo as BaseTodo,
  CreateTodoInput,
  TodoIdInput,
  UpdateTodoInput,
} from '../backend/todo';

/**
 * Todo type as returned by the API (dates as strings)
 */
export type TodoApiResponse = Omit<BaseTodo, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};

/**
 * Helper function to convert API response to internal Todo type
 */
export function todoFromApi(apiTodo: TodoApiResponse): BaseTodo {
  return {
    ...apiTodo,
    createdAt: new Date(apiTodo.createdAt),
    updatedAt: new Date(apiTodo.updatedAt),
  };
}

/**
 * Helper function to convert internal Todo type to API format
 */
export function todoToApi(todo: BaseTodo): TodoApiResponse {
  return {
    ...todo,
    createdAt: todo.createdAt.toISOString(),
    updatedAt: todo.updatedAt.toISOString(),
  };
}

// Re-export input types (these don't have date issues)
export type { CreateTodoInput, UpdateTodoInput, TodoIdInput };
