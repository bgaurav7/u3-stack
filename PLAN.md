# U3-Stack Development Plan

## Phase 0: Monorepo Bootstrap

**Goal**: Set up foundational tooling and monorepo structure.

### Tasks:

- [x] Initialize monorepo using Turborepo.
- [x] Set up folder structure: `/apps`, `/packages`, `/env`.
- [x] Install shared tools: Biome (linting + formatting), tsconfig, dotenv-flow, env-var, husky, lint-staged.
- [x] Configure `turbo.json` for build pipeline orchestration.
- [x] Setup unified environment management:
  - [x] Create `/env` folder with layered .env files
  - [x] Create `packages/config/config.ts` for type-safe env access
  - [x] Configure dotenv-flow and env-var integration
- [x] Use latest stable versions of all libraries and dependencies for optimal performance and
      security.

### Test Process:

- [x] Run `pnpm install` across workspaces.
- [x] Validate all dependencies are using latest stable versions.
- [x] Validate Turborepo pipeline execution with `turbo build`.
- [x] Test Biome linting and formatting with `turbo lint` and `turbo format`.
- [x] Test environment management:
  - [x] Validate dotenv-flow loads layered .env files correctly
  - [x] Test env-var type-safe validation and defaults
  - [x] Verify config access across different environments
- [x] Add a dummy `hello.ts` in each app/package and import from others to validate TS paths.

### Exit Criteria:

- [x] All packages interlink correctly.
- [x] Biome linting and formatting work across the monorepo.
- [x] Turborepo caching and parallel execution configured.
- [x] Type-safe environment management system operational.

## Phase 1: UI Library + Multi-Platform Setup

### 1.1: Setup UI Library and Test with Web

**Goal**: Build a shared component library using Tamagui. Validate on web first.

#### Tasks:

- [x] Create `packages/ui`
- [x] Install and configure:
  - [x] tamagui (with @tamagui/config for default themes)
- [ ] Use `@tamagui/config/v4` as base configuration
- [x] Create base components: Button, Text, Card, Input

#### Test Process:

- [x] Create `apps/web` with Next.js + React + Tamagui + Expo Router
- [x] Render test components from `@u3/ui`
- [ ] Unit tests using vitest + @testing-library/react
- [ ] Snapshot tests

#### Exit Criteria:

- [ ] Components render correctly on browser
- [ ] @tamagui/config themes work correctly across platforms
- [ ] `@u3/ui` can be published and consumed

### 1.2: Setup for Android

**Goal**: Get mobile app working with shared UI on Android (Expo).

#### Tasks:

- [x] Create `apps/mobile` with expo
- [x] Configure expo-router in `apps/mobile`
- [x] Add a default `_layout.tsx` for navigation wrapper
- [x] Link `@u3/ui` as local workspace dependency
- [x] Configure Metro bundler:
  - [x] Enable symlinks
  - [x] Add aliases for react-native-web, tamagui
  - [x] Sync Metro bundler and Webpack/Tamagui settings for route resolution
- [ ] Configure native Android settings for fonts (if custom)
- [x] Note: expo-router does not need react-navigation setup—avoid conflicts

#### Test Process:

- [ ] Run `expo start --android`
- [ ] Ensure hot reload works
- [ ] Validate UI components render on emulator or device
- [ ] Check layout responsiveness and touch support

#### Exit Criteria:

- [ ] Android app boots and renders shared UI
- [ ] No Metro bundler errors
- [ ] Tamagui themes/styles apply correctly

### 1.3: Setup for iOS

**Goal**: Validate shared UI works on iOS as well.

#### Tasks:

- [x] Install Xcode (if not already)
- [x] Configure expo-router in `apps/mobile` (if not done in 1.2)
- [x] Add a default `_layout.tsx` for navigation wrapper (if not done in 1.2)
- [ ] Run `expo start --ios`
- [ ] Ensure font and safe-area support
- [ ] Setup native splash screen and icon if needed
- [x] Sync Metro bundler and Webpack/Tamagui settings for route resolution

#### Test Process:

- [ ] Render components on iOS Simulator
- [ ] Validate gesture and navigation behavior
- [ ] Validate font scaling, safe area, dark mode

#### Exit Criteria:

- [ ] iOS UI works and matches Android/Web
- [ ] No crash or layout shifts on iOS

## Phase 2: Backend API (Fastify + tRPC)

**Goal**: Build scalable, type-safe backend.

### Tasks:

- [ ] Scaffold `apps/backend` with Fastify + tRPC + WebSocket support.
- [ ] Install and configure `@fastify/websocket` for real-time updates.
- [ ] Create feature-based folder structure: `src/features/health/` and `src/features/todos/`.
- [ ] Define first router in `src/features/health/router.ts`: `ping -> { ok: true }`.
- [ ] Define todos router in `src/features/todos/router.ts`: basic CRUD operations.
- [ ] Add WebSocket handlers for real-time todo broadcasts.
- [ ] Add Zod-based validation and error handling.
- [ ] Create `createAppRouter()` to combine feature routers.

### Test Process:

- [ ] `curl /ping` returns expected JSON.
- [ ] Add vitest tests for routes.
- [ ] Add integration tests for route + validation.

### Exit Criteria:

- [ ] Backend server runs locally and exposes typed tRPC APIs.

## Phase 3: Database Integration (Drizzle + Neon)

**Goal**: Integrate PostgreSQL using Drizzle ORM (hosted on Neon).

### Tasks:

- [ ] Add `packages/db` for schema and Drizzle client.
- [ ] Define schemas: User, TodoList, and Todo tables using Drizzle schema.
- [ ] Setup Drizzle migrations and generate types.
- [ ] Create `src/features/user/` and `src/features/todos/` folders in backend.
- [ ] Wire backend to DB with feature-based service layer using Drizzle queries.

### Test Process:

- [ ] Seed DB and query User via route.
- [ ] Write test to create and fetch User using Drizzle queries.
- [ ] DB schema validated by `drizzle-kit check`.

### Exit Criteria:

- [ ] Connected backend to Neon DB via Drizzle.
- [ ] Type-safe schema and query functions generated.

## Phase 4: Auth Integration (Clerk)

**Goal**: Add user authentication to Web and Mobile via Clerk.

### Tasks:

- [ ] Set up Clerk project and keys.
- [ ] Setup Clerk Expo proxy (for dev keys on mobile).
- [ ] Add Clerk React providers to Web + Mobile.
- [ ] Add Clerk middleware to Next.js and Fastify.
- [ ] Protect backend procedures with auth middleware (via tRPC context).

### Test Process:

- [ ] Register/login from Web and Mobile.
- [ ] Use Clerk JWT in tRPC calls, verify user identity.
- [ ] Test JWT rejection on backend.

### Exit Criteria:

- [ ] Authenticated access to protected routes.

## Phase 5: Feature-Based API Architecture

**Goal**: Organize tRPC routers by feature domain for better scalability and team ownership.

### Tasks:

- [ ] Create feature-based folder structure in `apps/backend/src/features/`.
- [ ] Colocate tRPC routers with Zod schemas per feature (e.g., `user/router.ts`,
      `user/schemas.ts`).
- [ ] Create central `createAppRouter()` that imports all feature routers.
- [ ] Setup React Query (TanStack Query) integration with tRPC.
- [ ] Use `tsd` for type-level tests of Zod schemas and procedure outputs.

### Test Process:

- [ ] Validate end-to-end type safety (router to UI).
- [ ] Test React Query caching and invalidation with tRPC.
- [ ] Add tsd tests for contract enforcement per feature.
- [ ] Add runtime Zod validation unit tests per feature.

### Exit Criteria:

- [ ] Clean feature separation by domain.
- [ ] All requests are type-checked.
- [ ] Easy navigation and code ownership per feature.

## Phase 6: Web App Development

**Goal**: Build full Web UI with end-to-end flows.

### Tasks:

- [ ] Setup Next.js + React + Expo Router in `apps/web` for universal routing.
- [ ] Create shared `app/` folder in `apps/web` for routes.
- [ ] Use `@expo/next-adapter` if needed (optional).
- [ ] Setup React Query provider and tRPC integration as primary state manager.
- [ ] Add WebSocket client for real-time todo updates.
- [ ] Implement real-time todo synchronization across browser tabs/windows.
- [ ] Use useState for simple client-only state (UI toggles, form state).
- [ ] Use Tamagui components.
- [ ] Add Clerk auth, fetch user profile, display dashboard.
- [ ] Ensure Vercel SSR works correctly (or use static generation fallback).

### Test Process:

- [ ] Test React Query data fetching, caching, and background refetch.
- [ ] Test React Query DevTools integration.
- [ ] Verify no global state libraries (Zustand, Redux, etc.) are used.
- [ ] Cypress tests for UI flows.
- [ ] API mocks for component-level tests.
- [ ] Lighthouse for performance.

### Exit Criteria:

- [ ] Full working web client.
- [ ] Fully responsive.

## Phase 7: Mobile App Development

**Goal**: Build full Mobile App with shared UI logic.

### Tasks:

- [ ] Setup Expo + Expo Router in `apps/mobile`.
- [ ] Configure universal navigation (stack/tabs) with Expo Router.
- [ ] Setup React Query provider and tRPC integration as primary state manager.
- [ ] Use useState for simple client-only state (UI toggles, form state).
- [ ] Use shared Tamagui UI and tRPC clients.

### Test Process:

- [ ] Test React Query data fetching, caching, and offline behavior.
- [ ] Test React Query DevTools integration on mobile.
- [ ] Verify no global state libraries (Zustand, Redux, etc.) are used.
- [ ] Run iOS + Android in simulators.
- [ ] Detox or Expo E2E tests.
- [ ] OTA test with `expo publish`.

### Exit Criteria:

- [ ] Cross-platform build works via OTA.

## Phase 8: Core UI Implementation (MVP)

**Goal**: Build the complete real-time collaborative TODO application MVP with authentication, list management, task operations, and live updates across all connected clients.

### Tasks:

#### 8.1: Authentication UI (Clerk)
- [ ] Implement Sign In / Sign Up screens using Clerk components
- [ ] Create authenticated layout wrapper
- [ ] Add optional profile section with sign out functionality
- [ ] Test authentication flow on both web and mobile

#### 8.2: Todo Lists Sidebar
- [ ] Create lists sidebar component with app title/logo
- [ ] Implement todo lists with basic titles (Personal, Work, Shopping, etc.)
- [ ] Add active list highlighting
- [ ] Create "new list" button with immediate navigation
- [ ] Make sidebar scrollable for list overflow
- [ ] Optimize layout for mobile (compact design)

#### 8.3: Todo Panel with Real-Time Updates
- [ ] Build todo header with list title and optional edit functionality
- [ ] Create scrollable todos area with todo items:
  - [ ] Completed todos (strikethrough, gray)
  - [ ] Pending todos (normal styling)
  - [ ] Priority indicators (high/medium/low)
  - [ ] Real-time visual indicators for new/updated todos
- [ ] Implement todo item interactions (check/uncheck, edit, delete)
- [ ] Create todo input field with add button
- [ ] Add loading states and disable input during operations
- [ ] Implement WebSocket client connection for real-time updates
- [ ] Handle real-time todo broadcasts from other users
- [ ] Show live user activity indicators (who's online, typing, etc.)

#### 8.4: Theme & Responsiveness
- [ ] Implement responsive layout using Tamagui
- [ ] Add dark/light theme support with Tamagui Theme
- [ ] Configure keyboard-safe input for mobile
- [ ] Test across different screen sizes and orientations

#### 8.5: Error Handling & Polish
- [ ] Add error toasts for failed operations
- [ ] Implement loading indicators for all async operations
- [ ] Create empty states:
  - [ ] "Create your first todo list" (no lists)
  - [ ] "Add your first todo" (no todos)
- [ ] Add disabled UI states during operations

#### 8.6: Real-Time Collaboration Features
- [ ] Show online users list with avatars
- [ ] Display who created/modified each todo (user attribution)
- [ ] Real-time typing indicators when users are adding todos
- [ ] Conflict resolution for simultaneous edits
- [ ] User presence indicators (online/offline status)
- [ ] Real-time notifications for todo assignments
- [ ] Live cursor positions for collaborative editing

#### 8.7: Optional Enhancements
- [ ] List title rename functionality
- [ ] List deletion (long-press/context menu)
- [ ] Todo due dates and reminders
- [ ] Todo categories/tags
- [ ] User avatar in sidebar footer
- [ ] Mobile bottom tab layout
- [ ] Drag and drop reordering
- [ ] Toast system for actions and errors

### Test Process:

- [ ] Test authentication flow on web and mobile
- [ ] Validate list creation and navigation
- [ ] Test todo creation, editing, and deletion
- [ ] Test todo completion/incompletion
- [ ] Verify responsive design across devices
- [ ] Test dark/light theme switching
- [ ] Validate error handling and loading states
- [ ] Test empty states and edge cases
- [ ] Verify keyboard behavior on mobile

### Exit Criteria:

- [ ] Complete TODO application MVP functional on web and mobile
- [ ] All core features working: auth, lists, todo operations
- [ ] Responsive design with proper theme support
- [ ] Error handling and loading states implemented
- [ ] Smooth user experience across platforms

## Phase 9: Unified UI Testing with Maestro

**Goal**: Implement a cross-platform UI testing framework using Maestro to automate end-to-end tests
for Web, iOS, and Android with a single test suite.

### Tasks:

- [ ] Integrate Maestro as the primary UI testing framework for web and mobile.
- [ ] Define reusable Maestro test scenarios in YAML to cover core user flows.
- [ ] Configure test environments for:
  - [ ] Web browsers (Chrome, Firefox, Safari)
  - [ ] iOS simulators and devices
  - [ ] Android emulators and devices
- [ ] Set up CI pipeline steps to run Maestro tests on all platforms automatically.
- [ ] Collect and analyze Maestro test reports for debugging and quality assurance.
- [ ] Document best practices for writing and maintaining Maestro tests.

### Test Process:

- [ ] Run Maestro tests on web during PR validation.
- [ ] Run Maestro tests on iOS and Android simulators in CI.
- [ ] Validate consistency of UI behavior and user flows across platforms.
- [ ] Track and fix UI regressions detected by Maestro.

### Exit Criteria:

- [ ] Unified Maestro test suite covering major user journeys.
- [ ] Automated test runs on every code change across web and mobile.
- [ ] Reliable UI regression detection and reporting.

## Phase 10: CI/CD + DevOps

**Goal**: Automate builds, tests, and deployments.

### Tasks:

- [ ] GitHub Actions workflows:
  - [ ] Biome lint + format check
  - [ ] TypeScript typecheck with Turborepo caching
  - [ ] Test suites (unit, integration, Maestro E2E) with parallel execution
  - [ ] Deploy Web -> Vercel
  - [ ] Deploy Backend -> Fly.io
  - [ ] EAS Submit for Mobile OTA

### Test Process:

- [ ] PR test passes on all workflows including Maestro E2E tests.
- [ ] On push to main: deploys happen correctly.
- [ ] OTA updates reach test devices.
- [ ] Maestro tests run automatically on deployment environments.

### Exit Criteria:

- [ ] Fully automated CI/CD.
- [ ] Fast feedback on all code changes.

## Phase 11: Observability + Analytics

**Goal**: Add Sentry and PostHog for tracking and debugging.

### Tasks:

- [ ] Setup Sentry SDK in Backend, Web, Mobile.
- [ ] Setup PostHog event tracking.

### Test Process:

- [ ] Trigger a manual error -> check Sentry log.
- [ ] Trigger user interaction -> check PostHog event.

### Exit Criteria:

- [ ] Error tracking and analytics live across all surfaces.

## Phase 12: Production Readiness

**Goal**: Final hardening for launch.

### Tasks:

- [ ] Add rate limiting, request logging.
- [ ] Lock Drizzle migrations for production.
- [ ] Verify all env vars are set via CI/CD secrets.

### Test Process:

- [ ] Load testing backend via k6 or similar.
- [ ] Run `turbo build` from clean to test full pipeline.
- [ ] Final E2E test on production infra.

### Exit Criteria:

- [ ] Ready for real users across platforms.
