import { YStack, styled } from 'tamagui'

export const Badge = styled(YStack, {
  fontFamily: '$body',
  fontSize: '$2',
  fontWeight: '$2',
  paddingHorizontal: '$2',
  paddingVertical: '$1',
  borderRadius: '$1',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '$3',
  
  variants: {
    variant: {
      default: {
        backgroundColor: '$mutedBg',
        color: '$mutedFg',
      },
      primary: {
        backgroundColor: '$primary',
        color: '$primaryFg',
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$secondaryFg',
      },
      destructive: {
        backgroundColor: '$destructive',
        color: '$destructiveFg',
      },
      success: {
        backgroundColor: '$success',
        color: '$successFg',
      },
      warning: {
        backgroundColor: '$warning',
        color: '$warningFg',
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$foreground',
        borderWidth: 1,
        borderColor: '$border',
      },
    },
    size: {
      sm: {
        fontSize: '$1',
        paddingHorizontal: '$1',
        paddingVertical: '$0',
        minHeight: '$2',
      },
      md: {
        fontSize: '$2',
        paddingHorizontal: '$2',
        paddingVertical: '$1',
        minHeight: '$3',
      },
      lg: {
        fontSize: '$3',
        paddingHorizontal: '$3',
        paddingVertical: '$2',
        minHeight: '$4',
      },
    },
  },
  
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export type BadgeProps = React.ComponentProps<typeof Badge>