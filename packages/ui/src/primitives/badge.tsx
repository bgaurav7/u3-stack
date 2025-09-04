import { styled, YStack } from 'tamagui';

export const Badge = styled(YStack, {
  paddingHorizontal: '$2',
  paddingVertical: '$1',
  borderRadius: '$1',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '$3',
  backgroundColor: '$mutedBg',
});

export type BadgeProps = React.ComponentProps<typeof Badge>;
