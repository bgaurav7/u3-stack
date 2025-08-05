'use client';

import { LogOut } from '@tamagui/lucide-icons';
import { memo, useCallback, useMemo } from 'react';
import { Avatar, Button, Popover, Text, XStack, YStack } from 'tamagui';

/**
 * User data interface for the profile component
 */
export interface UserProfileUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserProfileProps {
  user: UserProfileUser;
  onSignOut?: () => void;
  isCollapsed?: boolean;
  isSmallScreen?: boolean;
}

const UserProfileComponent = ({
  user,
  onSignOut,
  isCollapsed = false,
  isSmallScreen = false,
}: UserProfileProps) => {
  // Generate user initials
  const userInitials = useMemo(() => {
    if (user.fullName) {
      return user.fullName
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();
    }

    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }

    if (user.firstName) {
      return user.firstName.slice(0, 2).toUpperCase();
    }

    return user.email.slice(0, 2).toUpperCase();
  }, [user.fullName, user.firstName, user.lastName, user.email]);

  // Handle sign out
  const handleSignOut = useCallback(() => {
    onSignOut?.();
  }, [onSignOut]);

  // Generate display name
  const displayName = useMemo(() => {
    return (
      user.fullName ||
      `${user.firstName || ''} ${user.lastName || ''}`.trim() ||
      user.email
    );
  }, [user.fullName, user.firstName, user.lastName, user.email]);

  // Popover content for detailed user information
  const popoverContent = useMemo(
    () => (
      <YStack padding='$4' gap='$3' minWidth={200} maxWidth={280}>
        {/* User info */}
        <YStack gap='$2' alignItems='center'>
          <Text
            fontWeight='600'
            fontSize='$4'
            color='$color12'
            textAlign='center'
          >
            {displayName}
          </Text>
          <Text color='$color10' fontSize='$3' textAlign='center'>
            {user.email}
          </Text>
        </YStack>

        {/* Sign out button */}
        <Button
          size='$3'
          icon={LogOut}
          onPress={handleSignOut}
          backgroundColor='$color8'
          color='$color12'
          hoverStyle={{ backgroundColor: '$color9' }}
          pressStyle={{ backgroundColor: '$color10' }}
          borderRadius='$3'
        >
          Sign Out
        </Button>
      </YStack>
    ),
    [user, displayName, handleSignOut]
  );

  return (
    <YStack gap='$2' width='100%'>
      <Popover placement='top-start' allowFlip>
        <Popover.Trigger asChild>
          <XStack
            alignItems='center'
            gap='$3'
            padding='$3'
            borderRadius='$3'
            hoverStyle={{ backgroundColor: '$color4' }}
            pressStyle={{ backgroundColor: '$color5' }}
            cursor='pointer'
            width='100%'
          >
            <Avatar circular size='$4'>
              <Avatar.Image source={{ uri: user.imageUrl }} />
              <Avatar.Fallback backgroundColor='$blue7'>
                <Text color='white' fontWeight='600' fontSize='$3'>
                  {userInitials}
                </Text>
              </Avatar.Fallback>
            </Avatar>

            {/* Show text only when not collapsed or on small screens */}
            {(!isCollapsed || isSmallScreen) && (
              <YStack flex={1} justifyContent='center' gap='$1'>
                <Text
                  fontWeight='600'
                  fontSize='$3'
                  color='$color12'
                  numberOfLines={1}
                >
                  {displayName}
                </Text>
                <Text color='$color11' fontSize='$2' numberOfLines={1}>
                  {user.email}
                </Text>
              </YStack>
            )}
          </XStack>
        </Popover.Trigger>

        <Popover.Content borderWidth={1} borderColor='$color6' elevate>
          <Popover.Arrow borderWidth={1} borderColor='$color6' />
          {popoverContent}
        </Popover.Content>
      </Popover>
    </YStack>
  );
};

// Export memoized component
export const UserProfile = memo(UserProfileComponent);
