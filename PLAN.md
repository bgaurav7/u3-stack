# U3-Stack Development Plan

## Phase 0: Monorepo Bootstrap

**Goal**: Set up foundational tooling and monorepo structure.

### Tasks:
- [ ] Initialize monorepo using pnpm workspaces.
- [ ] Set up folder structure: `/apps`, `/packages`.
- [ ] Install shared tools: eslint, prettier, tsconfig, dotenv, husky, lint-staged.

### Test Process:
- [ ] Run `pnpm install` across workspaces.
- [ ] Validate correct project references via `pnpm recursive exec`.
- [ ] Add a dummy `hello.ts` in each app/package and import from others to validate TS paths.

### Exit Criteria:
- [ ] All packages interlink correctly.
- [ ] Linting and formatting work across the monorepo.

## Phase 1: UI Library + Multi-Platform Setup

### 1.1: Setup UI Library and Test with Web
**Goal**: Build a shared component library using Tamagui and Tailwind. Validate on web first.

#### Tasks:
- [ ] Create `packages/ui`
- [ ] Install and configure:
  - [ ] tamagui
  - [ ] react-native-web
  - [ ] tailwindcss
- [ ] Design tokens and themes
- [ ] Create base components: Button, Text, Card, Input

#### Test Process:
- [ ] Create `apps/web` with Vite + React + Tamagui
- [ ] Render test components from `@u3/ui`
- [ ] Unit tests using vitest + @testing-library/react
- [ ] Snapshot tests

#### Exit Criteria:
- [ ] Components render correctly on browser
- [ ] CSS styling (via Tamagui + Tailwind) works
- [ ] `@u3/ui` can be published and consumed

### 1.2: Setup for Android
**Goal**: Get mobile app working with shared UI on Android (Expo).

#### Tasks:
- [ ] Create `apps/mobile` with expo
- [ ] Link `@u3/ui` as local workspace dependency
- [ ] Configure Metro bundler:
  - [ ] Enable symlinks
  - [ ] Add aliases for react-native-web, tamagui
- [ ] Configure native Android settings for fonts (if custom)

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
- [ ] Install Xcode (if not already)
- [ ] Run `expo start --ios`
- [ ] Ensure font and safe-area support
- [ ] Setup native splash screen and icon if needed

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
- [ ] Scaffold `apps/backend` with Fastify + tRPC.
- [ ] Define first router: `ping -> { ok: true }`.
- [ ] Add Zod-based validation and error handling.

### Test Process:
- [ ] `curl /ping` returns expected JSON.
- [ ] Add vitest tests for routes.
- [ ] Add integration tests for route + validation.

### Exit Criteria:
- [ ] Backend server runs locally and exposes typed tRPC APIs.

## Phase 3: Database Integration (Prisma + Neon)

**Goal**: Integrate PostgreSQL using Prisma (hosted on Neon).

### Tasks:
- [ ] Add `packages/db` for schema and Prisma client.
- [ ] Define first model: User.
- [ ] Generate and migrate DB.
- [ ] Wire backend to DB.

### Test Process:
- [ ] Seed DB and query User via route.
- [ ] Write test to create and fetch User.
- [ ] DB schema validated by `prisma validate`.

### Exit Criteria:
- [ ] Connected backend to Neon DB.
- [ ] Type-safe query functions generated.

## Phase 4: Auth Integration (Clerk)

**Goal**: Add user authentication to Web and Mobile via Clerk.

### Tasks:
- [ ] Set up Clerk project and keys.
- [ ] Add Clerk React providers to Web + Mobile.
- [ ] Add middleware in Fastify to validate Clerk JWT.

### Test Process:
- [ ] Register/login from Web and Mobile.
- [ ] Use Clerk JWT in tRPC calls, verify user identity.
- [ ] Test JWT rejection on backend.

### Exit Criteria:
- [ ] Authenticated access to protected routes.

## Phase 5: API Contracts & Shared Logic

**Goal**: Move all shared types, validators, and contracts into `packages/api`.

### Tasks:
- [ ] Add reusable Zod schemas.
- [ ] Export tRPC routers from `packages/api`.
- [ ] Use `createCaller` in frontend apps.

### Test Process:
- [ ] Validate end-to-end type safety (router to UI).
- [ ] Add tsd tests for contract enforcement.
- [ ] Add runtime Zod validation unit tests.

### Exit Criteria:
- [ ] No API duplication.
- [ ] All requests are type-checked.

## Phase 6: Web App Development

**Goal**: Build full Web UI with end-to-end flows.

### Tasks:
- [ ] Setup Vite + React in `apps/web`.
- [ ] Use Tamagui components.
- [ ] Add Clerk auth, fetch user profile, display dashboard.

### Test Process:
- [ ] Cypress tests for UI flows.
- [ ] API mocks for component-level tests.
- [ ] Lighthouse for performance.

### Exit Criteria:
- [ ] Full working web client.
- [ ] Fully responsive.

## Phase 7: Mobile App Development

**Goal**: Build full Mobile App with shared UI logic.

### Tasks:
- [ ] Setup Expo in `apps/mobile`.
- [ ] Add navigation (stack/tabs).
- [ ] Use shared Tamagui UI and tRPC clients.

### Test Process:
- [ ] Run iOS + Android in simulators.
- [ ] Detox or Expo E2E tests.
- [ ] OTA test with `expo publish`.

### Exit Criteria:
- [ ] Cross-platform build works via OTA.

## Phase 8: CI/CD + DevOps

**Goal**: Automate builds, tests, and deployments.

### Tasks:
- [ ] GitHub Actions workflows:
  - [ ] Lint + Typecheck
  - [ ] Test suites
  - [ ] Deploy Web -> Cloudflare Pages
  - [ ] Deploy Backend -> Fly.io
  - [ ] EAS Submit for Mobile OTA

### Test Process:
- [ ] PR test passes on all workflows.
- [ ] On push to main: deploys happen correctly.
- [ ] OTA updates reach test devices.

### Exit Criteria:
- [ ] Fully automated CI/CD.
- [ ] Fast feedback on all code changes.

## Phase 9: Observability + Analytics

**Goal**: Add Sentry and PostHog for tracking and debugging.

### Tasks:
- [ ] Setup Sentry SDK in Backend, Web, Mobile.
- [ ] Setup PostHog event tracking.

### Test Process:
- [ ] Trigger a manual error -> check Sentry log.
- [ ] Trigger user interaction -> check PostHog event.

### Exit Criteria:
- [ ] Error tracking and analytics live across all surfaces.

## Phase 10: Production Readiness

**Goal**: Final hardening for launch.

### Tasks:
- [ ] Add rate limiting, request logging.
- [ ] Lock Prisma migrations.
- [ ] Verify all env vars are set via CI/CD secrets.

### Test Process:
- [ ] Load testing backend via k6 or similar.
- [ ] Run `pnpm build` from clean.
- [ ] Final E2E test on production infra.

### Exit Criteria:
- [ ] Ready for real users across platforms.