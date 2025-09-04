import { styled, YStack } from 'tamagui';

export const Card = styled(YStack, {
  backgroundColor: '$card',
  borderRadius: '$3',
  padding: '$4',
  borderWidth: 1,
  borderColor: '$border',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
});

export const CardHeader = styled(YStack, {
  gap: '$2',
  marginBottom: '$3',
  paddingBottom: '$2',
  borderBottomWidth: 1,
  borderBottomColor: '$border',
});

export const CardContent = styled(YStack, {
  gap: '$2',
  flex: 1,
});

export const CardFooter = styled(YStack, {
  marginTop: '$3',
  paddingTop: '$3',
  borderTopWidth: 1,
  borderTopColor: '$border',
  gap: '$2',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const CardTitle = styled(YStack, {
  // Text styling will be handled by Text components inside
});

export const CardDescription = styled(YStack, {
  // Text styling will be handled by Text components inside
});

export type CardProps = React.ComponentProps<typeof Card>;
export type CardHeaderProps = React.ComponentProps<typeof CardHeader>;
export type CardContentProps = React.ComponentProps<typeof CardContent>;
export type CardFooterProps = React.ComponentProps<typeof CardFooter>;
export type CardTitleProps = React.ComponentProps<typeof CardTitle>;
export type CardDescriptionProps = React.ComponentProps<typeof CardDescription>;
