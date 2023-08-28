FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

COPY . /app

WORKDIR /app

FROM base AS prod-deps
WORKDIR /app/apps/web
RUN pnpm install --prod --frozen-lockfile --force

FROM base AS build
WORKDIR /app/apps/web
RUN pnpm install --frozen-lockfile --force
# RUN pnpm dlx prisma generate
RUN pnpm run -r build

FROM base AS web
WORKDIR /app

COPY --from=prod-deps /app/apps/web/node_modules/ /app/apps/web/node_modules
COPY --from=prod-deps /app/node_modules/ /app/node_modules
COPY --from=build  /app/apps/web/.next /app/apps/web/.next

WORKDIR /app/apps/web

EXPOSE 3000

CMD [ "pnpm", "start" ]
