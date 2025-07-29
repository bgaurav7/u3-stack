// HealthCheck-related types
export interface HealthCheckResponse {
  status: 'ok' | 'error';
  timestamp: number;
}
