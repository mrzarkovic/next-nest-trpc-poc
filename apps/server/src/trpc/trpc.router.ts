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
    hello: this.trpcService.protectedProcedure
      .input(z.object({ name: z.string().optional() }))
      .query(async ({ input, ctx }) => {
        return `Hello ${input.name ? ctx.user : 'World'}!`;
      }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      '/api/trpc',
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
        createContext: this.trpcService.createContext,
      }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
