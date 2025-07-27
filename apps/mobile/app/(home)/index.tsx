import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { PrimitivesSample } from '@u3/ui';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import SignOutButton from '../components/SignOutButton';

export default function HomePage() {
  const { user } = useUser();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'U3-Stack Mobile',
        }}
      />
      <View style={styles.container}>
        <SignedIn>
          <Text style={styles.welcomeText}>
            Hello{' '}
            {user?.emailAddresses[0]?.emailAddress || user?.firstName || 'User'}
            ! 🎉
          </Text>
          <Text style={styles.subText}>
            You are successfully authenticated with Clerk.
          </Text>
          <View style={styles.content}>
            <PrimitivesSample />
          </View>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <View style={styles.authContainer}>
            <Text style={styles.title}>Welcome to U3-Stack Mobile</Text>
            <Text style={styles.description}>
              Please sign in to access the application.
            </Text>
            <Link href='/(auth)/sign-in' style={styles.authLink}>
              <Text style={styles.authLinkText}>Sign in</Text>
            </Link>
            <Link href='/(auth)/sign-up' style={styles.authLink}>
              <Text style={styles.authLinkText}>Sign up</Text>
            </Link>
          </View>
        </SignedOut>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  content: {
    flex: 1,
    marginVertical: 20,
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
    color: '#666',
  },
  authLink: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    minWidth: 200,
  },
  authLinkText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
