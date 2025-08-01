'use client';

import { SignUpScreen } from '@u3/app';
import { useClerkAuthProvider } from '../../../provider/auth-clerk-provider';

export default function SignUpPage() {
  const authProvider = useClerkAuthProvider();

  return <SignUpScreen authProvider={authProvider} />;
}
