import { Button, Card, H1, Text, Theme, XStack, YStack } from 'tamagui';
import { MainLayout } from './MainLayout';

/**
 * User data interface for the profile layout
 */
export interface ProfileUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Props for the UserProfileLayout component
 */
export interface UserProfileLayoutProps {
  /**
   * Current user data
   */
  user?: ProfileUser | null;
  /**
   * Sign out handler
   */
  onSignOut?: () => void;
  /**
   * Current date for display
   */
  currentDate?: string;
  /**
   * Custom styling
   */
  style?: Record<string, unknown>;
  /**
   * Navigation handler for sidebar
   */
  onNavigate?: (href: string) => void;
}

/**
 * Layout component for displaying user profile information
 */
export function UserProfileLayout({
  user,
  onSignOut,
  currentDate,
  style,
  onNavigate,
}: UserProfileLayoutProps) {
  return (
    <MainLayout title='Profile' scrollable={true} onNavigate={onNavigate}>
      <YStack gap='$6' {...style}>
        {/* Header */}
        <YStack alignItems='center' gap='$3'>
          <H1 size='$9' color='$color12' textAlign='center'>
            Welcome back!
          </H1>
          {currentDate && (
            <Text fontSize='$4' color='$color11' textAlign='center'>
              {currentDate}
            </Text>
          )}
        </YStack>

        {/* User Profile Card */}
        <Card
          elevate
          size='$4'
          bordered
          backgroundColor='$color2'
          borderColor='$color6'
        >
          <Card.Header>
            <H1 size='$6' color='$color12'>
              Your Profile
            </H1>
          </Card.Header>

          <YStack gap='$4' padding='$4'>
            {user?.fullName && (
              <ProfileRow label='Name' value={user.fullName} />
            )}

            {user?.firstName && (
              <ProfileRow label='First Name' value={user.firstName} />
            )}

            {user?.lastName && (
              <ProfileRow label='Last Name' value={user.lastName} />
            )}

            <ProfileRow label='Email' value={user?.email || 'Not available'} />

            <ProfileRow label='User ID' value={user?.id || 'Not available'} />

            {user?.createdAt && (
              <ProfileRow
                label='Member since'
                value={user.createdAt.toLocaleDateString()}
              />
            )}
          </YStack>
        </Card>

        {/* Actions */}
        <YStack alignItems='center' gap='$4'>
          <Theme name='error'>
            <Button
              size='$4'
              backgroundColor='$background'
              color='$color'
              fontWeight='600'
              onPress={onSignOut}
              minWidth={120}
            >
              Sign Out
            </Button>
          </Theme>
        </YStack>
      </YStack>
    </MainLayout>
  );
}

/**
 * Profile row component for displaying user information
 */
function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <XStack
      justifyContent='space-between'
      alignItems='flex-start'
      paddingVertical='$2'
      borderBottomWidth={1}
      borderBottomColor='$color6'
      gap='$4'
    >
      <Text fontSize='$3' fontWeight='500' color='$color11' flex={1}>
        {label}:
      </Text>
      <Text fontSize='$3' color='$color12' flex={2} textAlign='right'>
        {value}
      </Text>
    </XStack>
  );
}
