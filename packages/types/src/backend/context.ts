// tRPC Context types

import type { CreateNextContextOptions } from '@trpc/server/adapters/next';

/**
 * Context interface for tRPC procedures
 * Contains request/response objects and optional authenticated user
 */
export interface Context {
  req?: CreateNextContextOptions['req'];
  res?: CreateNextContextOptions['res'];
  user?: {
    id: string;
    email: string;
    name: string;
  };
}
