import { Label as TLabel, styled } from 'tamagui'

export const Label = styled(TLabel, {
  fontFamily: '$body',
  fontSize: '$3',
  fontWeight: '$2',
  color: '$foreground',
  lineHeight: '$3',
  cursor: 'pointer',
  
  variants: {
    size: {
      sm: {
        fontSize: '$2',
        lineHeight: '$2',
      },
      md: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      lg: {
        fontSize: '$4',
        lineHeight: '$4',
      },
    },
    variant: {
      default: {
        color: '$foreground',
      },
      muted: {
        color: '$mutedFg',
      },
      destructive: {
        color: '$destructive',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})

export type LabelProps = React.ComponentProps<typeof Label>