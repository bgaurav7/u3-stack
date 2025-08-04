# 🧑‍💻 AI Instructions: U3-Stack

These are coding guidelines and## ✨ AI-Specific Tips

- **Package naming**: Use `@u3/` prefix for all internal packages
- **tRPC structure**: All API calls go through `/api/trpc/[trpc]` endpoint  
- **No direct API routes**: Use tRPC procedures instead of raw Next.js API routes
- **Cross-platform**: Code should work on both web and mobile unless platform-specific
- **File structure**: Follow established monorepo patterns, don't create new folder structures
- **Environment**: Use relative URLs (`/api/trpc`) for same-origin requests for generating or modifying code in the U3-Stack project.

---

## ✅ General Rules

- Always use **TypeScript with full type inference**
- Prefer **functional, composable** code patterns
- Follow **Clean Architecture** principles
- All logic should be portable across platforms where possible

---

## 🧱 Code Organization Rules

### Frontend

- Shared logic and hooks: `@u3/frontend`
- Page components: `@u3/frontend/src/pages`
- tRPC client config: `@u3/frontend/src/api`
- Use UI components only from `@u3/ui`

### Backend

- **tRPC endpoint**: `apps/web/app/api/trpc/[trpc]/route.ts` (App Router)
- **Business logic**: `@u3/backend/src/routers` (tRPC routers)
- **No raw Next.js route handlers** - use tRPC procedures instead
- Keep route handler minimal - delegate to tRPC routers

### Types & Config

- Always import types from `@u3/types`
- Use `@u3/config` for accessing constants or env vars
- Avoid hardcoded strings for config or keys

---

## 📦 Component & UI Rules

- Use **Tamagui components** from `@u3/ui` package only
- **Cross-platform compatibility**: Avoid React Native accessibility props on web
- **No accessibility props**: `accessibilityLabel`, `accessibilityRole`, `accessibilityHint` cause web warnings
- Themes and design tokens must be derived from Tamagui configuration
- Use semantic HTML elements for web accessibility instead of RN props

---

## 🔐 Auth Rules

- Use Clerk hooks (`useAuth()`, `useUser()`) for authentication state
- Auth tokens automatically handled by tRPC client configuration  
- Protect tRPC procedures in `@u3/backend` using Clerk context middleware
- Never manually decode tokens or access session storage directly

---

## 🧪 Testing Guidance

- Prefer **Playwright** for E2E and integration testing
- Unit tests can use **Jest + React Testing Library**
- Tests should live beside their respective modules where feasible

---

## ✨ AI-Specific Tips

- Don’t invent new folder structures
- Avoid global state unless explicitly scoped and necessary
- Use existing utility functions before creating new ones
- All code should work for **Web and Mobile** unless otherwise noted