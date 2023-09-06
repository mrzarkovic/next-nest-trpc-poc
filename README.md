# Next.js NestJS tRPC Dockerized

Dockerized Next.js front-end and NestJS back-end with tRPC API for both client-side and server-side React components.

### Dev

Build server docker image

```bash
docker build -t server-dev:latest . -f Dockerfile.server.dev
```

Build web docker image

```bash
docker build -t web-dev:latest . -f Dockerfile.web.dev
```

```bash
docker-compose up -d
```

4. Run DB migrations

```bash
pnpm dlx prisma migrate dev
```

5. Generate Prisma Client

```bash
pnpm dlx prisma generate
```
