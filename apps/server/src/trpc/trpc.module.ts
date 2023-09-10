import { Module } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { TrpcHandler } from '@server/trpc/trpc.handler';

@Module({
  imports: [],
  providers: [TrpcService, TrpcRouter, TrpcHandler],
})
export class TrpcModule {}
