// Todo-related types
export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}

export interface CreateTodoInput {
  title: string;
  description?: string;
}

export interface UpdateTodoInput {
  id: string;
  title?: string;
  description?: string;
  completed?: boolean;
}

export interface DeleteTodoInput {
  id: string;
}
