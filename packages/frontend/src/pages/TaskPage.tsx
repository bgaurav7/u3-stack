import type { AuthProvider } from '@u3/types';
import { Button, H1, LoadingLayout, MainLayout, Text, YStack } from '@u3/ui';
import type React from 'react';
import { useCallback, useEffect } from 'react';
import { useCurrentUser } from '../hooks/useAuthState';
import { formatDate } from '../utils/formatDate';

/**
 * Props for the TaskPage business logic component
 */
export interface TaskPageProps {
  /**
   * Authentication provider for the current platform
   */
  authProvider: AuthProvider;
  /**
   * Current path/route for sheet detection and navigation
   */
  currentPath: string;
  /**
   * Callback when user signs out
   */
  onSignOut?: () => void;
  /**
   * Custom styling passed to UI component
   */
  style?: Record<string, unknown>;
  /**
   * Custom loading component passed to UI component
   */
  loadingComponent?: React.ReactNode;
}

/**
 * Cross-platform task page business logic component
 * Handles authentication state and delegates UI rendering to @u3/ui
 * This is the main protected task management content
 */
export function TaskPage({
  authProvider,
  currentPath,
  onSignOut,
  style,
  loadingComponent,
}: TaskPageProps) {
  const { user, isLoading, isAuthenticated } = useCurrentUser(authProvider);

  // Handle sheet close navigation
  const handleSheetClose = useCallback(() => {
    authProvider.navigate('/t');
  }, [authProvider]);

  // Handle navigation updates
  const handleNavigate = useCallback(
    (href: string) => {
      authProvider.navigate(href);
    },
    [authProvider]
  );

  // Handle sign out
  const handleSignOut = useCallback(async () => {
    try {
      await authProvider.signOut();
      onSignOut?.();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }, [authProvider, onSignOut]);

  // Redirect to auth if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      authProvider.navigate('/auth');
    }
  }, [isLoading, isAuthenticated, authProvider]);

  // Show loading state
  if (isLoading) {
    return <LoadingLayout loadingComponent={loadingComponent} style={style} />;
  }

  // If not authenticated, return null (redirect will handle navigation)
  if (!isAuthenticated) {
    return null;
  }

  // Format current date
  const currentDate = formatDate(new Date(), { dateStyle: 'full' });

  // Transform user data for sidebar
  const sidebarUser = user
    ? {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        imageUrl: user.imageUrl,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
    : null;

  // Show welcome page using MainLayout
  return (
    <MainLayout
      title='Dashboard'
      scrollable={true}
      user={sidebarUser}
      onSignOut={handleSignOut}
      // Enhanced with sheet support
      currentPath={currentPath}
      onSheetClose={handleSheetClose}
      onNavigate={handleNavigate}
    >
      <YStack
        gap='$6'
        alignItems='center'
        justifyContent='center'
        flex={1}
        {...style}
      >
        {/* Welcome Message */}
        <YStack alignItems='center' gap='$4'>
          <H1 size='$10' color='$color12' textAlign='center'>
            Welcome!
          </H1>
          <Text fontSize='$5' color='$color11' textAlign='center'>
            {currentDate}
          </Text>
          <Text
            fontSize='$4'
            color='$color10'
            textAlign='center'
            maxWidth={400}
          >
            Here will be your task list.
          </Text>

          {/* Test link for sheet functionality */}
          <Button
            onPress={() => handleNavigate('/t/123')}
            backgroundColor='$blue9'
            color='white'
            marginTop='$4'
          >
            Open Task Sheet (Test)
          </Button>
        </YStack>

        {/* Lorem Ipsum content for scroll testing */}
        <YStack gap='$4' maxWidth={800} paddingHorizontal='$4'>
          <H1 size='$6' color='$color12'>
            Lorem Ipsum Content
          </H1>

          <Text fontSize='$4' color='$color11' lineHeight='$6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <Text fontSize='$4' color='$color11' lineHeight='$6'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </Text>

          <Text fontSize='$4' color='$color11' lineHeight='$6'>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </Text>

          <Text fontSize='$4' color='$color11' lineHeight='$6'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </Text>

          <Text fontSize='$4' color='$color11' lineHeight='$6'>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae.
          </Text>

          <Text fontSize='$4' color='$color11' lineHeight='$6'>
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut
            reiciendis voluptatibus maiores alias consequatur aut perferendis
            doloribus asperiores repellat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Text>

          <Text fontSize='$4' color='$color11' lineHeight='$6'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </Text>

          <Text fontSize='$4' color='$color11' lineHeight='$6'>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </Text>
        </YStack>
      </YStack>
    </MainLayout>
  );
}
