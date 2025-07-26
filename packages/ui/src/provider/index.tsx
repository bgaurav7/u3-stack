import { TamaguiProvider } from '@tamagui/core';
import type { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { config } from '../config';

export interface ProviderProps extends PropsWithChildren {
  disableRootThemeClass?: boolean;
  defaultTheme?: string;
}

export function Provider({
  children,
  disableRootThemeClass,
  defaultTheme,
}: ProviderProps) {
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
