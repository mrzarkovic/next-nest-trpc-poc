# Next.js NestJS tRPC Dockerized

Dockerized Next.js front-end and NestJS back-end with tRPC API for both client-side and server-side React components.

### Dev

1. Install dependencies.
   Use node version from .nvmrc file

```bash
pnpm install
```

2. Build the server docker image

```bash
docker build -t server-dev:latest . -f Dockerfile.server.dev
```

3. Build the web docker image

```bash
docker build -t web-dev:latest . -f Dockerfile.web.dev
```

4. Start the containers

```bash
docker-compose up -d --build
```

5. Run DB migrations

```bash
pnpm dlx prisma migrate dev
```

6. Generate Prisma Client

```bash
pnpm dlx prisma generate
```
