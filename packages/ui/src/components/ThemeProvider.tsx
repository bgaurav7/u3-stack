import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { TamaguiProvider } from 'tamagui';
import { config } from '../config';

type ThemeName = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  storageKey?: string;
}> = ({ children, defaultTheme = 'light', storageKey = 'ui-theme' }) => {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    // Load theme from localStorage on mount
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as ThemeName;
      if (stored && (stored === 'light' || stored === 'dark')) {
        setThemeState(stored);
      }
    }
  }, [storageKey]);

  useEffect(() => {
    // Apply theme to document
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove('t_light', 't_dark');
      root.classList.add(`t_${theme}`);

      // Store theme in localStorage
      localStorage.setItem(storageKey, theme);
    }
  }, [theme, storageKey]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <TamaguiProvider config={config} defaultTheme={theme}>
        {children}
      </TamaguiProvider>
    </ThemeContext.Provider>
  );
};

export type ThemeProviderProps = React.ComponentProps<typeof ThemeProvider>;
