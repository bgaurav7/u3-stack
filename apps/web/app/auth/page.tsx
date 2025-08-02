'use client';

import { useSignIn, useSignUp } from '@clerk/nextjs';
import { AuthScreen } from '@u3/frontend';
import { AuthLayout } from '@u3/ui';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();

  const clerkHooks = {
    useSignIn,
    useSignUp,
  };

  return (
    <AuthLayout>
      <AuthScreen
        clerkHooks={clerkHooks}
        onNavigate={path => router.push(path)}
        onSuccess={() => router.push('/app')}
      />
    </AuthLayout>
  );
}
