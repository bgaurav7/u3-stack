import { StatusBar } from 'expo-status-bar';
import { Paragraph, ScrollView, SizableText, View, YStack } from 'tamagui';
import { Button } from '../primitives/Button';
import { Card } from '../primitives/Card';
import { Input } from '../primitives/Input';

export function PrimitivesSample() {
  return (
    <>
      <StatusBar style='light' />
      <ScrollView style={{ flex: 1 }}>
        <View
          padding='$4'
          gap='$4'
          maxWidth={600}
          alignSelf='center'
          width='100%'
        >
          <SizableText size='$8' fontWeight='bold' textAlign='center'>
            Welcome to U3-Stack
          </SizableText>

          <Paragraph size='$4' textAlign='center' color='$gray10'>
            This is a cross-platform app showcasing shared UI components from
            @u3/ui package.
          </Paragraph>

          <Card variant='elevated'>
            <SizableText size='$6' fontWeight='600' marginBottom='$3'>
              Button Components
            </SizableText>
            <YStack gap='$3'>
              <Button size='$4' backgroundColor='$color'>
                Primary Button
              </Button>
              <Button size='$3' backgroundColor='$background'>
                Secondary Button
              </Button>
              <Button size='$2' variant='outlined'>
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
      </ScrollView>
    </>
  );
}
