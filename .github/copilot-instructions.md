# WMEA Sample App - AI Coding Agent Instructions

## Project Overview

This is a Web Measurement Embedded App (WMEA) built with React + TypeScript, demonstrating Nuralogix's biometric measurement capabilities through camera-based vital sign detection. The app consists of a client-server architecture where the server proxies Nuralogix API authentication and the client embeds the measurement widget.

## Architecture & Key Components

### Client-Server Split

- **Client**: React app built with Rollup (`client/`) - handles UI, state management, measurement embedding
- **Server**: Express proxy (`server/`) - handles Nuralogix API authentication and static file serving
- **Development**: Two processes required - `yarn watch` (client) + `cd server && yarn serve:dev` (server)

### State Management (Valtio Pattern)

Global state uses Valtio proxy pattern in `client/state/`:

```typescript
// State modules: auth, demographics, general, measurement
const state = proxy({ general: generalState, measurement: measurementState, ... });
// Access via useSnapshot(state.moduleName) - never mutate directly
```

### Nuralogix Integration Points

- **API Client**: Server uses `@nuralogix.ai/dfx-api-client` for authentication (`/api/token`, `/api/studyId`)
- **Measurement Widget**: Client embeds `@nuralogix.ai/web-measurement-embedded-app` in `/measurement`
- **UI Components**: Uses `@nuralogix.ai/web-ui` design system throughout
- **Required Headers**: Server sets COOP/COEP headers for SharedArrayBuffer support

### Build System Specifics

- **Rollup + esbuild**: Client builds to `dist/` with hash-based filenames
- **StyleX**: CSS-in-JS solution - use `stylex.create()` pattern, not traditional CSS
- **Environment**: Uses `--env-file` for .dev.env/.prod.env (not dotenv package)
- **Live Reload**: Development includes custom livereload watching `.build-done` file

## Development Workflows

### Starting Development

```bash
# Terminal 1 - Client build/watch
yarn watch

# Terminal 2 - Server with API proxy
cd server && yarn serve:dev
```

### Environment Setup

Create `.dev.env` and `.prod.env` in root with:

```
NODE_ENV=development|production
API_URL=api.deepaffex.ai
STUDY_ID=your_study_id
LICENSE_KEY=your_license_key
```

### TypeScript Configuration

- **Monorepo setup**: Separate `tsconfig.json` for client/server
- **Module system**: ES2022 modules throughout, `type: "module"` in package.json
- **Build targets**: Client targets bundlers, server targets Node.js 24+

## Critical Patterns & Conventions

### Component Structure

- **Page components**: In `client/pages/` with index.tsx pattern
- **Reusable components**: In `client/components/` with folder-per-component
- **Protected routes**: Use `<ProtectedRoute />` wrapper for authenticated pages
- **Styling**: Always use StyleX, never traditional CSS files (except global styles.css)

### State Management Rules

```typescript
// ✅ Correct - use useSnapshot for reads, mutate state object directly
const { results } = useSnapshot(state.measurement);
state.measurement.results = newResults;

// ❌ Wrong - don't destructure state directly or use setters unnecessarily
const { setResults } = useSnapshot(state.measurement); // Anti-pattern
```

### API Integration

- **Server-side proxy**: All Nuralogix API calls go through server `/api/*` endpoints
- **Token management**: Server handles license registration and token refresh
- **CORS setup**: Server configured for cross-origin embedded app requirements

### Internationalization

- **i18next**: Configured with fetch backend for JSON translation files
- **Language detection**: Automatic browser language detection with fallback to English
- **File pattern**: `client/language/strings.{lng}.json`

## Docker & Production

- **Multi-stage build**: Dependencies → Client build → Production runtime
- **Static serving**: Server serves both app and embedded WMEA assets
- **Port**: Always exposes 3000, configurable via PORT env var
- **Health check**: Available at `/health` endpoint

## Testing & Quality

- **ESLint**: Strict TypeScript + React hooks + Valtio rules enabled
- **Type checking**: Separate commands for client/server (`yarn typecheck:client`)
- **No console**: Production builds fail on console.log (use structured logging)

## File Organization Patterns

- **Barrel exports**: Use `index.ts` files for clean imports (`client/pages/Profile/Fields/index.ts`)
- **Co-location**: Keep related files together (utils, types, constants in same folder)
- **Feature folders**: Group by feature rather than file type where logical
