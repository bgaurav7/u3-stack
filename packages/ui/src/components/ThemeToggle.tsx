import React from 'react'
import { Button } from '../primitives'
import { useTheme } from './ThemeProvider'
import { Sun, Moon } from '@tamagui/lucide-icons'

export interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'ghost' | 'outline' | 'secondary'
  showIcon?: boolean
  showText?: boolean
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = 'md',
  variant = 'ghost',
  showIcon = true,
  showText = false,
}) => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Button
      variant={variant}
      size={size}
      onPress={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {showIcon && (isDark ? <Sun size={16} /> : <Moon size={16} />)}
      {showText && (isDark ? 'Light' : 'Dark')}
    </Button>
  )
}

export type ThemeToggleProps = React.ComponentProps<typeof ThemeToggle>