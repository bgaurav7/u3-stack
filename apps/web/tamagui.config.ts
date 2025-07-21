import { config } from '@tamagui/config/v3';
import { type TamaguiInternalConfig, createTamagui } from '@tamagui/core';

const tamaguiConfig: TamaguiInternalConfig = createTamagui(config);

export default tamaguiConfig;
