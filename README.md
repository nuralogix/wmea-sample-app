[Back to Main README](../README.md)

# Anura Online - React Sample Application

## Create environment variables

Create two env files. One for production and one for development.

.prod.env

```
NODE_ENV=production
API_URL=api.deepaffex.ai
STUDY_ID=
LICENSE_KEY=
```

.dev.env

```
NODE_ENV=development
API_URL=api.deepaffex.ai
STUDY_ID=
LICENSE_KEY=
```

## Install dependencies

```bash
yarn
```

## Run in development mode

Open a terminal windows and run:

```bash
yarn watch
```

Open another terminal windows and run:

```bash
cd server
yarn serve:dev
```

## Run in production mode

Open a terminal windows and run:

``` bash
yarn build
```

Open another terminal windows and run:

``` bash
cd server
yarn serve:prod
```

## Test the image in Docker

### Build image

```bash
docker build -t anura-online .
```

### Run image

First, run the following command:

```bash
docker run --env-file .prod.env -p 3000:3000 -d anura-online
```

Next, open the browser at `http://localhost:3000/`

### View logs

```bash
# Get container ID
docker ps

# Print logs
docker logs <container id>
```

### Stop image

```bash
# Get container ID
docker ps

# Stop containter
docker stop <container id>
```

## Check Which Browsers Your Config Targets

You can see the exact list of browser versions that match your config by running:

``` bash
npx browserslist
```

In the package.json, modify the browserslist section to update the list of supported browsers:

```javascript
"browserslist": [
  "Safari >= 17",
  "last 3 versions",
]
```

- `Safari >= 17` tells build tools: don’t support Safari below 17.
- `last 3 versions` still covers other browsers (Chrome, Firefox, Edge).

