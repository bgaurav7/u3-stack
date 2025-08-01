'use client';

import { useSignIn, useSignUp } from '@clerk/nextjs';
import { AuthScreen } from '@u3/app';
import { AuthLayout, UIProvider } from '@u3/ui';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();

  const clerkHooks = {
    useSignIn,
    useSignUp,
  };

  return (
    <UIProvider>
      <AuthLayout>
        <AuthScreen
          clerkHooks={clerkHooks}
          onNavigate={path => router.push(path)}
          onSuccess={() => router.push('/app')}
        />
      </AuthLayout>
    </UIProvider>
  );
}
