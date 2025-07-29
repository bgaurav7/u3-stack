// Event-related types
export interface CustomEvent<T = unknown> {
  type: string;
  payload: T;
}
