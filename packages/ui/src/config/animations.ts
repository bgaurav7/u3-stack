import { createAnimations } from '@tamagui/animations-react-native';
import type { AnimationDriver } from '@tamagui/web';

// Use proper type annotation to avoid TypeScript error
export const animations: AnimationDriver = createAnimations({
  '100ms': {
    type: 'timing',
    duration: 100,
  },
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  lazy: {
    damping: 18,
    stiffness: 50,
  },
  medium: {
    damping: 15,
    stiffness: 120,
    mass: 1,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  tooltip: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
});
