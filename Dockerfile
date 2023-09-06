FROM node:18.17.1-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY . /app

FROM base AS build
WORKDIR /app/apps/web
RUN pnpm install --frozen-lockfile --force
# RUN pnpm dlx prisma generate
RUN pnpm run -r build

FROM node:18.17.1-slim AS web
WORKDIR /app

COPY --from=build /app/apps/web/.next/standalone /app/

WORKDIR /app/apps/web

EXPOSE 3000

CMD [ "node", "server.js" ]
