# U3-Stack

A modern, type-safe, scalable monorepo stack to build Android, iOS, and Web TODO applications with a shared codebase.

## Overview

The U3 Stack is designed to maximize code reuse and maintainability across Web (Next.js + React), Mobile (React Native via Expo + Expo Router), and Backend (Next.js API Routes + tRPC). It promotes a modular structure using Clean Architecture, and leverages Turborepo for high-performance monorepo orchestration.

All communication is type-safe (via tRPC + Zod), and component styling is consistent across platforms using Tamagui as the complete styling solution.

## UI & Styling Strategy

The U3 Stack uses **Tamagui** to build fast, universal UIs across web and mobile platforms. Tamagui provides a powerful solution to the **frontend development trilemma**: achieving native-feeling apps, deploying to both native and web, and sharing code between the two.

- **🚀 Performance**: Tamagui's optimizing compiler (`@tamagui/static`) reduces tree depth, eliminates unnecessary inline styles, and flattens components for faster rendering.
- **📱 Universal Components**: Tamagui adapts to platform primitives (e.g., `div` for web, `View` for native) while maintaining consistent styling.
- **🎨 Responsive Styling**: Media queries, themes, and animations are optimized for runtime performance, reducing re-renders and improving user experience.
- **🔧 Code Sharing**: Share up to 90% of your codebase across platforms without sacrificing performance.

Learn more about Tamagui and its capabilities at [tamagui.dev](https://tamagui.dev).

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

## Build System Strategy

The U3 Stack uses **Turborepo** for high-performance monorepo orchestration:

- **⚡ Intelligent Caching**: Cache build outputs and skip redundant work
- **🔄 Parallel Execution**: Run tasks across packages simultaneously
- **📊 Pipeline Orchestration**: Define task dependencies and execution order
- **🎯 Selective Builds**: Build only what changed with `--filter` flags

**Code Quality with Biome:**

- **🚀 Fast**: Single tool for linting and formatting (replaces ESLint + Prettier)
- **⚙️ Zero Config**: Works out of the box with sensible defaults
- **🔧 Consistent**: Same rules across all packages in the monorepo

## Backend Strategy

The U3 Stack backend is powered by **tRPC** and **Next.js API Routes**, ensuring type-safe communication and modular architecture:

- **Type Safety**: End-to-end type safety with tRPC and Zod.
- **Feature-Based Routers**: Organized in `/packages/api/routers/` for modularity.
- **State Management**: React Query integrated with tRPC for server state, caching, and synchronization.
- **Cross-Platform Sync**: Shared tRPC client for web and mobile.

## Authentication

The U3 Stack uses **Clerk** for seamless authentication:

- **🔐 Authentication Flows**: Sign In / Sign Up pages.
- **🔄 Session Management**: Clerk handles user sessions securely.
- **🛠 Integration**: Clerk JWTs are used in tRPC calls for user identity verification.

## Sample Application

The U3 Stack includes a simple TODO application as a demonstration of its capabilities:

- **Personal Task Management**: Create, edit, and complete tasks.
- **Cross-Platform Sync**: Access tasks from web and mobile.
- **Responsive Design**: Consistent UI across devices.

## Deployment

### Web Deployment (Vercel)

The Next.js app includes both frontend and API routes, so only one deployment is needed:

1. Connect your GitHub repository to Vercel.
2. Set the root directory to `apps/web`.
3. Vercel auto-detects Next.js and configures build settings.
4. Set environment variables in the Vercel dashboard:
   - `CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `DATABASE_URL`
   - `SENTRY_DSN`
5. Deploy with automatic deployments on push to `main`.

### Mobile Deployment (Expo)

The mobile app is deployed via Expo OTA (Over-the-Air) updates:

1. Configure `eas.json`:

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

2. Login to Expo:

```bash
npx expo login
```

3. Publish the app:

```bash
npx expo publish
```

OTA updates are pushed to users instantly via Expo.

## Environment Management

U3 Stack uses a unified, type-safe, and scalable approach to manage environment variables across Web, Mobile, and Backend with layered configuration files.

### ✅ Strategy
- Uses **dotenv-flow** to load layered .env files with proper precedence
- Uses **env-var** for type-safe access and validation of environment variables
- Supports environment-specific overrides with fallback defaults
- Secrets are injected at runtime via CI/CD pipelines for production (e.g., Vercel, EAS, Fly.io, GitHub Actions)

### 🧱 Folder Structure
```bash
/env
  .env.defaults      # Default values for all environments
  .env.development   # Development environment overrides
  .env.production    # Production environment overrides
  .env.local.example # Example local overrides (copy to .env.local)
  .env.local         # Local overrides (git-ignored)

/packages/config
  config.ts          # Type-safe configuration loader
  config.js          # JavaScript export wrapper
```

### 📋 Loading Order (Precedence)
Environment variables are loaded in the following order (highest to lowest precedence):

1. **`.env.local`** - Local overrides (git-ignored, for personal settings)
2. **`.env.{NODE_ENV}`** - Environment-specific values (e.g., `.env.development`)
3. **`.env.defaults`** - Default fallback values

### 🛠 Usage
```typescript
// Type-safe configuration access
import { config, validateConfig, isDevelopment } from '@u3/config/env';

// Access configuration values
console.log(config.app.name);        // "U3-Stack"
console.log(config.server.port);     // 3000
console.log(config.database.url);    // "postgresql://..."

// Environment detection
if (isDevelopment) {
  console.log('Running in development mode');
}

// Validate configuration (call during app startup)
validateConfig(); // Throws error if validation fails
```

### 📦 Package Imports
```typescript
// API imports (features are now part of the API package)
import { authRouter, todoRouter } from '@u3/backend';

// UI component imports
import { Button, Input } from '@u3/ui/core';
import { TaskCard, PriorityPill } from '@u3/ui/todo';

// Utility imports
import { formatDate, debounce } from '@u3/utils';
import { useLocalStorage, useDebounce } from '@u3/hooks';
```

### 🔧 Local Development Setup
1. Copy `env/.env.local.example` to `env/.env.local`
2. Customize values as needed for your local environment
3. The `.env.local` file is git-ignored and won't be committed

### 🧪 Validation
The configuration system includes comprehensive validation:
```bash
# Test environment configuration
pnpm run validate:env

# Test all systems
pnpm run validate && pnpm run validate:workspace && pnpm run validate:env
```

### 🚀 Access in Apps

**Web (Next.js)**
- Expose env vars with `NEXT_PUBLIC_` prefix
- Managed via `.env.web`, Vercel dashboard, or CI

**Mobile (Expo / React Native)**
- Expose using `EXPO_PUBLIC_` prefix
- Loaded via `extra` in `app.config.ts` or EAS

**Backend (Fastify)**
- Fully secure access to secrets and private envs
- `config.port`, `config.secretKey`, etc. used in server startup

## Scalability Practices

### 🏗️ Architecture & Organization
✅ **Feature-Based Vertical Slicing**: Each feature is self-contained with its own logic, schemas, and UI components  
✅ **Clean Architecture Layers**: Clear separation between presentation, application, domain, and infrastructure  
✅ **Modular Packages**: Independent packages with well-defined interfaces and single responsibilities  
✅ **Type Safety**: tRPC + Zod provide end-to-end type safety from backend to frontend  

### 🎯 State & Data Management
✅ **React Query First**: Server state as primary state manager with built-in caching, retries, and DevTools  
✅ **Simple Client State**: useState for client-only derived state, avoiding complex state stores  
✅ **Database as Code**: Drizzle ORM + Neon make schema management safe, lightweight, and scalable  
✅ **Type-Safe Environment Management**: Unified, layered environment configuration with runtime validation  

### 🧪 Testing & Quality
✅ **Unified Testing**: Maestro provides cross-platform UI testing with single test suite for web and mobile  
✅ **Isolated Unit Tests**: Feature-based testing with dedicated mocks and fixtures  
✅ **Code Quality**: Biome provides fast, consistent linting and formatting across the entire monorepo  
✅ **Workspace Validation**: Automated checks for package dependencies and environment configuration  

### 🚀 Performance & DevOps
✅ **High-Performance Builds**: Turborepo provides intelligent caching and parallel execution for faster builds  
✅ **CI/CD**: GitHub Actions configured for linting, testing, deployment (Vercel, Expo)  
✅ **Observability**: Sentry for error tracking, PostHog for product analytics  
✅ **Future-Proof**: Easily extend with new features, services, or infrastructure adapters

## Folder Structure

### Overview
```bash
/env
  .env.defaults      # Default values for all environments
  .env.development   # Development environment overrides
  .env.production    # Production environment overrides
  .env.local.example # Example local overrides (copy to .env.local)
  .env.local         # Local overrides (git-ignored)

/packages/config
  config.ts          # Type-safe configuration loader
  config.js          # JavaScript export wrapper
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/bgaurav7/u3-stack.git
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp env/.env.local.example env/.env.local
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links and Resources

- [Tamagui](https://tamagui.dev)
- [Expo](https://expo.dev)
- [Vercel](https://vercel.com)
- [Clerk](https://clerk.dev)

## Project Structure

The U3 Stack is organized as a monorepo to ensure modularity, scalability, and maintainability. Below is the folder structure with responsibilities:

### Root Directory
- **`apps/`**: Contains platform-specific applications (web and mobile).
- **`packages/`**: Houses shared libraries and backend services.
- **`env/`**: Manages environment variables for different environments.
- **`pnpm-workspace.yaml`**: Defines the workspace structure for `pnpm`.
- **`turbo.json`**: Configuration for Turborepo (monorepo orchestration).

### `apps/`
- **`apps/mobile/`**: React Native application for Android and iOS platforms.
- **`apps/web/`**: Next.js application for web platforms.

### `packages/`
- **`packages/backend/`**: Backend services powered by tRPC and Next.js API Routes.
  - **`features/`**: Feature-based modules.
  - **`middleware/`**: Middleware for auth, logging, etc.
  - **`routers/`**: tRPC routers for API endpoints.
  - **`utils/`**: Utility functions for the backend.
  - **`index.ts`**: Entry point for the backend.
  - **`server.ts`**: Server setup and configuration.
  - **`trpc.ts`**: tRPC configuration.
- **`packages/config/`**: Configuration management.
- **`packages/frontend/`**: Shared frontend utilities.
  - **`api/`**: API client utilities.
  - **`hooks/`**: Reusable React hooks.
  - **`pages/`**: Page components for the frontend.
  - **`types/`**: TypeScript types for the frontend.
  - **`utils/`**: Utility functions for the frontend.
  - **`index.ts`**: Entry point for frontend utilities.
- **`packages/types/`**: Global TypeScript types and interfaces.
- **`packages/ui/`**: Design system and universal components.
  - **`components/`**: UI components.
  - **`config/`**: Configuration for UI.
  - **`layout/`**: Layout primitives.
  - **`provider/`**: Providers for UI context.
  - **`index.ts`**: Entry point for UI components.

### `env/`
- **`.env.defaults`**: Default environment variables.
- **`.env.development`**: Development-specific overrides.
- **`.env.production`**: Production-specific overrides.
- **`.env.local.example`**: Example local overrides.
- **`.env.local`**: Local overrides (git-ignored).

### `scripts/`
- Reserved for automation or utility scripts.
