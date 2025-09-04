import { styled, Select as TSelect } from 'tamagui';

export const Select = styled(TSelect, {
  height: '$5',
  paddingHorizontal: '$3',
  borderRadius: '$2',
  borderWidth: 1,
  backgroundColor: '$background',
  borderColor: '$input',
  cursor: 'pointer',

  // Focus styles
  focusStyle: {
    borderColor: '$ring',
    outlineWidth: 2,
    outlineColor: '$ring',
    outlineStyle: 'solid',
    outlineOffset: 2,
  },
});

export type SelectProps = React.ComponentProps<typeof Select>;
