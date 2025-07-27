'use client';

import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import { PrimitivesSample, UIProvider } from '@u3/ui';
import type React from 'react';

export default function HomePage(): React.ReactElement {
  return (
    <UIProvider>
      <div style={{ minHeight: '100vh', flex: 1, padding: '2rem' }}>
        <SignedOut>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1>Welcome to U3-Stack</h1>
            <p>Please sign in to access the application.</p>
          </div>
        </SignedOut>

        <SignedIn>
          <UserInfo />
          <div style={{ marginTop: '2rem' }}>
            <PrimitivesSample />
          </div>
        </SignedIn>
      </div>
    </UIProvider>
  );
}

function UserInfo(): React.ReactElement {
  const { user } = useUser();

  return (
    <div
      style={{
        marginBottom: '2rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '0.5rem',
        border: '1px solid #e9ecef',
      }}
    >
      <h2>
        Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}! 🎉
      </h2>
      <p>You are successfully authenticated with Clerk.</p>
    </div>
  );
}
