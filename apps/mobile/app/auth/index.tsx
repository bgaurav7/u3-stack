import { useSignIn, useSignUp } from '@clerk/clerk-expo';
import { AuthPage } from '@u3/frontend';
import { AuthLayout } from '@u3/ui';
import { router } from 'expo-router';

export default function AuthRoute() {
  const clerkHooks = {
    useSignIn,
    useSignUp,
  };

  return (
    <AuthLayout>
      <AuthPage
        clerkHooks={clerkHooks}
        onNavigate={(path: string) => router.replace(path)}
        onSuccess={() => router.replace('/t')}
      />
    </AuthLayout>
  );
}
