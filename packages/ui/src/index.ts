'use client';

export * from '@tamagui/toast';
// Re-export Tamagui core and configuration
export * from 'tamagui';
export type { ButtonProps } from './components/Button';
// Components
export { Button } from './components/Button';
export type { CardProps } from './components/Card';
export { Card } from './components/Card';
export type { InputProps } from './components/Input';
export { Input } from './components/Input';
export type { TextProps } from './components/Text';
export { Text } from './components/Text';
export { config } from './config'; // Re-exports the config from local config directory

// Pages
export { HomeScreen } from './pages/homescreen';
export type { ProviderProps } from './provider';
// Provider
export { Provider } from './provider';
