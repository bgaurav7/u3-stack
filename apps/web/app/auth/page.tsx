'use client';

import { useSignIn, useSignUp } from '@clerk/nextjs';
import { AuthPage } from '@u3/frontend';
import { AuthLayout } from '@u3/ui';
import { useRouter } from 'next/navigation';

export default function AuthRoute() {
  const router = useRouter();

  const clerkHooks = {
    useSignIn,
    useSignUp,
  };

  return (
    <AuthLayout>
      <AuthPage
        clerkHooks={clerkHooks}
        onNavigate={(path: string) => router.push(path)}
        onSuccess={() => router.push('/t')}
      />
    </AuthLayout>
  );
}
