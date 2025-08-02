import { publicProcedure, router } from '../trpc';

/**
 * Health router providing system health check endpoints
 * These endpoints are used for monitoring and service discovery
 */
export const healthRouter = router({
  /**
   * Simple ping endpoint that returns a basic health status
   * Used for basic availability checks and load balancer health probes
   */
  ping: publicProcedure.query(() => {
    return {
      ok: true,
      timestamp: new Date().toISOString(),
    };
  }),

  /**
   * Detailed status endpoint with system information
   * Provides version, uptime, and other system metrics
   */
  status: publicProcedure.query(() => {
    return {
      status: 'healthy',
      version: process.env.npm_package_version || '1.0.0',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    };
  }),
});

export type HealthRouter = typeof healthRouter;
