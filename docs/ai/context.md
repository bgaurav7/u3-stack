# 🤖 AI Context: U3-Stack Project

## 🧠 Summary

U3-Stack is a **Universal TypeScript-based Application** designed to work across **Web and Mobile** platforms using a **single shared codebase**. It uses **Next.js API routes** for backend functionality and Expo for native apps, with a clean, modular monorepo structure.

---

## 🧩 Architecture

### 🖼️ Presentation Layer

| App         | Stack               | Purpose                 |
|-------------|---------------------|--------------------------|
| `apps/web`  | Next.js (React)     | Universal Web frontend + API |
| `apps/mobile` | Expo (React Native) | Mobile app for iOS and Android |

### 📦 Packages

| Package            | Purpose                                                  |
|--------------------|----------------------------------------------------------|
| `u3/frontend`      | Shared client logic (hooks, API utils, screens)          |
| `u3/backend`       | API-side logic (procedures, database access, auth logic) |
| `u3/types`         | Shared types across backend and frontend (fully typed)   |
| `u3/config`        | Centralized environment config and constants             |
| `u3/ui`            | Tamagui theme + reusable UI components                   |

---

## 🔐 Auth

- **Clerk** is used for authentication across all platforms
- JWT/session management works consistently via Clerk SDK

---

## 🌐 API Layer

- The API is defined via **Next.js API routes** under `apps/web/pages/api`
- All procedures (auth, data access, etc.) live in `u3/backend`
- **tRPC** is used for type-safe RPC calls between client and server

---

## 🔧 Tech Stack

- **Language**: TypeScript (strict mode)
- **UI**: Tamagui (cross-platform design system)
- **State**: React Query, tRPC
- **Data**: PostgreSQL via Prisma
- **Deployment**:
  - Web: Cloudflare Pages / Vercel
  - API: Next.js (serverless or self-hosted)
  - Mobile: Expo EAS (OTA updates)
- **Monorepo Tooling**: pnpm workspaces, TurboRepo (optional)
- **Monitoring**: Sentry, PostHog

---

## 🧠 AI Guidance

- Reuse shared logic from `u3/frontend`, `u3/backend`, `u3/types`
- Do not duplicate UI — use `u3/ui` components
- Never write raw fetch — use tRPC hooks
- All code must be **type-safe and cross-platform aware**
- Backend logic should go into `u3/backend` and be surfaced via Next.js API
- Check library-level details inside `docs/libs/`or online documentation as needed.