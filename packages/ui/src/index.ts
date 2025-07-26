'use client';

// Import and ensure Tamagui config is loaded
import './config';

export * from '@tamagui/toast';

// Re-export Tamagui core and configuration
export * from 'tamagui';
export { config } from './config';
// Layout
export type { PageNotFoundProps } from './layout/PageNotFound';
export { PageNotFound } from './layout/PageNotFound';
export { PrimitivesSample } from './layout/PrimitivesSample';
// Primitives
export type { ButtonProps } from './primitives/Button';
export { Button } from './primitives/Button';
export type { CardProps } from './primitives/Card';
export { Card } from './primitives/Card';
export type { InputProps } from './primitives/Input';
export { Input } from './primitives/Input';
export type { TextProps } from './primitives/Text';
export { Text } from './primitives/Text';

// Provider
export type { UIProviderProps } from './provider/UIProvider';
export { UIProvider } from './provider/UIProvider';
