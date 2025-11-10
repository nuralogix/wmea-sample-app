# CDN Sample App

Minimal static demo that loads the Web Measurement Embedded App (WMEA) straight from the public CDN.

## Prerequisites

- Node.js 18+
- `.dev.env` populated in the repository root
- Proxy server running (`cd server && yarn serve:dev`) to handle `/api/studyId` and `/api/token`

## Run the demo

```bash
cd cdn
yarn start
```

Open `http://localhost:7000` in a browser while the proxy at `http://localhost:3000` is running.

## File layout

- `client/index.html` – Inline script that imports the WMEA package via an import map and points `appPath` to the CDN assets
- `index.mjs` – Small static file server that serves the `client/` folder
- `package.json` – Single `start` script for the server
