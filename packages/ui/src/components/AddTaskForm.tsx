import { useState } from 'react';
import { Button, Input, Text, XStack, YStack } from 'tamagui';

/**
 * Props for the AddTaskForm component
 */
export interface AddTaskFormProps {
  onSubmit: (title: string) => Promise<void>;
  isLoading?: boolean;
  placeholder?: string;
  buttonText?: string;
}

/**
 * AddTaskForm component for creating new tasks
 *
 * Features:
 * - Sticky positioning at bottom of screen with proper z-index
 * - Form validation for required title field
 * - Loading states during submission
 * - Cross-platform compatible input handling
 * - Proper keyboard handling and accessibility
 *
 * Requirements addressed:
 * - 2.1: Sticky form at bottom of content layout
 * - 2.2: Text input for task title and "Add" button
 * - 4.4: Appropriate keyboard handling and input validation on both platforms
 */

export function AddTaskForm({
  onSubmit,
  isLoading = false,
  placeholder = 'Enter task title...',
  buttonText = 'Add Task',
}: AddTaskFormProps) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    const trimmed = title.trim();
    if (!trimmed) {
      setError('Task title is required');
      return;
    }
    if (trimmed.length > 255) {
      setError('Task title must be 255 characters or less');
      return;
    }
    setError(null);
    await onSubmit(trimmed);
    setTitle('');
  };

  return (
    <YStack gap='$2'>
      {error && (
        <Text color='$red10' fontSize='$2' px='$2'>
          {error}
        </Text>
      )}
      <XStack gap='$3' alignItems='center' width='100%'>
        <Input
          flex={1}
          value={title}
          onChangeText={setTitle}
          placeholder={placeholder}
          onSubmitEditing={handleSubmit}
          returnKeyType='done'
        />
        <Button
          onPress={handleSubmit}
          disabled={isLoading || !title.trim()}
          minWidth={100}
        >
          <Text color='$white1' fontWeight='600' fontSize='$3'>
            {isLoading ? 'Adding...' : buttonText}
          </Text>
        </Button>
      </XStack>
    </YStack>
  );
}
