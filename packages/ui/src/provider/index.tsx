import type { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui';
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
