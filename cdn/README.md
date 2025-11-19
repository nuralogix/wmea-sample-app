# CDN Sample App

Minimal static demo that loads the Web Measurement Embedded App (WMEA) straight from the public CDN.

## Environment Variables

Copy the example env file and populate it with your DeepAffex credentials:

```bash
cp .dev.env.example .dev.env
```

Required values:

- `API_URL` – DeepAffex API hostname (for example `api.na-east.deepaffex.ai`)
- `STUDY_ID` – Study identifier configured in DeepAffex
- `LICENSE_KEY` – License key registered for the study
- `PORT` (optional) – Port for the local server (`7000` default)

## Install Dependencies

```bash
yarn install
```

## Run the Demo

```bash
yarn start
```

Then open <http://localhost:7000> (or the port you configured). The Express server serves `client/index.html` and exposes `/api/studyId` plus `/api/token`.

## File Layout

- `client/index.html` – Inline script that imports the WMEA package via an import map and boots the app
- `index.mjs` – Express server that serves static assets and proxies DeepAffex credential calls
- `.dev.env.example` – Sample environment file
- `package.json` – Scripts and dependencies for the CDN demo
