import { Switch as TSwitch, styled } from 'tamagui'

export const Switch = styled(TSwitch, {
  width: 44,
  height: 24,
  borderRadius: '$round',
  backgroundColor: '$mutedBg',
  borderWidth: 0,
  cursor: 'pointer',
  
  // Focus styles
  focusStyle: {
    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: '$ring',
    outlineOffset: 2,
  },
  
  variants: {
    size: {
      sm: {
        width: 36,
        height: 20,
      },
      md: {
        width: 44,
        height: 24,
      },
      lg: {
        width: 52,
        height: 28,
      },
    },
    variant: {
      default: {
        backgroundColor: '$mutedBg',
        checkedStyle: {
          backgroundColor: '$primary',
        },
      },
      destructive: {
        backgroundColor: '$mutedBg',
        checkedStyle: {
          backgroundColor: '$destructive',
        },
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})

export type SwitchProps = React.ComponentProps<typeof Switch>