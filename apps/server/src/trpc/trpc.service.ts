import { Injectable } from '@nestjs/common';

import { TRPCError, inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

type CreateContext = TrpcService['createContext'];

type Context = inferAsyncReturnType<CreateContext>;

export type IAuthRequest = Request & {
  headers: { authorization: string };
};

@Injectable()
export class TrpcService {
  trpc = initTRPC.context<Context>().create();
  procedure = this.trpc.procedure;
  isAuthed = this.trpc.middleware(({ next, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
      });
    }
    return next({
      ctx: {
        user: ctx.user,
      },
    });
  });
  protectedProcedure = this.trpc.procedure.use(this.isAuthed);
  router = this.trpc.router;
  mergeRouters = this.trpc.mergeRouters;

  createContext = ({ req }: trpcExpress.CreateExpressContextOptions) => {
    const token = this.extractTokenFromHeader(req as unknown as IAuthRequest);

    console.log('token', token);

    return { user: token ? 1 : 0 };
  };

  private extractTokenFromHeader(request: IAuthRequest): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
