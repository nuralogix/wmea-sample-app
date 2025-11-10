# Web Measurement Embedded App – Sample Applications

![Sample App Screenshot](./wmea_sample_app_customer_view.png)

## Repository overview

This repo contains two example apps:

- **React app (default)** – Located under `react/`, this is the comprehensive SPA with (mock) authentication, demographic profile form, measurement workflow, and rich results dashboard. The root `package.json` scripts (`yarn watch`, `yarn build`, etc.) operate on this app, and the Express proxy in `server/` serves it.
- **CDN demo** – Found in `cdn/`, this minimal static example embeds the WMEA widget directly from a CDN. See `cdn/README.md` for usage notes.

## React app quickstart

### 1. Environment variables

Create `.dev.env` and `.prod.env` in the repository root:

```
# .dev.env
NODE_ENV=development
API_URL=api.na-east.deepaffex.ai
STUDY_ID=
LICENSE_KEY=

# .prod.env
NODE_ENV=production
API_URL=api.na-east.deepaffex.ai
STUDY_ID=
LICENSE_KEY=
```

### 2. Install dependencies

```bash
yarn
```

### 3. Run in development

```bash
yarn watch            # Builds the React app with live reload
cd server && yarn serve:dev
```

Visit http://localhost:3000 once both processes are running. The React build writes to `dist/`, and the Express server proxies API requests while serving those assets.

### 4. Build for production

```bash
yarn build            # Produces dist/ assets
cd server && yarn serve:prod
```

The production server uses `.prod.env` to register licenses and issue measurement tokens.

## Docker workflow

Containerize the React + Express stack with the provided multi-stage `Dockerfile`:

```bash
docker build -t wmea .
docker run --env-file .prod.env -p 3000:3000 -d wmea
```

Open http://localhost:3000, then use `docker logs <container>` or `docker stop <container>` as needed.

## SDK region handling

If `apiUrl` is omitted when initializing the WMEA widget, the SDK derives it from the token’s region. That keeps the frontend aligned with the backend license region and is suitable for most deployments. Setting `apiUrl` explicitly forces requests to a specific region, but you are responsible for ensuring regulatory and latency requirements. Measurements are stored in the token’s region; computation occurs wherever the frontend communicates.

When your backend simply registers a license and returns a device token for anonymous measurements, the token region mirrors the `API_URL` passed to the backend.

## Browserslist reminder

Check which browsers your current targets include with:

```bash
npx browserslist
```

Update the `browserslist` entry in `package.json` to adjust support levels. For example:

```json
"browserslist": [
  "Safari >= 18",
  "last 3 versions"
]
```

`Safari >= 18` removes unsupported legacy Safari releases, while `last 3 versions` covers the latest stable Chrome, Edge, and Firefox channels.
