# Environment Configuration

This directory contains the environment configuration for the U3-Stack project. The configuration is designed to be compatible with both Node.js and browser environments.

## Features

- **Browser Compatibility**: Works in both server and client environments
- **Type Safety**: Full TypeScript support with type definitions
- **Environment Detection**: Automatically detects server vs browser environments
- **Validation**: Server-side validation for required environment variables

## Usage

```typescript
import { config, isDevelopment, isProduction, validateConfig } from '@u3/config/env';

// Access environment variables
const port = config.app.port;
const databaseUrl = config.database.url;

// Check environment
if (isDevelopment) {
  console.log('Running in development mode');
}

// Validate configuration (only runs on server)
validateConfig();
```

## Configuration Structure

The configuration object includes:

- **app**: Basic application settings (nodeEnv, port, url)
- **auth**: Authentication settings (Clerk keys)
- **database**: Database connection information
- **features**: Feature flags

## Environment Variables

The following environment variables are supported:

| Variable                | Description                                 | Default      |
|-------------------------|---------------------------------------------|--------------|
| NODE_ENV                | Environment mode (development, production, test) | development  |
| PORT                    | Application port                            | 3000         |
| APP_URL                 | Application URL                             | ''           |
| CLERK_PUBLISHABLE_KEY   | Clerk publishable key                       | ''           |
| CLERK_SECRET_KEY        | Clerk secret key                            | ''           |
| DATABASE_URL            | Database connection URL                     | ''           |
| DATABASE_DIRECT_URL     | Direct database connection URL              | ''           |
| ENABLE_ANALYTICS        | Enable analytics                            | false        |

## Server vs Browser Environment

The configuration automatically detects whether it's running in a server or browser environment:

- In the **server** environment, it reads values from `process.env`
- In the **browser** environment, it uses default values to avoid errors

This approach ensures that the configuration can be imported in both environments without causing build or runtime errors.
