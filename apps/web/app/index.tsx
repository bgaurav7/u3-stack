import { Button, Card, Input, Text, View } from '@u3/ui';
import type React from 'react';

export default function HomePage(): React.ReactElement {
  return (
    <View padding='$4' gap='$4' maxWidth={600} marginHorizontal='auto'>
      <Text variant='heading' weight='bold'>
        Welcome to U3-Stack Web
      </Text>

      <Text variant='body'>
        This is a test page showcasing the shared UI components from @u3/ui
        package.
      </Text>

      <Card variant='elevated'>
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

      <Card variant='outlined'>
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
          <Text variant='caption' weight='normal'>
            This is caption text
          </Text>
        </View>
      </Card>

      <Card variant='filled'>
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
