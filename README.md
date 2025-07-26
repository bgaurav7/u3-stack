# U3-Stack

## Universal Stack

A modern, type-safe, scalable monorepo stack to build Android, iOS, and Web TODO applications with a shared codebase.

## Overview

The U3 Stack is designed to maximize code reuse and maintainability across Web (Next.js + React),
Mobile (React Native via Expo + Expo Router), and Backend (Next.js API Routes + tRPC). It promotes a modular
structure using Clean Architecture, and leverages Turborepo for high-performance monorepo
orchestration.

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
import { config } from '@tamagui/config/v4';
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

## Simple Todo Application

The U3 Stack implements a clean, simple TODO application with the following features:

### 🎯 Use Cases
- **Personal Task Management**: Individual todo lists and task tracking
- **Cross-Platform Sync**: Access your todos from web and mobile
- **Organized Lists**: Separate lists for different contexts (Personal, Work, Shopping, etc.)
- **Clean UI**: Simple, focused interface for productivity

### ⚡ Core Features
- Todo creation, editing, and completion
- Multiple todo lists with custom names
- Priority indicators for tasks
- Responsive design across web and mobile
- User authentication and data persistence

## Core UI Requirements (MVP)

The U3 Stack includes a simple TODO application MVP with the following core features:

### 🔐 1. Authentication (Clerk)
- Sign In / Sign Up screen using Clerk
- Authenticated Layout that wraps the app once user is logged in
- [Optional] Profile section with Sign Out button in sidebar

### 📋 2. Todo Lists Sidebar
- App title or logo
- List of existing todo lists
- Show basic title (Personal, Work, Shopping, or editable)
- Highlight the selected/active list
- Create new list button
- Immediately adds a list and navigates to it
- Scrollable if lists overflow
- Compact layout for mobile
- Show task count per list

### ✅ 3. Todo Panel
**Header**
- List title with optional edit functionality
- Task count or completion percentage

**Tasks Area**
- Scrollable task list
- Task items with:
  - Checkbox for completion status
  - Task text with strikethrough when completed
  - Priority indicators (high/medium/low with colors)
  - Due date display (if set)
- Task reordering capabilities
- Bulk actions (mark all complete, delete completed)

**Input Box**
- Task input field
- "Add Task" button (or Enter to add)
- Priority selector
- Due date picker
- Loading spinner during task operations

### 🌓 4. Theme / Responsiveness
- Responsive layout (Tamagui handles this)
- Dark/light theme support (Tamagui Theme)
- Keyboard-safe input on mobile (Tamagui KeyboardAvoidingView if needed)

### 🧪 Testing & Error Handling (MVP-level polish)
- Error toast if list creation or task operations fail
- Loading indicators:
  - When adding/editing tasks
  - When lists/tasks are being fetched
- Empty state:
  - No lists → "Create your first todo list"
  - No tasks in list → "Add your first task"
  - All tasks completed → "All tasks completed! 🎉"
- Disabled UI state during operations

### 🧠 Optional (but low-effort additions)
These are easy to add with Tamagui and improve UX significantly:
- Rename list title
- Delete list (via long-press or context menu)
- Task categories/tags
- Task notes/description
- User avatar in sidebar footer (with Clerk profile)
- Mobile bottom tab layout (lists/tasks/profile)
- Search/filter tasks
- Toast system for errors and actions

### ✅ Summary of Screens / UI Views
| Screen / View | Platform | Description |
|---------------|----------|-------------|
| Clerk Auth | Web + Mobile | Sign in / Sign up |
| Main App Layout | Web + Mobile | Two-pane (sidebar + tasks) |
| Sidebar Lists | Web + Mobile | List + Add |
| Todo View | Web + Mobile | Tasks + Input |
| Empty / Loading States | Web + Mobile | Fallbacks |
| Optional Profile | Web + Mobile | Avatar + Sign out |

## Implementation Details

### 🔄 Data Flow
1. **User Action**: User adds a todo via form submission in `/packages/features/todo/ui/`
2. **Feature Service**: `/packages/features/todo/service.ts` handles business logic and validation
3. **API Layer**: `/packages/api/routers/todo.ts` processes the tRPC request
4. **Database**: Todo saved to Neon PostgreSQL via `/packages/db` Drizzle ORM
5. **UI Update**: React Query automatically updates the UI with the new data across all components

### 📱 Cross-Platform Sync
- **Web**: Standard HTTP requests via tRPC
- **Mobile**: Same tRPC client with automatic data synchronization
- **Offline**: React Query handles caching and background refetching

## Clean Architecture Overview

The project follows Clean Architecture with feature-based vertical slicing for maximum modularity:

### 🏗️ Architectural Layers

- **Presentation Layer**: `/apps/web` and `/apps/mobile` consume shared UI components from `/packages/ui`
- **Application Layer**: `/packages/features/*` contain business logic, validation (Zod), and feature-specific services
- **Interface Layer**: `/packages/api` exposes tRPC routers and handles HTTP/API concerns
- **Domain Layer**: `/packages/types` and `/packages/utils` provide shared contracts and pure functions
- **Infrastructure Layer**: `/packages/db` handles data persistence, external service integrations

### 🎯 Feature-Based Organization

Each feature in `/packages/features/*` follows a consistent structure:

```
/packages/features/todo/
  index.ts       → Public API exports
  service.ts     → Business logic and data operations
  schema.ts      → Zod validation schemas
  types.ts       → Feature-specific TypeScript types
  ui/            → Feature-specific UI components
    TaskCard.tsx
    PriorityPill.tsx
```

### 🔄 Benefits

- **Vertical Slicing**: Features are self-contained with their own logic, schemas, and UI
- **Clear Boundaries**: Each package has a single responsibility and well-defined interfaces
- **Easy Testing**: Features can be tested in isolation with their own mocks and fixtures
- **Team Scalability**: Different teams can work on different features without conflicts
- **Discoverability**: Related code is colocated, making it easier to find and modify

## Folder Structure

```
/apps
  /web         → Next.js + React + Tamagui + Expo Router for browser
  /mobile      → Expo + React Native + Tamagui + Expo Router for iOS/Android

/packages
  /api         → tRPC routers + middleware (interface layer)
    /routers   → Feature-based tRPC routers
    /middleware → Auth, logging, validation middleware
  /features    → Feature-based packages with vertical slicing
    /todo      → Todo logic, schemas, UI components
    /auth      → Clerk auth wrappers, guards, components
    /user      → Profile, preferences, user management
  /ui          → Design system and universal components
    /core      → Atoms (Text, Button, Input, etc.)
    /layout    → Layout primitives (Stack, Spacer, Container)
    /auth      → Auth-specific UI (SignInButton, UserAvatar)
    /todo      → Todo-specific UI (TaskCard, PriorityPill)
  /hooks       → Reusable React hooks (useDebounce, useLocalStorage)
  /utils       → Pure functions and helpers (date, formatting, validation)
  /db          → Drizzle schema + Neon client + DB utilities
  /config      → Configuration management
    /env.ts    → Type-safe environment variables
    /biome.ts  → Linting and formatting config
    /tamagui.config.ts → Styling configuration
  /types       → Global TypeScript types and interfaces
  /test        → Cross-platform testing infrastructure
    /e2e       → Maestro YAML-based tests
    /unit      → Vitest/Jest unit tests
    /mocks     → Test fixtures and mocks
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

Validate workspace configuration:

```bash
pnpm run validate:workspace  # Check package dependencies
pnpm run validate:env        # Validate environment variables
```

Start local development:

```bash
turbo dev                    # all apps with intelligent caching
# or individually:
turbo dev --filter=web       # web only (includes API routes)
turbo dev --filter=mobile    # mobile only
cd apps/mobile && npx expo start  # mobile with Expo CLI
```

Run tests:

```bash
turbo test                   # run all unit tests
turbo test:e2e              # run Maestro cross-platform tests
```

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
// Feature-based imports
import { createTodo, updateTodo } from '@u3/features/todo';
import { signIn, signOut } from '@u3/features/auth';

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

## Web Deployment (Vercel)

The Next.js app includes both frontend and API routes, so only one deployment is needed.

1. Connect your GitHub repository to Vercel.
2. Set the root directory to `apps/web`.
3. Vercel will auto-detect Next.js and configure build settings.
4. Set environment variables in Vercel dashboard:
   - `CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `DATABASE_URL`
   - `SENTRY_DSN`
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

### 🎨 UI & Styling
✅ **Universal Styling**: Tamagui with @tamagui/config provides complete styling solution with pre-built themes  
✅ **Design System**: Atomic UI components organized by concern (core, layout, feature-specific)  
✅ **Universal Routing**: Expo Router provides consistent navigation patterns between web and mobile  

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
