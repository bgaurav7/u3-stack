# 🧑‍💻 AI Instructions: U3-Stack

These are coding guidelines and rules for generating or modifying code in the U3-Stack project.

---

## ✅ General Rules

- Always use **TypeScript with full type inference**
- Prefer **functional, composable** code patterns
- Follow **Clean Architecture** principles
- All logic should be portable across platforms where possible

---

## 🧱 Code Organization Rules

### Frontend

- Shared logic and hooks: `u3/frontend`
- All screens (web/mobile): `u3/frontend/screens`
- Use UI components only from `u3/ui`

### Backend

- Use **Next.js API routes** (`apps/web/pages/api`) as the main backend interface
- Keep business logic in `u3/backend`, not in route handlers
- Use **tRPC** for all API communication — no raw fetch

### Types & Config

- Always import types from `u3/types`
- Use `u3/config` for accessing constants or env vars
- Avoid hardcoded strings for config or keys

---

## 📦 Component & UI Rules

- Use **Tamāgui components** from `u3/ui`
- Maintain accessibility via ARIA roles when possible
- Themes and tokens must be derived from Tamagui config

---

## 🔐 Auth Rules

- Use `useAuth()` and Clerk-provided hooks for authentication
- Never manually decode tokens or access session storage
- Protect backend procedures inside `u3/backend` using Clerk middleware

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