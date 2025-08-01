import { SignInScreen } from '@u3/app';
import { useClerkAuthProvider } from '../../../provider/auth-clerk-provider';

export default function SignInPage() {
  const authProvider = useClerkAuthProvider();

  return <SignInScreen authProvider={authProvider} />;
}
