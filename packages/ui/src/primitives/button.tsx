import { styled, Button as TButton } from 'tamagui'

export const Button = styled(TButton, {
  fontFamily: '$body',
  borderRadius: '$2',
  paddingHorizontal: '$4',
  height: '$5',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  cursor: 'pointer',
  
  // Focus styles using ring token
  focusStyle: {
    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: '$ring',
    outlineOffset: 2,
  },
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$primaryFg',
        borderColor: 'transparent',
        hoverStyle: {
          backgroundColor: '$primaryHover',
        },
        pressStyle: {
          backgroundColor: '$primaryHover',
          scale: 0.98,
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$secondaryFg',
        borderColor: '$border',
        hoverStyle: {
          backgroundColor: '$secondaryHover',
        },
        pressStyle: {
          backgroundColor: '$secondaryHover',
          scale: 0.98,
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$foreground',
        borderColor: 'transparent',
        hoverStyle: {
          backgroundColor: '$mutedBg',
        },
        pressStyle: {
          backgroundColor: '$mutedBg',
          scale: 0.98,
        },
      },
      destructive: {
        backgroundColor: '$destructive',
        color: '$destructiveFg',
        borderColor: 'transparent',
        hoverStyle: {
          backgroundColor: '$destructiveHover',
        },
        pressStyle: {
          backgroundColor: '$destructiveHover',
          scale: 0.98,
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$foreground',
        borderColor: '$border',
        hoverStyle: {
          backgroundColor: '$mutedBg',
        },
        pressStyle: {
          backgroundColor: '$mutedBg',
          scale: 0.98,
        },
      },
    },
    size: {
      sm: {
        height: '$4',
        paddingHorizontal: '$3',
        borderRadius: '$2',
        fontSize: '$2',
      },
      md: {
        height: '$5',
        paddingHorizontal: '$4',
        borderRadius: '$2',
        fontSize: '$3',
      },
      lg: {
        height: '$6',
        paddingHorizontal: '$5',
        borderRadius: '$3',
        fontSize: '$4',
      },
      icon: {
        height: '$5',
        width: '$5',
        paddingHorizontal: 0,
        borderRadius: '$2',
      },
    },
  },
  
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = React.ComponentProps<typeof Button>