# Environment Configuration

This directory contains layered environment configuration files for the U3-Stack monorepo.

## File Structure

```
env/
├── .env.defaults      # Default values for all environments
├── .env.development   # Development environment overrides
├── .env.production    # Production environment overrides
├── .env.local.example # Example local overrides (copy to .env.local)
└── .env.local         # Local overrides (git-ignored)
```

## Loading Order (Precedence)

Environment variables are loaded in the following order (highest to lowest precedence):

1. **`.env.local`** - Local overrides (git-ignored, for personal settings)
2. **`.env.{NODE_ENV}`** - Environment-specific values (e.g., `.env.development`)
3. **`.env.defaults`** - Default fallback values

## Usage

The environment configuration is automatically loaded when you import the config:

```typescript
import { config } from '@u3/config/config';

// Type-safe access to environment variables
console.log(config.app.name);        // "U3-Stack"
console.log(config.server.port);     // 3000
console.log(config.database.url);    // "postgresql://..."
```

## Type Safety

All environment variables are validated using `env-var` with proper TypeScript types:

- **Strings**: `asString()`
- **Numbers**: `asInt()`, `asPortNumber()`
- **Booleans**: `asBool()`
- **URLs**: `asUrlString()`
- **Enums**: `asEnum(['option1', 'option2'])`

## Validation

The configuration system includes validation to ensure required variables are present:

```typescript
import { validateConfig } from '@u3/config/config';

// Call during application startup
validateConfig(); // Throws error if validation fails
```

## Local Development

1. Copy `.env.local.example` to `.env.local`
2. Customize values as needed for your local environment
3. The `.env.local` file is git-ignored and won't be committed

## Environment Variables

### Application
- `APP_NAME` - Application name (default: "U3-Stack")
- `APP_VERSION` - Application version (default: "0.1.0")
- `NODE_ENV` - Environment (development/production/test)

### Server
- `PORT` - Server port (default: 3000)
- `HOST` - Server host (default: "localhost")

### Database
- `DATABASE_URL` - PostgreSQL connection string

### Authentication (Clerk)
- `CLERK_PUBLISHABLE_KEY` - Clerk publishable key
- `CLERK_SECRET_KEY` - Clerk secret key

### API
- `API_URL` - API base URL

### Logging
- `LOG_LEVEL` - Log level (debug/info/warn/error)

### Feature Flags
- `ENABLE_ANALYTICS` - Enable analytics (boolean)
- `ENABLE_ERROR_TRACKING` - Enable error tracking (boolean)
- `HOT_RELOAD` - Enable hot reload (boolean)
- `ENABLE_DEVTOOLS` - Enable dev tools (boolean)

### Security (Production)
- `SECURE_COOKIES` - Use secure cookies (boolean)
- `TRUST_PROXY` - Trust proxy headers (boolean)