# Stage 1 - base setup for the React app (client + server)
ARG NODE_IMAGE="node:25.0.0-trixie-slim"

FROM ${NODE_IMAGE} AS dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Stage 2 - build the React bundle
FROM ${NODE_IMAGE} AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY package.json ./
COPY tsconfig.json ./
COPY client ./client
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn rollup --config ./client/config/rollup.config.mjs

# Stage 3 - production image with Express proxy
FROM ${NODE_IMAGE} AS deploy
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=dependencies /app/node_modules ./node_modules
COPY server ./server

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "server/src/index.ts"]