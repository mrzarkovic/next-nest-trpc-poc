# Dockerized Turbo Monorepo: Next.js + NestJS with tRPC!

Dockerized Next.js with App Router front-end and NestJS back-end with tRPC API.

### Local Development

#### Installation

1. Install dependencies.
   Use node version from .nvmrc file

```bash
pnpm install
```

2. Generate Prisma Client

```bash
pnpm dlx prisma generate
```

3. Run DB migrations

```bash
pnpm dlx prisma migrate dev
```

#### Development Docker containers

1. Start the containers

```bash
docker-compose -f docker-compose.yml up -d
```

2. Stop the containers

```bash
docker-compose -f docker-compose.yml down
```

### Staging

#### Build Docker images

1. Build the server docker image

```bash
docker build --no-cache -t server-staging:latest . -f Dockerfile.server
```

2. Build the web docker image

```bash
docker build --no-cache -t web-staging:latest . -f Dockerfile.web
```

#### Staging Docker containers

1. Start the containers

```bash
docker-compose -f docker-compose.staging.yml up -d
```

s 2. Stop the containers

```bash
docker-compose -f docker-compose.staging.yml down
```
