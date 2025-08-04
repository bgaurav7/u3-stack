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
        </head>
        <body>
          <UIProvider defaultTheme='system'>
            <TRPCClientProvider>{children}</TRPCClientProvider>
          </UIProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
