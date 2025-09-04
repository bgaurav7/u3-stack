import { Checkbox as TCheckbox, styled } from 'tamagui'

export const Checkbox = styled(TCheckbox, {
  width: 20,
  height: 20,
  borderRadius: '$1',
  borderWidth: 2,
  borderColor: '$border',
  backgroundColor: '$background',
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
        width: 16,
        height: 16,
      },
      md: {
        width: 20,
        height: 20,
      },
      lg: {
        width: 24,
        height: 24,
      },
    },
    variant: {
      default: {
        borderColor: '$border',
        backgroundColor: '$background',
        checkedStyle: {
          backgroundColor: '$primary',
          borderColor: '$primary',
        },
      },
      destructive: {
        borderColor: '$border',
        backgroundColor: '$background',
        checkedStyle: {
          backgroundColor: '$destructive',
          borderColor: '$destructive',
        },
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})

export type CheckboxProps = React.ComponentProps<typeof Checkbox>