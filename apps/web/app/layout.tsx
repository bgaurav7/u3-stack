import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { TamaguiStyleTag } from './tamagui-style';

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
          <header
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '1rem',
              gap: '1rem',
              height: '4rem',
              borderBottom: '1px solid #e5e5e5',
            }}
          >
            <SignedOut>
              <SignInButton mode='modal'>
                <button
                  type='button'
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode='modal'>
                <button
                  type='button'
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#6c47ff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
