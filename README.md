# U3-Stack

## Universal Stack

A modern, type-safe, scalable monorepo stack to build Android, iOS, and Web real-time collaborative TODO applications with a shared codebase.

## Overview

The U3 Stack is designed to maximize code reuse and maintainability across Web (Next.js + React),
Mobile (React Native via Expo + Expo Router), and Backend (Fastify + tRPC). It promotes a modular
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

## Real-Time Collaborative Features

The U3 Stack implements a real-time collaborative TODO application with WebSocket-powered live updates:

### 🔄 Real-Time Architecture
- **Backend**: Fastify server with `@fastify/websocket` for real-time broadcasts
- **Frontend**: WebSocket client connections for instant updates
- **Flow**: User A adds todo → Next.js API → Fastify WebSocket → All connected clients see update instantly

### 🎯 Use Cases
- **Team Project Management**: Shared boards like Trello/Linear with live updates
- **Family/Roommate Apps**: Live shopping lists and household task coordination  
- **Classroom Tools**: Students submit tasks, teachers see updates in real-time
- **Multiplayer Productivity**: Shared workspace with live collaboration

### ⚡ Real-Time Features
- Instant todo creation/completion across all clients
- Live user presence indicators (who's online)
- Real-time typing indicators
- Conflict resolution for simultaneous edits
- Cross-browser tab synchronization
- Mobile-to-web real-time sync

## Core UI Requirements (MVP)

The U3 Stack includes a comprehensive real-time collaborative TODO application MVP with the following core features:

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

### ✅ 3. Real-Time Todo Panel
**Header**
- List title with live edit indicators
- Online users count and avatars
- Task count or completion percentage (live updates)

**Tasks Area**
- Scrollable task list with real-time updates
- Task items with:
  - Checkbox for completion status (syncs instantly)
  - Task text with strikethrough when completed
  - Priority indicators (high/medium/low with colors)
  - Due date display (if set)
  - User attribution (who created/modified)
  - Live update animations for new/changed tasks
- Task reordering capabilities (syncs across clients)
- Bulk actions (mark all complete, delete completed)

**Input Box**
- Task input field with typing indicators
- "Add Task" button (or Enter to add)
- Priority selector
- Due date picker
- Loading spinner during task operations
- Real-time conflict resolution for simultaneous adds

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

## Real-Time Implementation Details

### 🔄 Data Flow
1. **User Action**: User A adds a todo via form submission
2. **API Route**: Next.js `/api/todos` processes the request
3. **Database**: Todo saved to Neon PostgreSQL via Drizzle ORM
4. **WebSocket Broadcast**: Fastify server broadcasts to all connected clients
5. **Real-Time Update**: All users see the new todo instantly via React Query invalidation

### 📱 Cross-Platform Sync
- **Web**: WebSocket connection with automatic reconnection
- **Mobile**: React Native WebSocket with background sync
- **Offline**: Queue actions and sync when connection restored

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
  /config      → Biome, tsconfig, type-safe env management
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
turbo dev                # all apps with intelligent caching
# or individually:
turbo dev --filter=web   # web only
turbo dev --filter=backend # backend only
cd apps/mobile
npx expo start           # mobile
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
import { config, validateConfig, isDevelopment } from '@u3/config/config';

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
✅ **Type-Safe Environment Management**: Unified, layered environment configuration with runtime validation.  
✅ **Unified Testing**: Maestro provides cross-platform UI testing with single test suite for web
and mobile.  
✅ **CI/CD**: GitHub Actions configured for linting, testing, deployment (Fly, Vercel, Expo).  
✅ **Observability**: Sentry for error tracking, PostHog for product analytics.  
✅ **High-Performance Builds**: Turborepo provides intelligent caching and parallel execution for
faster builds.  
✅ **Code Quality**: Biome provides fast, consistent linting and formatting across the entire
monorepo.  
✅ **Future-Proof**: Easily plug Temporal, Redis, or Vector DBs with adapters in /infra.
