[Back to Main README](../README.md)

# Web Measurement Embedded App - React Sample Application

## Create environment variables

Create two env files. One for production and one for development.

.prod.env

```
NODE_ENV=production
API_URL=api.na-east.deepaffex.ai
STUDY_ID=
LICENSE_KEY=
```

.dev.env

```
NODE_ENV=development
API_URL=api.na-east.deepaffex.ai
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
docker build -t wmea .
```

### Run image

First, run the following command:

```bash
docker run --env-file .prod.env -p 3000:3000 -d wmea
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

## SDK Region Handling Note

Note: If the optional apiUrl is not set in the SDK, it will be automatically determined based on the token's region. This effectively ties the frontend region to the token's region, which should be suitable for most use cases. If the optional apiUrl is explicitly set in the SDK, the frontend will communicate with that URL, regardless of the token's region. In this case, it is the implementor’s responsibility to ensure compatibility and prevent potential issues. Results will always be stored in the token's region. Data processing will occur in the frontend's region, as determined by your implementation.

If the backend only registers a license and returns a device token to perform an anonymous measurement, the token’s region will match the region specified in the backend's API_URL.

## Check Which Browsers Your Config Targets

You can see the exact list of browser versions that match your config by running:

``` bash
npx browserslist
```

In the package.json, modify the browserslist section to update the list of supported browsers:

```javascript
"browserslist": [
  "Safari >= 18",
  "last 3 versions",
]
```

- `Safari >= 18` tells build tools: don’t support Safari below 18.
- `last 3 versions` still covers other browsers (Chrome, Firefox, Edge).

