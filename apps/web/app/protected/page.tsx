'use client';

import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';

export default function ProtectedPage() {
  return (
    <>
      <SignedIn>
        <div style={{ padding: '2rem' }}>
          <h1>Protected Page</h1>
          <p>This page is only accessible to authenticated users.</p>
          <p>
            You can create protected routes by wrapping content with SignedIn
            components or using Clerk's auth middleware.
          </p>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
