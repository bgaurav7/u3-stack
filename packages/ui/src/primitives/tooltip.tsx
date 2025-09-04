import { Tooltip as TTooltip, styled, YStack } from 'tamagui'

export const Tooltip = styled(TTooltip, {})

export const TooltipContent = styled(YStack, {
  backgroundColor: '$tooltip',
  color: '$tooltipFg',
  paddingHorizontal: '$2',
  paddingVertical: '$1',
  borderRadius: '$2',
  fontSize: '$2',
  fontWeight: '$2',
  maxWidth: 200,
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  elevation: 4,
  zIndex: 1000,
  
  variants: {
    size: {
      sm: {
        fontSize: '$1',
        paddingHorizontal: '$1',
        paddingVertical: '$0',
      },
      md: {
        fontSize: '$2',
        paddingHorizontal: '$2',
        paddingVertical: '$1',
      },
      lg: {
        fontSize: '$3',
        paddingHorizontal: '$3',
        paddingVertical: '$2',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
})

export const TooltipTrigger = styled(YStack, {
  cursor: 'pointer',
})

export type TooltipProps = React.ComponentProps<typeof Tooltip>
export type TooltipContentProps = React.ComponentProps<typeof TooltipContent>
export type TooltipTriggerProps = React.ComponentProps<typeof TooltipTrigger>