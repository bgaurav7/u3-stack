# U3-Stack

## Universal Stack

A modern, type-safe, scalable monorepo stack to build Android, iOS, and Web applications with a
shared codebase.

## Overview

The U3 Stack is designed to maximize code reuse and maintainability across Web (Next.js + React),
Mobile (React Native via Expo + Expo Router), and Backend (Fastify + tRPC). It promotes a modular
structure using Clean Architecture, and leverages monorepo tooling (pnpm) to unify development.

All communication is type-safe (via tRPC + Zod), and component styling is consistent across
platforms using Tamagui as the complete styling solution.

## Styling Strategy

The U3 Stack uses **@tamagui/config** for simplified theme management:

- **🎨 @tamagui/config**: Pre-built themes, tokens, and components out of the box
- **🔧 Extensible**: Override or extend default config when needed
- **📱 Universal**: Same styling system across web and mobile
- **⚡ Performance**: Optimized compilation and tree-shaking

**Configuration approach:**

```typescript
// packages/ui/tamagui.config.ts
import { config } from '@tamagui/config/v3';
export default config;
```

This keeps theme logic out of your UI package, reducing mental overhead while providing professional
defaults.

## Testing Strategy

The U3 Stack uses **Maestro** for unified cross-platform UI testing:

- **🎯 Single Test Suite**: Write once, test everywhere (web, iOS, Android)
- **📝 YAML Configuration**: Simple, readable test scenarios in YAML format
- **🔄 CI Integration**: Automated testing on every PR and deployment
- **📊 Comprehensive Coverage**: End-to-end user flows across all platforms

**Benefits:**

- Consistent UI behavior validation across platforms
- Reduced test maintenance overhead
- Early detection of cross-platform regressions
- Simplified test authoring with YAML syntax

## State Management Strategy

The U3 Stack uses a **React Query + useState** approach to state management:

- **🏆 React Query (Primary)**: All server state, caching, background updates, and synchronization
- **⚡ useState**: Client-only state (UI toggles, form inputs, local component state)
- **🚫 No Global State Libraries**: No Zustand, Redux, or similar - React Query cache IS your global
  state

**When to use each:**

- **React Query**: User data, API responses, server-derived state
- **useState**: Modal open/closed, form inputs, loading spinners, UI toggles

**Benefits:**

- Built-in caching, retries, and loading states
- Excellent DevTools for debugging
- No boilerplate state management code
- Server as source of truth
- Simple mental model: server data vs UI state

## Clean Architecture Overview

The project follows Clean Architecture and is divided into well-defined layers:

- **Presentation Layer (UI)**: Web (Next.js + React), Mobile (Expo + Expo Router) use shared Tamagui
  components.
- **Application Layer**: Server state (React Query as primary state manager), validation (Zod),
  business logic.
- **Domain Layer**: Shared logic, types, and contracts.
- **Infrastructure Layer**: Drizzle ORM, Neon, Clerk, Sentry, PostHog integrations.
- **Interface Layer**: Fastify + tRPC exposed APIs, which connect to Application services.

Each service and feature is encapsulated for modular scalability and testability.

## Folder Structure

```
/apps
  /web         → Next.js + React + Tamagui + Expo Router for browser
  /mobile      → Expo + React Native + Tamagui + Expo Router for iOS/Android
  /backend     → Fastify + tRPC server
    /src/features → Feature-based tRPC routers + Zod schemas

/packages
  /ui          → Tamagui-based universal components
  /db          → Drizzle schema + Neon client + DB utils
  /config      → ESLint, tsconfig, env helpers
  /types       → Global types and interfaces
```

## Setup Instructions

Clone the repository and install dependencies:

```bash
pnpm install
```

Bootstrap Tamagui for native:

```bash
cd apps/mobile
npx expo install tamagui
```

Generate Drizzle types:

```bash
cd packages/db
pnpm drizzle-kit generate
```

Start local development:

```bash
pnpm dev                 # web + backend
cd apps/mobile
npx expo start           # mobile
```

## Environment Variables

Setup `.env` files at relevant layers.

**apps/backend/.env**

```
DATABASE_URL=Neon PostgreSQL URL
CLERK_SECRET_KEY=
SENTRY_DSN=
POSTHOG_API_KEY=
POSTHOG_HOST=
```

**apps/web/.env**

```
CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_API_URL=
```

**apps/mobile/.env**

```
CLERK_PUBLISHABLE_KEY=
EXPO_PUBLIC_API_URL=
```

## Backend Deployment (Fly.io)

Create a Fly.io app:

```bash
fly launch
```

Set environment secrets:

```bash
fly secrets set DATABASE_URL=... CLERK_SECRET_KEY=... SENTRY_DSN=...
```

Deploy:

```bash
fly deploy
```

The Fastify server with tRPC will run in Docker container.

## Web Deployment (Vercel)

1. Connect your GitHub repository to Vercel.
2. Set the root directory to `apps/web`.
3. Vercel will auto-detect Next.js and configure build settings.
4. Set environment variables in Vercel dashboard:
   - `CLERK_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_API_URL`
5. Deploy with automatic deployments on push to main.

## Mobile OTA (Expo + EAS)

Configure your `eas.json`:

```json
{
  "build": {
    "production": {
      "developmentClient": false,
      "distribution": "store"
    }
  },
  "cli": {
    "version": "latest"
  }
}
```

Login:

```bash
npx expo login
```

Publish:

```bash
npx expo publish
```

OTA updates will be pushed to users instantly via EAS.

## Scalability Practices

✅ **Type Safety**: tRPC + Zod provide end-to-end type safety from backend to frontend.  
✅ **React Query First**: Server state as primary state manager with built-in caching, retries, and
DevTools.  
✅ **Simple Client State**: useState for client-only derived state, avoiding complex state stores.  
✅ **Modular Layers**: Clean Architecture separates concerns and supports growing teams.  
✅ **Universal Styling**: Tamagui with @tamagui/config provides complete styling solution with
pre-built themes and design tokens.  
✅ **Universal Routing**: Expo Router provides consistent navigation patterns between web and
mobile.  
✅ **Feature-Based APIs**: tRPC routers colocated with features for better domain separation.  
✅ **Database as Code**: Drizzle ORM + Neon make schema management safe, lightweight, and
scalable.  
✅ **Dev/Prod Isolation**: Environment variables scoped to apps.  
✅ **Unified Testing**: Maestro provides cross-platform UI testing with single test suite for web
and mobile.  
✅ **CI/CD**: GitHub Actions configured for linting, testing, deployment (Fly, Vercel, Expo).  
✅ **Observability**: Sentry for error tracking, PostHog for product analytics.  
✅ **Fast Build System**: pnpm workspaces reduce install time and duplication.  
✅ **Future-Proof**: Easily plug Temporal, Redis, or Vector DBs with adapters in /infra.
