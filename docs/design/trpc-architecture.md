# tRPC Architecture

## Overview

The U3-Stack uses a unified tRPC architecture that provides type-safe API communication across web and mobile platforms. This approach ensures consistency and leverages the benefits of TypeScript throughout the entire stack.

## Architecture Components

### 1. Backend (`@u3/backend`)
- **Location**: `packages/backend/src/`
- **Purpose**: tRPC server implementation and router definitions
- **Key Files**:
  - `routers/` - Individual API route handlers
  - `trpc.ts` - tRPC server configuration
  - `server.ts` - Express server setup with tRPC integration
- **Exports**: `appRouter` (instance) and `AppRouter` (type)

### 2. Frontend Base (`@u3/frontend`)
- **Location**: `packages/frontend/src/api/`
- **Purpose**: Shared tRPC client configuration and base provider
- **Key Files**:
  - `trpc-client.ts` - Base tRPC client with auth token management (imports AppRouter from `@u3/backend`)
  - `trpc-provider-base.tsx` - Reusable tRPC provider component
  - `index.ts` - API exports for platform consumption

### 3. Platform-Specific Providers

#### Web (`apps/web/provider/`)
- **File**: `trpc-client-provider.tsx`
- **Purpose**: Web-specific tRPC provider with Clerk authentication
- **Features**: 
  - Clerk token integration
  - Web-optimized QueryClient configuration
  - Extends BaseTRPCProvider

#### Mobile (`apps/mobile/provider/`)
- **File**: `trpc-client-provider.tsx`  
- **Purpose**: Mobile-specific tRPC provider with mobile auth
- **Features**:
  - Mobile auth token management (SecureStore, etc.)
  - Mobile-optimized configuration
  - Extends BaseTRPCProvider

## Data Flow

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Web Client    │    │  Mobile Client   │    │   Backend API   │
│                 │    │                  │    │                 │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │ Clerk Auth  │ │    │ │ Mobile Auth  │ │    │ │ tRPC Router │ │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
│        │        │    │        │         │    │        │        │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │BaseTRPCProv │ │    │ │BaseTRPCProv  │ │    │ │ Procedures  │ │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
│        │        │    │        │         │    │        │        │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │ tRPC Client │ │    │ │ tRPC Client  │ │    │ │ Database    │ │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## Key Benefits

### 1. Type Safety
- End-to-end TypeScript types from database to UI
- Compile-time error detection
- Auto-completion and IntelliSense support

### 2. Unified Architecture  
- Single API definition serves both web and mobile
- Consistent error handling across platforms
- Shared authentication patterns

### 3. Code Reuse
- Base tRPC provider shared across platforms
- Common client configuration and utilities
- Platform-specific customization through extension

### 4. Developer Experience
- Auto-generated client based on server schema
- React Query integration for caching and state management
- Hot reload support during development

## Usage Examples

### Frontend tRPC Client Setup
```tsx
// packages/frontend/src/api/trpc-client.ts
import type { AppRouter } from '@u3/backend';
export const trpc = createTRPCReact<AppRouter>();
```

### Web Component
```tsx
import { trpc } from '@u3/frontend';

function TodoList() {
  const { data: todos, isLoading } = trpc.todo.list.useQuery();
  const createTodo = trpc.todo.create.useMutation();
  
  // Component logic...
}
```

### Mobile Component  
```tsx
import { trpc } from '@u3/frontend';

function TodoList() {
  const { data: todos, isLoading } = trpc.todo.list.useQuery();
  const createTodo = trpc.todo.create.useMutation();
  
  // Same API, works on mobile!
}
```

## File Structure

```
packages/
├── backend/
│   └── src/
│       ├── routers/           # API route definitions
│       ├── trpc.ts           # tRPC server config
│       ├── server.ts         # Express + tRPC setup
│       └── index.ts          # Exports appRouter + AppRouter type
├── frontend/
│   └── src/
│       └── api/
│           ├── trpc-client.ts        # Base tRPC client
│           ├── trpc-provider-base.tsx  # Base provider
│           └── index.ts              # API exports
└── types/
    └── src/
        └── frontend/
            └── auth.ts          # Auth types only

apps/
├── web/
│   └── provider/
│       └── trpc-client-provider.tsx  # Web-specific provider (extends base)
└── mobile/
    └── provider/
        └── trpc-client-provider.tsx  # Mobile-specific provider (extends base)
```

## Dependencies

### Frontend Package Dependencies
```json
{
  "@trpc/client": "^10.45.2",
  "@trpc/react-query": "^10.45.2", 
  "@tanstack/react-query": "^4.40.1",
  "@u3/backend": "workspace:*",
  "@u3/types": "workspace:*"
}
```

### Platform-Specific
- **Web**: `@clerk/nextjs` for authentication
- **Mobile**: Your chosen mobile auth solution (Expo Auth Session, etc.)

## Authentication Integration

### Web (Clerk)
```tsx
// apps/web/provider/trpc-client-provider.tsx
import { BaseTRPCProvider } from '@u3/frontend';
import { useAuth } from '@clerk/nextjs';

export function TRPCClientProvider({ children }) {
  const { getToken, isLoaded } = useAuth();

  const getAuthToken = useCallback(async () => {
    if (!isLoaded) return null;
    try {
      return await getToken();
    } catch (error) {
      console.error('Auth error:', error);
      return null;
    }
  }, [getToken, isLoaded]);

  return (
    <BaseTRPCProvider getAuthToken={getAuthToken}>
      {children}
    </BaseTRPCProvider>
  );
}
```

### Mobile (Example)
```tsx
// apps/mobile/provider/trpc-client-provider.tsx
import { BaseTRPCProvider } from '@u3/frontend';

export function TRPCClientProvider({ children }) {
  const getAuthToken = useCallback(async () => {
    // Implement with your mobile auth provider:
    // - Expo SecureStore
    // - AsyncStorage  
    // - Custom auth solution
    return await getStoredToken();
  }, []);

  return (
    <BaseTRPCProvider getAuthToken={getAuthToken}>
      {children}
    </BaseTRPCProvider>
  );
}
```

## Architecture Benefits

### ✅ Clean Dependencies
- Frontend package depends on backend for AppRouter type (appropriate in monorepo)
- No circular dependencies
- Clear separation of concerns

### ✅ Code Reuse
- BaseTRPCProvider handles common logic
- Platform providers only handle auth differences
- Shared client configuration

### ✅ Type Safety
- Full tRPC type safety on both platforms
- AppRouter type imported directly from `@u3/backend`
- Compile-time error detection

### ✅ Flexibility
- Easy to customize per platform
- Auth integration per platform needs
- Extensible base provider pattern

### ✅ Simplicity
- Single source of truth for AppRouter type in backend
- No manual type maintenance
- Automatic type updates when backend changes

This architecture provides a scalable, type-safe foundation that grows with your application while maintaining consistency across platforms and keeping the type system simple and maintainable.
