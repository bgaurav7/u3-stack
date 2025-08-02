# U3-Stack Development Plan

## Phase 0: Monorepo Bootstrap

**Goal**: Set up foundational tooling and enhanced modular monorepo structure.

### Tasks:

- [x] Initialize monorepo using Turborepo.
- [x] Set up folder structure: `/apps`, `/packages`, `/env`.
- [ ] **NEW**: Restructure packages for feature-based architecture:
  - [ ] Create `/packages/api` for tRPC routers and middleware
  - [ ] Create `/packages/features` for feature-based vertical slicing
  - [ ] Reorganize `/packages/ui` into subdirectories (core, layout, auth, todo)
  - [ ] Create `/packages/hooks` for reusable React hooks
  - [ ] Create `/packages/utils` for pure functions and helpers
  - [ ] Create `/packages/test` for cross-platform testing infrastructure
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
- [ ] **NEW**: Test feature-based package imports:
  - [ ] Validate `@u3/features/todo` exports work correctly
  - [ ] Test `@u3/ui/core` and `@u3/ui/layout` imports
  - [ ] Verify `@u3/hooks` and `@u3/utils` package resolution

### Exit Criteria:

- [x] All packages interlink correctly.
- [x] Biome linting and formatting work across the monorepo.
- [x] Turborepo caching and parallel execution configured.
- [x] Type-safe environment management system operational.
- [ ] **NEW**: Feature-based package structure operational with proper imports.

## Phase 1: UI Library + Multi-Platform Setup

### 1.1: Setup UI Library and Test with Web

**Goal**: Build a shared component library using Tamagui. Validate on web first.

#### Tasks:

- [x] Create `packages/ui`
- [ ] **NEW**: Restructure UI package into organized subdirectories:
  - [ ] Create `packages/ui/core` for atomic components (Button, Text, Input, Card)
  - [ ] Create `packages/ui/layout` for layout primitives (Stack, Spacer, Container)
  - [ ] Create `packages/ui/auth` for auth-specific components (SignInButton, UserAvatar)
  - [ ] Create `packages/ui/todo` for todo-specific components (TaskCard, PriorityPill)
  - [ ] Create barrel exports in `packages/ui/index.ts`
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

## Phase 2: Backend API (Isolated API Package + tRPC)

**Goal**: Build scalable, type-safe backend using isolated API package with tRPC.

### Tasks:

- [ ] **NEW**: Create `packages/api` as dedicated interface layer:
  - [ ] Setup tRPC server configuration in `packages/api/server.ts`
  - [ ] Create `packages/api/routers/` for feature-based tRPC routers
  - [ ] Create `packages/api/middleware/` for auth, logging, validation middleware
  - [ ] Create barrel exports in `packages/api/index.ts`
- [ ] **NEW**: Create feature packages in `packages/features/`:
  - [ ] Create `packages/features/todo/` with service.ts, schema.ts, types.ts
  - [ ] Create `packages/features/auth/` for authentication logic
  - [ ] Create `packages/features/user/` for user management
- [ ] Define first router in `packages/api/routers/health.ts`: `ping -> { ok: true }`.
- [ ] Define todos router in `packages/api/routers/todo.ts`: basic CRUD operations.
- [ ] Add Zod-based validation and error handling in feature schemas.
- [ ] Create `createAppRouter()` in `packages/api/server.ts` to combine feature routers.
- [ ] Setup tRPC API handler at `apps/web/src/pages/api/trpc/[trpc].ts` that imports from `@u3/backend`.

### Test Process:

- [x] `curl /api/health.ping` returns expected JSON.
- [ ] Add vitest tests for tRPC procedures in `packages/api/`.
- [ ] Add unit tests for feature services in `packages/features/*/`.
- [ ] Add integration tests for API routes + validation.
- [ ] Test feature package imports: `@u3/features/todo`, `@u3/backend`.

### Exit Criteria:

- [ ] Next.js app serves tRPC APIs via isolated `@u3/backend` package.
- [ ] Feature-based business logic properly separated in `@u3/features/*`.
- [ ] Clean separation between interface layer (API) and application layer (features).

## Phase 3: Database Integration (Drizzle + Neon)

**Goal**: Integrate PostgreSQL using Drizzle ORM (hosted on Neon).

### Tasks:

- [ ] Add `packages/db` for schema and Drizzle client.
- [ ] Define schemas: User, TodoList, and Todo tables using Drizzle schema.
- [ ] Setup Drizzle migrations and generate types.
- [ ] **NEW**: Wire database to feature services:
  - [ ] Connect `packages/features/todo/service.ts` to DB via Drizzle queries
  - [ ] Connect `packages/features/user/service.ts` to DB for user operations
  - [ ] Connect `packages/features/auth/service.ts` to DB for auth-related data
- [ ] Create database connection utilities in `packages/db/client.ts`.
- [ ] **NEW**: Create `packages/utils` for shared database utilities and helpers.

### Test Process:

- [ ] Seed DB and query User via tRPC procedure.
- [ ] Write test to create and fetch User using Drizzle queries.
- [ ] DB schema validated by `drizzle-kit check`.

### Exit Criteria:

- [ ] Connected Next.js backend to Neon DB via Drizzle.
- [ ] Type-safe schema and query functions generated.

## Phase 4: Auth Integration (Clerk)

**Goal**: Add user authentication to Web and Mobile via Clerk.

### Tasks:

- [ ] Set up Clerk project and keys.
- [ ] Setup Clerk Expo proxy (for dev keys on mobile).
- [ ] Add Clerk React providers to Web + Mobile.
- [ ] Add Clerk middleware to Next.js.
- [ ] Protect tRPC procedures with auth middleware (via tRPC context).
- [ ] Setup Clerk webhook handling for user management.

### Test Process:

- [ ] Register/login from Web and Mobile.
- [ ] Use Clerk JWT in tRPC calls, verify user identity.
- [ ] Test JWT rejection on protected procedures.

### Exit Criteria:

- [ ] Authenticated access to protected tRPC procedures.

## Phase 5: Enhanced Feature-Based Architecture

**Goal**: Complete the feature-based vertical slicing with proper separation of concerns.

### Tasks:

- [ ] **UPDATED**: Feature packages are already created in Phase 2, now enhance them:
  - [ ] Complete `packages/features/todo/` with full service layer, schemas, and types
  - [ ] Complete `packages/features/auth/` with Clerk integration and auth guards
  - [ ] Complete `packages/features/user/` with profile management
- [ ] **NEW**: Create shared packages:
  - [ ] Create `packages/hooks/` with reusable React hooks (useDebounce, useLocalStorage)
  - [ ] Create `packages/utils/` with pure functions (date formatting, validation helpers)
- [ ] **UPDATED**: API routers in `packages/api/routers/` consume feature services
- [ ] Setup React Query (TanStack Query) integration with tRPC.
- [ ] Use `tsd` for type-level tests of Zod schemas and procedure outputs.

### Test Process:

- [ ] Validate end-to-end type safety (router to UI).
- [ ] Test React Query caching and invalidation with tRPC.
- [ ] Add tsd tests for contract enforcement per feature.
- [ ] Add runtime Zod validation unit tests per feature.
- [ ] **NEW**: Test feature package isolation and imports:
  - [ ] Test `@u3/features/todo` can be imported and used independently
  - [ ] Test `@u3/hooks` and `@u3/utils` work across different apps
  - [ ] Validate barrel exports work correctly

### Exit Criteria:

- [ ] Clean feature separation by domain with vertical slicing.
- [ ] All requests are type-checked end-to-end.
- [ ] Easy navigation and code ownership per feature.
- [ ] **NEW**: Shared utilities and hooks properly organized and reusable.

## Phase 6: Web App Development

**Goal**: Build full Web UI with end-to-end flows.

### Tasks:

- [ ] Setup Next.js + React + Expo Router in `apps/web` for universal routing.
- [ ] Create shared `app/` folder in `apps/web` for routes.
- [ ] Use `@expo/next-adapter` if needed (optional).
- [ ] Setup React Query provider and tRPC integration as primary state manager.
- [ ] Use useState for simple client-only state (UI toggles, form state).
- [ ] **NEW**: Use organized UI components from feature-based structure:
  - [ ] Import core components from `@u3/ui/core`
  - [ ] Import layout components from `@u3/ui/layout`
  - [ ] Import auth components from `@u3/ui/auth`
- [ ] **NEW**: Use feature-based business logic:
  - [ ] Import auth logic from `@u3/features/auth`
  - [ ] Import user logic from `@u3/features/user`
- [ ] **NEW**: Use shared utilities:
  - [ ] Import hooks from `@u3/hooks`
  - [ ] Import utilities from `@u3/utils`
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
- [ ] **NEW**: Use organized UI components and features:
  - [ ] Import UI components from `@u3/ui/core`, `@u3/ui/layout`, `@u3/ui/auth`
  - [ ] Import business logic from `@u3/features/todo`, `@u3/features/auth`
  - [ ] Import shared hooks from `@u3/hooks` and utilities from `@u3/utils`
- [ ] Use shared Tamagui UI and tRPC clients from `@u3/backend`.

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

**Goal**: Build a simple TODO application MVP with authentication, list management, and basic task operations.

### Tasks:

#### 8.1: Authentication UI (Clerk)
- [ ] Implement Sign In / Sign Up pages using Clerk components
- [ ] Create authenticated layout wrapper
- [ ] Add optional profile section with sign out functionality
- [ ] Test authentication flow on both web and mobile

#### 8.2: Todo Lists Sidebar
- [ ] **NEW**: Create sidebar components in `packages/ui/todo/`:
  - [ ] Create `TodoListsSidebar` component
  - [ ] Create `TodoListItem` component
  - [ ] Create `CreateListButton` component
- [ ] Implement todo lists with basic titles (Personal, Work, Shopping, etc.)
- [ ] Add active list highlighting
- [ ] Create "new list" button with immediate navigation
- [ ] Make sidebar scrollable for list overflow
- [ ] Optimize layout for mobile (compact design)
- [ ] **NEW**: Use business logic from `packages/features/todo/service.ts`

#### 8.3: Todo Panel
- [ ] **NEW**: Create todo components in `packages/ui/todo/`:
  - [ ] Create `TodoPanel` component
  - [ ] Create `TodoHeader` component
  - [ ] Create `TaskCard` component
  - [ ] Create `PriorityPill` component
  - [ ] Create `TodoInput` component
- [ ] Build todo header with list title and optional edit functionality
- [ ] Create scrollable todos area with todo items:
  - [ ] Completed todos (strikethrough, gray)
  - [ ] Pending todos (normal styling)
  - [ ] Priority indicators (high/medium/low)
- [ ] Implement todo item interactions (check/uncheck, edit, delete)
- [ ] Create todo input field with add button
- [ ] Add loading states and disable input during operations
- [ ] **NEW**: Use business logic from `packages/features/todo/service.ts`

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

#### 8.6: Optional Enhancements
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

**Goal**: Implement a cross-platform UI testing framework using Maestro with organized test infrastructure.

### Tasks:

- [ ] **NEW**: Setup `packages/test` infrastructure:
  - [ ] Create `packages/test/e2e/maestro/` for YAML-based Maestro tests
  - [ ] Create `packages/test/unit/` for Vitest/Jest unit tests
  - [ ] Create `packages/test/mocks/` for test fixtures and mocks
  - [ ] Create `packages/test/setup.ts` for test configuration
- [ ] Integrate Maestro as the primary UI testing framework for web and mobile.
- [ ] Define reusable Maestro test scenarios in YAML to cover core user flows.
- [ ] Configure test environments for:
  - [ ] Web browsers (Chrome, Firefox, Safari)
  - [ ] iOS simulators and devices
  - [ ] Android emulators and devices
- [ ] **NEW**: Create feature-specific test suites:
  - [ ] Todo feature tests in `packages/test/e2e/maestro/todo/`
  - [ ] Auth feature tests in `packages/test/e2e/maestro/auth/`
- [ ] Set up CI pipeline steps to run Maestro tests on all platforms automatically.
- [ ] Collect and analyze Maestro test reports for debugging and quality assurance.
- [ ] Document best practices for writing and maintaining Maestro tests.

### Test Process:

- [ ] Run Maestro tests on web during PR validation.
- [ ] Run Maestro tests on iOS and Android simulators in CI.
- [ ] Validate consistency of UI behavior and user flows across platforms.
- [ ] Track and fix UI regressions detected by Maestro.
- [ ] **NEW**: Test feature isolation:
  - [ ] Run unit tests for individual feature packages
  - [ ] Test UI component isolation in `packages/ui/*/`
  - [ ] Validate shared utilities in `packages/hooks` and `packages/utils`

### Exit Criteria:

- [ ] Unified Maestro test suite covering major user journeys.
- [ ] Automated test runs on every code change across web and mobile.
- [ ] Reliable UI regression detection and reporting.
- [ ] **NEW**: Comprehensive test coverage for feature-based architecture.

## Phase 10: CI/CD + DevOps

**Goal**: Automate builds, tests, and deployments.

### Tasks:

- [ ] GitHub Actions workflows:
  - [ ] Biome lint + format check
  - [ ] TypeScript typecheck with Turborepo caching
  - [ ] Test suites (unit, integration, Maestro E2E) with parallel execution
  - [ ] Deploy Web (with API routes) -> Vercel
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

- [ ] Setup Sentry SDK in Web (including API routes), Mobile.
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
