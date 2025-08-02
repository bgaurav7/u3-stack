export const media = {
  sm: { maxWidth: 768 },
  md: { maxWidth: 1024 },
  lg: { maxWidth: 1280 },
  gtSm: { minWidth: 769 },
  gtMd: { minWidth: 1025 },
  hoverNone: { hover: 'none' },
  pointerCoarse: { pointer: 'coarse' },
};

export type Media = typeof media;
