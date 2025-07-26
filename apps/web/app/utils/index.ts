/**
 * Utility exports for the web application
 */

// React providers and hooks
export { TRPCProvider, useQueryClient } from './providers';
export type { AppRouter } from './trpc';
// tRPC client and configuration
export { auth, handleTRPCError, trpc, trpcClientConfig } from './trpc';
