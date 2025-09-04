import { styled, TextArea as TTextArea } from 'tamagui';

export const Textarea = styled(TTextArea, {
  minHeight: '$8',
  paddingHorizontal: '$3',
  paddingVertical: '$2',
  borderRadius: '$2',
  borderWidth: 1,
  backgroundColor: '$background',
  borderColor: '$input',
  placeholderTextColor: '$mutedFg',

  // Focus styles using ring token
  focusStyle: {
    borderColor: '$ring',
    outlineWidth: 2,
    outlineColor: '$ring',
    outlineStyle: 'solid',
    outlineOffset: 2,
  },
});

export type TextareaProps = React.ComponentProps<typeof Textarea>;
