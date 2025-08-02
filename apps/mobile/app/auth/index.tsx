import { useSignIn, useSignUp } from '@clerk/clerk-expo';
import { AuthScreen } from '@u3/app';
import { AuthLayout } from '@u3/ui';
import { router } from 'expo-router';

export default function AuthPage() {
  const clerkHooks = {
    useSignIn,
    useSignUp,
  };

  return (
    <AuthLayout>
      <AuthScreen
        clerkHooks={clerkHooks}
        onNavigate={path => router.replace(path)}
        onSuccess={() => router.replace('/app')}
      />
    </AuthLayout>
  );
}
