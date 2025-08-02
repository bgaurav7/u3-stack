'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import { HomeScreen } from '@u3/app';
import { LoadingLayout } from '@u3/ui';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useEffect } from 'react';

export default function HomePage(): React.ReactElement {
  const router = useRouter();

  return (
    <>
      {/* If signed in, redirect to /home */}
      <SignedIn>
        <AutoRedirect router={router} />
      </SignedIn>

      {/* If signed out, show landing page */}
      <SignedOut>
        <HomeScreen onSignInClick={() => router.push('/auth')} />
      </SignedOut>
    </>
  );
}

function AutoRedirect({ router }: { router: ReturnType<typeof useRouter> }) {
  useEffect(() => {
    router.push('/app');
  }, [router]);

  return <LoadingLayout />;
}
