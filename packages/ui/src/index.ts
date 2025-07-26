'use client';

// Import and ensure Tamagui config is loaded
import './config';

export * from '@tamagui/toast';

// Re-export Tamagui core and configuration
export * from 'tamagui';
export { config } from './config'; // Re-exports the config from local config directory
export type { ErrorPageProps } from './pages/error';
export { ErrorPage } from './pages/error';
// Pages
export { HomeScreen } from './pages/homescreen';

// Provider
export type { ProviderProps } from './provider';
export { Provider } from './provider';
