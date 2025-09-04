import { styled, Input as TInput } from 'tamagui';

export const Input = styled(TInput, {
  height: '$5',
  paddingHorizontal: '$3',
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

export type InputProps = React.ComponentProps<typeof Input>;
