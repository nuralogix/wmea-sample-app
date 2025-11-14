# Stage 1 - base setup for the React app (client + server)
ARG NODE_IMAGE="node:25.0.0-trixie-slim"

FROM ${NODE_IMAGE} AS dependencies
WORKDIR /app/react
COPY react/package.json react/yarn.lock ./
RUN yarn install --frozen-lockfile

# Stage 2 - build the React bundle
FROM ${NODE_IMAGE} AS builder
WORKDIR /app/react
ENV NODE_ENV=production
COPY react ./
COPY --from=dependencies /app/react/node_modules ./node_modules
RUN printf "NODE_ENV=production\n" > .prod.env && yarn build

# Stage 3 - production image with Express proxy
FROM ${NODE_IMAGE} AS deploy
WORKDIR /app

COPY --from=builder /app/react/dist ./dist
COPY --from=dependencies /app/react/node_modules ./node_modules
COPY react/server ./server

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "--loader", "tsx", "server/src/index.ts"]