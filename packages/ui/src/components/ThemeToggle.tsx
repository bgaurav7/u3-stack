import { Moon, Sun } from '@tamagui/lucide-icons';
import type React from 'react';
import { Button } from '../primitives';
import { useTheme } from './ThemeProvider';

export const ThemeToggle: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'outline' | 'secondary';
  showIcon?: boolean;
  showText?: boolean;
}> = ({
  size = 'md',
  variant = 'ghost',
  showIcon = true,
  showText = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Button
      size={size}
      backgroundColor={
        variant === 'ghost'
          ? 'transparent'
          : variant === 'outline'
            ? 'transparent'
            : '$secondary'
      }
      color={
        variant === 'ghost'
          ? '$foreground'
          : variant === 'outline'
            ? '$foreground'
            : '$secondaryFg'
      }
      borderColor={variant === 'outline' ? '$border' : 'transparent'}
      borderWidth={variant === 'outline' ? 1 : 0}
      onPress={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {showIcon && (isDark ? <Sun size={16} /> : <Moon size={16} />)}
      {showText && (isDark ? 'Light' : 'Dark')}
    </Button>
  );
};

export type ThemeToggleProps = React.ComponentProps<typeof ThemeToggle>;
