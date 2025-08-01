import { SignInScreen } from '@u3/app';
import { useClerkAuthProvider } from '../../../lib/clerk-auth-provider';

export default function SignInPage() {
  const authProvider = useClerkAuthProvider();

  return <SignInScreen authProvider={authProvider} />;
}
