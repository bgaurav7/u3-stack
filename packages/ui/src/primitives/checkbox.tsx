import { styled, Checkbox as TCheckbox } from 'tamagui';

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
});

export type CheckboxProps = React.ComponentProps<typeof Checkbox>;
