import { styled, Tooltip as TTooltip, YStack } from 'tamagui';

export const Tooltip = styled(TTooltip, {});

export const TooltipContent = styled(YStack, {
  backgroundColor: '$tooltip',
  paddingHorizontal: '$2',
  paddingVertical: '$1',
  borderRadius: '$2',
  maxWidth: 200,
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  elevation: 4,
  zIndex: 1000,
});

export const TooltipTrigger = styled(YStack, {
  cursor: 'pointer',
});

export type TooltipProps = React.ComponentProps<typeof Tooltip>;
export type TooltipContentProps = React.ComponentProps<typeof TooltipContent>;
export type TooltipTriggerProps = React.ComponentProps<typeof TooltipTrigger>;
