import { Dialog as TDialog, styled, YStack, XStack } from 'tamagui'

export const Dialog = styled(TDialog, {})

export const DialogContent = styled(YStack, {
  backgroundColor: '$card',
  borderRadius: '$4',
  padding: '$6',
  maxWidth: '90vw',
  maxHeight: '90vh',
  borderWidth: 1,
  borderColor: '$border',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.25,
  shadowRadius: 16,
  elevation: 8,
  
  variants: {
    size: {
      sm: {
        width: 400,
        maxWidth: '90vw',
      },
      md: {
        width: 500,
        maxWidth: '90vw',
      },
      lg: {
        width: 600,
        maxWidth: '90vw',
      },
      xl: {
        width: 800,
        maxWidth: '90vw',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
})

export const DialogHeader = styled(YStack, {
  gap: '$2',
  marginBottom: '$4',
  paddingBottom: '$3',
  borderBottomWidth: 1,
  borderBottomColor: '$border',
})

export const DialogTitle = styled(YStack, {
  fontSize: '$6',
  fontWeight: '$4',
  color: '$cardFg',
  lineHeight: '$6',
})

export const DialogDescription = styled(YStack, {
  fontSize: '$3',
  color: '$mutedFg',
  lineHeight: '$3',
})

export const DialogFooter = styled(XStack, {
  marginTop: '$4',
  paddingTop: '$3',
  borderTopWidth: 1,
  borderTopColor: '$border',
  gap: '$2',
  justifyContent: 'flex-end',
})

export const DialogOverlay = styled(YStack, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
})

export type DialogProps = React.ComponentProps<typeof Dialog>
export type DialogContentProps = React.ComponentProps<typeof DialogContent>
export type DialogHeaderProps = React.ComponentProps<typeof DialogHeader>
export type DialogTitleProps = React.ComponentProps<typeof DialogTitle>
export type DialogDescriptionProps = React.ComponentProps<typeof DialogDescription>
export type DialogFooterProps = React.ComponentProps<typeof DialogFooter>
export type DialogOverlayProps = React.ComponentProps<typeof DialogOverlay>