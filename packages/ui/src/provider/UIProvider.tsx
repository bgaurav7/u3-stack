import { TamaguiProvider } from '@tamagui/core';
import type { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { config } from '../config';

export interface UIProviderProps extends PropsWithChildren {
  disableRootThemeClass?: boolean;
  defaultTheme?: string;
}

export function UIProvider({
  children,
  disableRootThemeClass,
  defaultTheme = 'light',
}: UIProviderProps) {
  return (
    <SafeAreaProvider>
      <TamaguiProvider
        config={config}
        disableRootThemeClass={disableRootThemeClass}
        defaultTheme={defaultTheme}
      >
        {children}
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
