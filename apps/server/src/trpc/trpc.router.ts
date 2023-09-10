import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TrpcHandler } from './trpc.handler';
import { HelloRequest } from './requests';
import { type Context } from '@server/trpc/trpc.service';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly trpcHandler: TrpcHandler,
  ) {}

  addAuthUser<Request>(callback: any) {
    return ({ input, ctx }: { input: Request; ctx: Context }) => {
      return callback(input, ctx.user);
    };
  }

  appRouter = this.trpcService.router({
    getTodos: this.trpcService.procedure.query(this.trpcHandler.getTodos),
    hello: this.trpcService.protectedProcedure
      .input(HelloRequest)
      .query(this.addAuthUser<HelloRequest>(this.trpcHandler.hello)),
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
