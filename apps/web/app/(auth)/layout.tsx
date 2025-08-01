'use client';

import { useAuth } from '@clerk/nextjs';
import { UIProvider } from '@u3/ui';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/');
    }
  }, [isSignedIn, router]);

  if (isSignedIn) {
    return null;
  }

  return <UIProvider>{children}</UIProvider>;
}
