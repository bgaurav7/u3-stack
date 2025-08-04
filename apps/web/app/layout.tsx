import { ClerkProvider } from '@clerk/nextjs';
import { UIProvider } from '@u3/ui';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { TRPCClientProvider } from '../provider/trpc-client-provider';
import { TamaguiStyleTag } from './tamagui-style';
import '../provider/storage-provider';

export const metadata: Metadata = {
  title: 'U3-Stack Web',
  description: 'U3-Stack Web Application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <head>
          <TamaguiStyleTag />
          {/* Ensure proper theme class is applied to prevent hydration issues */}
          <meta name='color-scheme' content='light dark' />
        </head>
        <body>
          <UIProvider defaultTheme='light' disableRootThemeClass={false}>
            <TRPCClientProvider>{children}</TRPCClientProvider>
          </UIProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
