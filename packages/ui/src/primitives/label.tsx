import { styled, Label as TLabel } from 'tamagui';

export const Label = styled(TLabel, {
  cursor: 'pointer',
});

export type LabelProps = React.ComponentProps<typeof Label>;
