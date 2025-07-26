import type { HTMLAttributes, ReactNode } from 'react';
import { Button, Card, Text, YStack } from 'tamagui';

export interface ErrorPageProps {
  /** Custom title for the error page */
  title?: string;
  /** Custom message for the error page */
  message?: string;
  /** Custom action button */
  actionButton?: ReactNode;
  /** Container props for styling */
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export function ErrorPage({
  title = 'Page Not Found',
  message = "The page you're looking for doesn't exist or has been moved.",
  actionButton,
  containerProps,
}: ErrorPageProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...containerProps}
    >
      <Card padding='$6' maxWidth={400} width='100%'>
        <YStack gap='$4' alignItems='center'>
          <Text fontSize='$8' fontWeight='bold' color='$color'>
            404
          </Text>
          <Text fontSize='$6' fontWeight='600' textAlign='center'>
            {title}
          </Text>
          <Text fontSize='$4' color='$gray10' textAlign='center'>
            {message}
          </Text>
          {actionButton || (
            <Button size='$4' backgroundColor='$color' color='white'>
              Go Home
            </Button>
          )}
        </YStack>
      </Card>
    </div>
  );
}

ErrorPage.displayName = 'ErrorPage';
