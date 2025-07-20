# U3-Stack

## Universal Stack

A modern, type-safe, scalable monorepo stack to build Android, iOS, and Web applications with a shared codebase.

## Overview

The U3 Stack is designed to maximize code reuse and maintainability across Web (React), Mobile (React Native via Expo), and Backend (Fastify + tRPC). It promotes a modular structure using Clean Architecture, and leverages monorepo tooling (pnpm) to unify development.

All communication is type-safe (via tRPC + Zod), and component styling is consistent across platforms using Tamagui.

## Clean Architecture Overview

The project follows Clean Architecture and is divided into well-defined layers:

- **Presentation Layer (UI)**: Web (React), Mobile (Expo) use shared Tamagui components.
- **Application Layer**: State (Zustand), validation (Zod), business logic.
- **Domain Layer**: Shared logic, types, and contracts.
- **Infrastructure Layer**: Prisma, Neon, Clerk, Sentry, PostHog integrations.
- **Interface Layer**: Fastify + tRPC exposed APIs, which connect to Application services.

Each service and feature is encapsulated for modular scalability and testability.

## Folder Structure

```
/apps
  /web         → Vite + React + Tamagui for browser
  /mobile      → Expo + React Native + Tamagui for iOS/Android
  /backend     → Fastify + tRPC server

/packages
  /ui          → Tamagui-based universal components
  /api         → tRPC routers + Zod validators
  /db          → Prisma schema + Neon client + DB utils
  /config      → Tailwind, ESLint, tsconfig, env helpers
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

Generate Prisma client:
```bash
cd packages/db
pnpm prisma generate
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
VITE_API_URL=
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

## Web Deployment (Cloudflare Pages)

1. Set up your Cloudflare Pages project.
2. Point to `apps/web` as the root.
3. Set build command to:
   ```bash
   pnpm install && pnpm build
   ```
4. Set environment variables in Cloudflare Pages dashboard.

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
✅ **Modular Layers**: Clean Architecture separates concerns and supports growing teams.  
✅ **Shared Components**: Tamagui enables consistent UI across platforms.  
✅ **Shared Validation**: All API contracts are shared in packages/api.  
✅ **Database as Code**: Prisma + Neon make schema management safe, and scalable.  
✅ **Dev/Prod Isolation**: Environment variables scoped to apps.  
✅ **CI/CD**: GitHub Actions configured for linting, testing, deployment (Fly, Cloudflare, Expo).  
✅ **Observability**: Sentry for error tracking, PostHog for product analytics.  
✅ **Fast Build System**: pnpm workspaces reduce install time and duplication.  
✅ **Future-Proof**: Easily plug Temporal, Redis, or Vector DBs with adapters in /infra.