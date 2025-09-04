import { Select as TSelect, styled } from 'tamagui'

export const Select = styled(TSelect, {
  fontFamily: '$body',
  height: '$5',
  paddingHorizontal: '$3',
  borderRadius: '$2',
  borderWidth: 1,
  backgroundColor: '$background',
  borderColor: '$input',
  color: '$foreground',
  fontSize: '$3',
  cursor: 'pointer',
  
  // Focus styles
  focusStyle: {
    borderColor: '$ring',
    outlineWidth: 2,
    outlineColor: '$ring',
    outlineStyle: 'solid',
    outlineOffset: 2,
  },
  
  variants: {
    size: {
      sm: {
        height: '$4',
        paddingHorizontal: '$2',
        fontSize: '$2',
      },
      md: {
        height: '$5',
        paddingHorizontal: '$3',
        fontSize: '$3',
      },
      lg: {
        height: '$6',
        paddingHorizontal: '$4',
        fontSize: '$4',
      },
    },
    variant: {
      default: {
        backgroundColor: '$background',
        borderColor: '$input',
      },
      filled: {
        backgroundColor: '$mutedBg',
        borderColor: 'transparent',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})

export type SelectProps = React.ComponentProps<typeof Select>