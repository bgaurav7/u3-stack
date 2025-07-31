'use client';

import { useAuth } from '@clerk/nextjs';
import { UIProvider } from '@u3/ui';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      redirect('/');
    }
  }, [isSignedIn]);

  if (isSignedIn) {
    return null;
  }

  return <UIProvider>{children}</UIProvider>;
}
