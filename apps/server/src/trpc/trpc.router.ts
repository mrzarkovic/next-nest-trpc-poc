import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpcService: TrpcService) {}

  appRouter = this.trpcService.router({
    getTodos: this.trpcService.procedure.query(async () => {
      return [10, 2, 3, 4, 50, 60];
    }),
    hello: this.trpcService.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(async ({ input }) => {
        return `Hello ${input.name ? input.name : 'World'}!`;
      }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      '/api/trpc',
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
