import { Context } from './trpc.service';

export type JWTAuthUser = {
  user_id: string;
};
export type AuthUser = Context['user'];
