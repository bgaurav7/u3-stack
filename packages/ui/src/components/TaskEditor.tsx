'use client';

import { memo, useState } from 'react';
import {
  Button,
  Input,
  Label,
  Switch,
  Text,
  TextArea,
  XStack,
  YStack,
} from 'tamagui';

export interface TaskEditorProps {
  taskId?: string;
}

const TaskEditorComponent = ({ taskId }: TaskEditorProps) => {
  // Dummy state for form fields
  const [title, setTitle] = useState(`Sample Task ${taskId || '123'}`);
  const [description, setDescription] = useState(
    'This is a sample task description that demonstrates the task editor functionality.'
  );
  const [completed, setCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  // Placeholder handlers with error handling
  const handleSave = async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');

      // Simulate save operation
      console.log('Save task:', { taskId, title, description, completed });

      // Basic validation
      if (!title.trim()) {
        throw new Error('Task title is required');
      }

      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Failed to save task:', error);
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to save task'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    try {
      console.log('Cancel task editing');
      // Reset any error state
      setErrorMessage('');
    } catch (error) {
      console.error('Error during cancel:', error);
    }
  };

  return (
    <YStack gap='$4' padding='$4'>
      {/* Task ID Display */}
      {taskId ? (
        <YStack gap='$2'>
          <Label
            htmlFor='taskId'
            fontSize='$3'
            fontWeight='500'
            color='$color11'
          >
            Task ID
          </Label>
          <Text id='taskId' fontSize='$3' color='$color10'>
            {taskId}
          </Text>
        </YStack>
      ) : null}

      {/* Title Field */}
      <YStack gap='$2'>
        <Label htmlFor='title' fontSize='$3' fontWeight='500' color='$color11'>
          Title *
        </Label>
        <Input
          id='title'
          value={title}
          onChangeText={setTitle}
          placeholder='Enter task title'
          size='$4'
          borderColor='$color6'
          focusStyle={{ borderColor: '$color8' }}
        />
      </YStack>

      {/* Description Field */}
      <YStack gap='$2'>
        <Label
          htmlFor='description'
          fontSize='$3'
          fontWeight='500'
          color='$color11'
        >
          Description
        </Label>
        <TextArea
          id='description'
          value={description}
          onChangeText={setDescription}
          placeholder='Enter task description'
          size='$4'
          minHeight={100}
          borderColor='$color6'
          focusStyle={{ borderColor: '$color8' }}
        />
      </YStack>

      {/* Completion Status */}
      <XStack
        alignItems='center'
        justifyContent='space-between'
        paddingVertical='$2'
      >
        <Label
          htmlFor='completed'
          fontSize='$3'
          fontWeight='500'
          color='$color11'
        >
          Mark as completed
        </Label>
        <Switch
          id='completed'
          checked={completed}
          onCheckedChange={setCompleted}
          size='$3'
        />
      </XStack>

      {/* Error Message */}
      {errorMessage ? (
        <YStack
          padding='$3'
          backgroundColor='$red2'
          borderRadius='$4'
          borderColor='$red6'
          borderWidth={1}
        >
          <Text color='$red11' fontSize='$3'>
            {errorMessage}
          </Text>
        </YStack>
      ) : null}

      {/* Action Buttons */}
      <XStack gap='$3' justifyContent='flex-end' marginTop='$4'>
        <Button
          variant='outlined'
          size='$4'
          onPress={handleCancel}
          borderColor='$color6'
          color='$color11'
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button
          size='$4'
          onPress={handleSave}
          backgroundColor='$blue9'
          color='white'
          hoverStyle={{ backgroundColor: '$blue10' }}
          pressStyle={{ backgroundColor: '$blue8' }}
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save Task'}
        </Button>
      </XStack>
    </YStack>
  );
};

// Export memoized component for performance
export const TaskEditor = memo(TaskEditorComponent);
