// Auth-related types
export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  email: string;
  password: string;
  name: string;
}

export interface AuthResult {
  user: AuthUser;
  token: string;
}
