import { styled, Sheet as TSheet, XStack, YStack } from 'tamagui';

export const Sheet = styled(TSheet, {});

export const SheetContent = styled(YStack, {
  backgroundColor: '$card',
  borderTopLeftRadius: '$4',
  borderTopRightRadius: '$4',
  padding: '$6',
  maxHeight: '90vh',
  borderWidth: 1,
  borderColor: '$border',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: -4 },
  shadowOpacity: 0.15,
  shadowRadius: 12,
  elevation: 8,
});

export const SheetHeader = styled(YStack, {
  gap: '$2',
  marginBottom: '$4',
  paddingBottom: '$3',
  borderBottomWidth: 1,
  borderBottomColor: '$border',
});

export const SheetTitle = styled(YStack, {
  // Text styling will be handled by Text components inside
});

export const SheetDescription = styled(YStack, {
  // Text styling will be handled by Text components inside
});

export const SheetFooter = styled(XStack, {
  marginTop: '$4',
  paddingTop: '$3',
  borderTopWidth: 1,
  borderTopColor: '$border',
  gap: '$2',
  justifyContent: 'flex-end',
});

export const SheetOverlay = styled(YStack, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
});

export const SheetHandle = styled(YStack, {
  width: 40,
  height: 4,
  backgroundColor: '$border',
  borderRadius: '$1',
  alignSelf: 'center',
  marginBottom: '$4',
});

export type SheetProps = React.ComponentProps<typeof Sheet>;
export type SheetContentProps = React.ComponentProps<typeof SheetContent>;
export type SheetHeaderProps = React.ComponentProps<typeof SheetHeader>;
export type SheetTitleProps = React.ComponentProps<typeof SheetTitle>;
export type SheetDescriptionProps = React.ComponentProps<
  typeof SheetDescription
>;
export type SheetFooterProps = React.ComponentProps<typeof SheetFooter>;
export type SheetOverlayProps = React.ComponentProps<typeof SheetOverlay>;
export type SheetHandleProps = React.ComponentProps<typeof SheetHandle>;
