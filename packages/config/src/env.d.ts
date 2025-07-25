/**
 * Type definitions for environment utilities
 */

export function loadEnv(envPath?: string): void;
export function getEnv(key: string, defaultValue?: string): string;
export function requireEnv(key: string): string;
