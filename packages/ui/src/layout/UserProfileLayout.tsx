import {
  Button,
  Card,
  H1,
  ScrollView,
  Text,
  Theme,
  View,
  XStack,
  YStack,
} from 'tamagui';

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
  style?: any;
}

/**
 * Layout component for displaying user profile information
 */
export function UserProfileLayout({
  user,
  onSignOut,
  currentDate,
  style,
}: UserProfileLayoutProps) {
  return (
    <View flex={1} backgroundColor='$background' {...style}>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <YStack paddingHorizontal='$6' paddingVertical='$6' gap='$6'>
          {/* Header */}
          <YStack alignItems='center' gap='$3'>
            <H1 size='$9' color='$gray12' textAlign='center'>
              Welcome back!
            </H1>
            {currentDate && (
              <Text fontSize='$4' color='$gray11' textAlign='center'>
                {currentDate}
              </Text>
            )}
          </YStack>

          {/* User Profile Card */}
          <Card
            elevate
            size='$4'
            bordered
            backgroundColor='$background'
            borderColor='$borderColor'
          >
            <Card.Header>
              <H1 size='$6' color='$gray12'>
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

              <ProfileRow
                label='Email'
                value={user?.email || 'Not available'}
              />

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
            <Theme inverse>
              <Button
                size='$4'
                backgroundColor='$red10'
                color='white'
                fontWeight='600'
                onPress={onSignOut}
                minWidth={120}
              >
                Sign Out
              </Button>
            </Theme>
          </YStack>
        </YStack>
      </ScrollView>
    </View>
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
      borderBottomColor='$borderColor'
      gap='$4'
    >
      <Text fontSize='$3' fontWeight='500' color='$gray11' flex={1}>
        {label}:
      </Text>
      <Text fontSize='$3' color='$gray12' flex={2} textAlign='right'>
        {value}
      </Text>
    </XStack>
  );
}
