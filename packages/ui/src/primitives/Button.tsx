import type { ButtonProps as TamaguiButtonProps } from 'tamagui';
import { Button as TamaguiButton } from 'tamagui';

// Simply re-export Tamagui Button with its original props
export type ButtonProps = TamaguiButtonProps;
export const Button = TamaguiButton;
