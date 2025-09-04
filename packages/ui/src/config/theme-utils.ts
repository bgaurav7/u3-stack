/**
 * Theme utilities for mapping palette steps to semantic tokens
 */

type Palette = (step: number) => string

export const step = (n: number) => Math.max(1, Math.min(12, n))

export function makeSemanticTheme(
  gray: Palette,
  brand: Palette,
  red: Palette,
  green: Palette,
  yellow: Palette
) {
  return {
    // Base colors
    background: gray(1),
    foreground: gray(12),
    mutedBg: gray(3),
    mutedFg: gray(11),
    border: gray(6),
    input: gray(3),
    ring: brand(8),
    
    // Primary colors
    primary: brand(9),
    primaryHover: brand(10),
    primaryFg: 'white',
    
    // Secondary colors
    secondary: gray(4),
    secondaryHover: gray(5),
    secondaryFg: gray(12),
    
    // Destructive colors
    destructive: red(9),
    destructiveHover: red(10),
    destructiveFg: 'white',
    
    // Accent colors
    accent: brand(4),
    accentFg: brand(12),
    
    // Card colors
    card: gray(1),
    cardFg: gray(12),
    
    // Success colors
    success: green(9),
    successHover: green(10),
    successFg: 'white',
    
    // Warning colors
    warning: yellow(9),
    warningHover: yellow(10),
    warningFg: 'white',
    
    // Popover colors
    popover: gray(1),
    popoverFg: gray(12),
    
    // Tooltip colors
    tooltip: gray(12),
    tooltipFg: gray(1),
  }
}

export function makeDarkSemanticTheme(
  gray: Palette,
  brand: Palette,
  red: Palette,
  green: Palette,
  yellow: Palette
) {
  return {
    // Base colors (inverted for dark theme)
    background: gray(12),
    foreground: gray(1),
    mutedBg: gray(10),
    mutedFg: gray(4),
    border: gray(7),
    input: gray(10),
    ring: brand(8),
    
    // Primary colors
    primary: brand(9),
    primaryHover: brand(8),
    primaryFg: 'white',
    
    // Secondary colors
    secondary: gray(9),
    secondaryHover: gray(8),
    secondaryFg: gray(1),
    
    // Destructive colors
    destructive: red(9),
    destructiveHover: red(8),
    destructiveFg: 'white',
    
    // Accent colors
    accent: brand(4),
    accentFg: brand(12),
    
    // Card colors
    card: gray(11),
    cardFg: gray(1),
    
    // Success colors
    success: green(9),
    successHover: green(8),
    successFg: 'white',
    
    // Warning colors
    warning: yellow(9),
    warningHover: yellow(8),
    warningFg: 'white',
    
    // Popover colors
    popover: gray(11),
    popoverFg: gray(1),
    
    // Tooltip colors
    tooltip: gray(1),
    tooltipFg: gray(12),
  }
}