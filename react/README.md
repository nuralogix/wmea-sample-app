# React Sample App

This folder contains the complete React implementation of the Web Measurement Embedded App (WMEA) sample.

## Environment Variables

Copy the example env files and populate them with your DeepAffex credentials:

```bash
cp .dev.env.example .dev.env
cp .prod.env.example .prod.env
```

Key variables:

- `API_URL` – target DeepAffex API host (e.g. `api.na-east.deepaffex.ai`)
- `STUDY_ID` – study identifier obtained from the DeepAffex portal
- `LICENSE_KEY` – license key registered for the study

## Install Dependencies

```bash
yarn install
```

## Run in Development

Start both the client build (Rollup watch) and the API proxy server with one command:

```bash
yarn dev
```

Alternatively run them in separate terminals:

```bash
# Terminal 1: rebuilds the client bundle on change
yarn watch

# Terminal 2: Express proxy with live reload
yarn server:dev
```

The server listens on `http://localhost:3000` by default. Live reload will refresh the page whenever the client bundle finishes rebuilding.

## Production Build

```bash
yarn build
yarn server:prod
```

The build output lives in `./dist` and is what the server serves in production mode.

## Linting & Type Checking

```bash
yarn lint
yarn typecheck        # runs both client and server type checks
```

## Docker Deployment

Build and run the React app with Docker using the included `Dockerfile`:

```bash
# Build the image (from the react folder)
docker build -t wmea-react .

# Run the container
docker run --env-file .prod.env -p 3000:3000 -d wmea-react
```

Once the container is running, open <http://localhost:3000> to access the app.

To view logs:

```bash
docker ps                    # list running containers
docker logs <container_id>   # stream application output
```

To stop the container:

```bash
docker ps                    # find container id
docker stop <container_id>
```
