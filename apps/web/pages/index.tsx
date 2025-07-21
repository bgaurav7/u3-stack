import { Button, Card, Input, Text } from '@u3/ui';
import React from 'react';
import { View } from 'tamagui';

export default function HomePage() {
  return (
    <View padding='$4' gap='$4' backgroundColor='$background' minHeight='100vh'>
      <Text variant='heading' weight='bold' textAlign='center'>
        Welcome to U3-Stack Web
      </Text>

      <Text variant='body' textAlign='center' color='$gray11'>
        This is the web version of the U3-Stack application using shared UI
        components.
      </Text>

      <Card variant='elevated' maxWidth={600} alignSelf='center'>
        <Text variant='heading' weight='medium' marginBottom='$3'>
          Button Components
        </Text>
        <View gap='$3'>
          <Button variant='primary' size='large'>
            Primary Button
          </Button>
          <Button variant='secondary' size='medium'>
            Secondary Button
          </Button>
          <Button variant='outline' size='small'>
            Outline Button
          </Button>
        </View>
      </Card>

      <Card variant='outlined' maxWidth={600} alignSelf='center'>
        <Text variant='heading' weight='medium' marginBottom='$3'>
          Text Components
        </Text>
        <View gap='$2'>
          <Text variant='heading' weight='bold'>
            This is a heading text
          </Text>
          <Text variant='body' weight='medium'>
            This is medium body text
          </Text>
          <Text variant='caption' weight='normal' color='$gray10'>
            This is caption text
          </Text>
        </View>
      </Card>

      <Card variant='filled' maxWidth={600} alignSelf='center'>
        <Text variant='heading' weight='medium' marginBottom='$3'>
          Input Components
        </Text>
        <View gap='$3'>
          <Input placeholder='Default input' variant='default' />
          <Input placeholder='Outlined input' variant='outlined' />
          <Input placeholder='Filled input' variant='filled' />
          <Input
            placeholder='Error state input'
            variant='outlined'
            state='error'
          />
          <Input
            placeholder='Success state input'
            variant='outlined'
            state='success'
          />
        </View>
      </Card>
    </View>
  );
}
