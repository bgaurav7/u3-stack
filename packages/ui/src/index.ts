'use client';

// Re-export Tamagui core and configuration
export * from 'tamagui';
export * from '@tamagui/toast';
export { config } from '@u3/config'; // Re-exports the config

// Components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Text } from './components/Text';
export type { TextProps } from './components/Text';

export { Card } from './components/Card';
export type { CardProps } from './components/Card';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';
