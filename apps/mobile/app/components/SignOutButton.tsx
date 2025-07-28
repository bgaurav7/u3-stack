import { useClerk } from '@clerk/clerk-expo';
import { SignOutButton as UISignOutButton } from '@u3/ui';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to your desired page
      router.replace('/');
    } catch (err: unknown) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
      Alert.alert('Error', 'An error occurred during sign out');
    }
  };

  return <UISignOutButton onSignOut={handleSignOut} />;
};

export default SignOutButton;
