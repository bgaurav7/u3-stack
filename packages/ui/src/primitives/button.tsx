import { styled, Button as TButton } from 'tamagui';

export const Button = styled(TButton, {
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
});

export type ButtonProps = React.ComponentProps<typeof Button>;
