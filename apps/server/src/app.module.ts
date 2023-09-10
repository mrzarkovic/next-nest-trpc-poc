import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TrpcModule } from '@server/trpc/trpc.module';
import { JwtModule } from '@nestjs/jwt';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        APP_JWT_SECRET: Joi.string().required(),
      }),
    }),
    JwtModule.register({
      global: true,
      secret: process.env.APP_JWT_SECRET,
    }),
    TrpcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
