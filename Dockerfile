# Stage 1 - base setup for both client and server
ARG NODE_IMAGE="node:24.3.0-bookworm-slim"

# Stage 1 - Install dependencies only when needed
FROM ${NODE_IMAGE} AS dependencies

# Build client dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build server dependencies
COPY server/package.json server/yarn.lock ./server/
RUN cd server && yarn install --frozen-lockfile --production

# Stage 2 - Rebuild front-end only when needed
FROM ${NODE_IMAGE} AS builder

ENV NODE_ENV=production
COPY client ./client
COPY --from=dependencies /node_modules ./node_modules
COPY package.json yarn.lock tsconfig.json ./
RUN yarn rollup --config ./client/config/rollup.config.mjs

# Stage 3 - the production environment
FROM ${NODE_IMAGE} AS deploy

WORKDIR "/app"
COPY --from=builder /dist ./dist
COPY --from=dependencies /server/node_modules ./node_modules
COPY server/src ./server/src

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "./server/src/index.ts"]