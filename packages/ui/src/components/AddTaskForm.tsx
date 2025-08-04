// import type React from 'react';
import { useCallback, useState } from 'react';
import {
  Button,
  type ButtonProps,
  Input,
  type InputProps,
  Text,
  XStack,
  YStack,
  type YStackProps,
} from 'tamagui';

/**
 * Props for the AddTaskForm component
 */
export interface AddTaskFormProps extends Omit<YStackProps, 'onSubmit'> {
  /**
   * Callback function called when form is submitted with valid data
   * @param title - The task title entered by the user
   * @returns Promise that resolves when the task is created
   */
  onSubmit: (title: string) => Promise<void>;

  /**
   * Whether the form is currently submitting (shows loading state)
   */
  isLoading?: boolean;

  /**
   * Placeholder text for the title input
   */
  placeholder?: string;

  /**
   * Custom button text (defaults to "Add Task")
   */
  buttonText?: string;

  /**
   * Custom styling for the input field
   */
  inputProps?: Partial<InputProps>;

  /**
   * Custom styling for the submit button
   */
  buttonProps?: Partial<ButtonProps>;

  /**
   * Whether to show validation errors
   */
  showValidation?: boolean;
}

/**
 * Internal form state interface
 */
interface AddTaskFormState {
  /**
   * Current title input value
   */
  title: string;

  /**
   * Whether the form is currently submitting
   */
  isSubmitting: boolean;

  /**
   * Validation error message (null when no error)
   */
  validationError: string | null;

  /**
   * Whether the form has been touched (for validation display)
   */
  touched: boolean;
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
  inputProps = {},
  buttonProps = {},
  showValidation = true,
  ...stackProps
}: AddTaskFormProps) {
  // Form state management with React hooks
  const [formState, setFormState] = useState<AddTaskFormState>({
    title: '',
    isSubmitting: false,
    validationError: null,
    touched: false,
  });

  // Validate title field
  const validateTitle = useCallback((title: string): string | null => {
    if (!title.trim()) {
      return 'Task title is required';
    }
    if (title.trim().length > 255) {
      return 'Task title must be 255 characters or less';
    }
    return null;
  }, []);

  // Handle input change with validation
  const handleTitleChange = useCallback(
    (text: string) => {
      const validationError = showValidation ? validateTitle(text) : null;

      setFormState(prev => ({
        ...prev,
        title: text,
        validationError,
        touched: true,
      }));
    },
    [validateTitle, showValidation]
  );

  // Handle form submission
  const handleSubmit = useCallback(async () => {
    const trimmedTitle = formState.title.trim();
    const validationError = validateTitle(trimmedTitle);

    // Update touched state and show validation errors
    setFormState(prev => ({
      ...prev,
      touched: true,
      validationError,
    }));

    // Don't submit if validation fails
    if (validationError) {
      return;
    }

    // Don't submit if already submitting or loading
    if (formState.isSubmitting || isLoading) {
      return;
    }

    try {
      setFormState(prev => ({ ...prev, isSubmitting: true }));

      // Call the onSubmit callback
      await onSubmit(trimmedTitle);

      // Clear form on successful submission
      setFormState({
        title: '',
        isSubmitting: false,
        validationError: null,
        touched: false,
      });
    } catch (_error) {
      // Keep form data on error, just reset submitting state
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        validationError: 'Failed to create task. Please try again.',
      }));
    }
  }, [
    formState.title,
    formState.isSubmitting,
    isLoading,
    onSubmit,
    validateTitle,
  ]);

  // Handle Enter key press for form submission
  const handleKeyPress = useCallback(
    (event: {
      key?: string;
      nativeEvent?: { key?: string };
      preventDefault: () => void;
    }) => {
      if (event.key === 'Enter' || event.nativeEvent?.key === 'Enter') {
        event.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  // Determine if submit button should be disabled
  const isSubmitDisabled =
    !formState.title.trim() ||
    formState.isSubmitting ||
    isLoading ||
    (showValidation && !!formState.validationError);

  return (
    <YStack
      gap='$2'
      backgroundColor='$background'
      borderTopWidth={1}
      borderTopColor='$borderColor'
      paddingTop='$3'
      paddingBottom='$3'
      paddingHorizontal='$4'
      // Ensure proper background for overlay effect
      shadowColor='$shadowColor'
      shadowOffset={{ width: 0, height: -2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      elevation={4}
      {...stackProps}
    >
      {/* Validation error display */}
      {showValidation && formState.touched && formState.validationError && (
        <Text color='$red10' fontSize='$2' paddingHorizontal='$2'>
          {formState.validationError}
        </Text>
      )}

      {/* Form input and button container */}
      <XStack gap='$3' alignItems='center' width='100%'>
        {/* Title input field */}
        <Input
          flex={1}
          value={formState.title}
          onChangeText={handleTitleChange}
          placeholder={placeholder}
          placeholderTextColor='$color10'
          // Keyboard handling for cross-platform compatibility
          onKeyPress={handleKeyPress}
          onSubmitEditing={handleSubmit}
          returnKeyType='done'
          // Styling
          borderColor={
            showValidation && formState.touched && formState.validationError
              ? '$red8'
              : '$borderColor'
          }
          focusStyle={{
            borderColor: '$blue8',
            borderWidth: 2,
          }}
          // Platform-specific optimizations
          autoCapitalize='sentences'
          autoCorrect={true}
          spellCheck={true}
          // Custom input props
          {...inputProps}
        />

        {/* Submit button */}
        <Button
          onPress={handleSubmit}
          disabled={isSubmitDisabled}
          // Loading state
          opacity={isSubmitDisabled ? 0.6 : 1}
          // Styling
          backgroundColor='$blue9'
          color='$white1'
          borderRadius='$4'
          paddingHorizontal='$4'
          paddingVertical='$2.5'
          minWidth={100}
          // Hover and press states for web
          hoverStyle={{
            backgroundColor: '$blue10',
            opacity: isSubmitDisabled ? 0.6 : 1,
          }}
          pressStyle={{
            backgroundColor: '$blue8',
            opacity: isSubmitDisabled ? 0.6 : 0.9,
          }}
          // Custom button props
          {...buttonProps}
        >
          <Text color='$white1' fontWeight='600' fontSize='$3'>
            {formState.isSubmitting || isLoading ? 'Adding...' : buttonText}
          </Text>
        </Button>
      </XStack>
    </YStack>
  );
}
