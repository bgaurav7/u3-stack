import { config } from '@u3/config';

export type Conf = typeof config;

declare module '@u3/ui' {
  interface TamaguiCustomConfig extends Conf {}
}
