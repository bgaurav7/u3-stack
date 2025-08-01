'use client';

import { SignUpScreen } from '@u3/app';
import { useClerkAuthProvider } from '../../../lib/clerk-auth-provider';

export default function SignUpPage() {
  const authProvider = useClerkAuthProvider();

  return <SignUpScreen authProvider={authProvider} />;
}
