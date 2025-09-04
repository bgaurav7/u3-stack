import { styled, Switch as TSwitch } from 'tamagui';

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
});

export type SwitchProps = React.ComponentProps<typeof Switch>;
