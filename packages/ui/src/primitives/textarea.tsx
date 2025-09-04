import { TextArea as TTextArea, styled } from 'tamagui'

export const Textarea = styled(TTextArea, {
  fontFamily: '$body',
  minHeight: '$8',
  paddingHorizontal: '$3',
  paddingVertical: '$2',
  borderRadius: '$2',
  borderWidth: 1,
  backgroundColor: '$background',
  borderColor: '$input',
  color: '$foreground',
  placeholderTextColor: '$mutedFg',
  fontSize: '$3',
  lineHeight: '$3',
  
  // Focus styles using ring token
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
        minHeight: '$6',
        paddingHorizontal: '$2',
        paddingVertical: '$1',
        fontSize: '$2',
      },
      md: {
        minHeight: '$8',
        paddingHorizontal: '$3',
        paddingVertical: '$2',
        fontSize: '$3',
      },
      lg: {
        minHeight: '$10',
        paddingHorizontal: '$4',
        paddingVertical: '$3',
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

export type TextareaProps = React.ComponentProps<typeof Textarea>