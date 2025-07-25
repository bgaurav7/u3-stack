import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { TamaguiStyleTag } from './tamagui-style';

export const metadata: Metadata = {
  title: 'U3-Stack Web',
  description: 'U3-Stack Web Application',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <TamaguiStyleTag />
      </head>
      <body>{children}</body>
    </html>
  );
}
