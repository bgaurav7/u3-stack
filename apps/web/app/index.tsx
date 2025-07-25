import { Button, Card, Input, View } from '@u3/ui';
import type React from 'react';
import { Paragraph, SizableText, YStack } from 'tamagui';

export default function HomePage(): React.ReactElement {
  return (
    <View padding='$4' gap='$4' maxWidth={600} marginHorizontal='auto'>
      <SizableText size='$8' fontWeight='bold'>
        Welcome to U3-Stack Web
      </SizableText>

      <Paragraph size='$4'>
        This is a test page showcasing the shared UI components from @u3/ui
        package.
      </Paragraph>

      <Card variant='elevated'>
        <SizableText size='$6' fontWeight='600' marginBottom='$3'>
          Button Components
        </SizableText>
        <YStack gap='$3'>
          <Button size='$5' backgroundColor='$color'>
            Primary Button
          </Button>
          <Button size='$4' backgroundColor='$background'>
            Secondary Button
          </Button>
          <Button size='$3' variant='outlined'>
            Outline Button
          </Button>
        </YStack>
      </Card>

      <Card variant='outlined'>
        <SizableText size='$6' fontWeight='600' marginBottom='$3'>
          Text Components
        </SizableText>
        <YStack gap='$2'>
          <SizableText size='$6' fontWeight='bold'>
            This is a heading text
          </SizableText>
          <Paragraph size='$4' fontWeight='500'>
            This is medium body text
          </Paragraph>
          <SizableText size='$2' fontWeight='normal'>
            This is caption text
          </SizableText>
        </YStack>
      </Card>

      <Card variant='filled'>
        <SizableText size='$6' fontWeight='600' marginBottom='$3'>
          Input Components
        </SizableText>
        <YStack gap='$3'>
          <Input placeholder='Default input' />
          <Input placeholder='Outlined input' borderWidth={1} />
          <Input
            placeholder='Filled input'
            backgroundColor='$backgroundFocus'
          />
          <Input
            placeholder='Error state input'
            borderWidth={1}
            borderColor='$red10'
          />
          <Input
            placeholder='Success state input'
            borderWidth={1}
            borderColor='$green10'
          />
        </YStack>
      </Card>
    </View>
  );
}
