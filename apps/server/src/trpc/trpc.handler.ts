import { Injectable } from '@nestjs/common';
import { type HelloRequest } from './requests';
import { type AuthUser } from './types';

@Injectable()
export class TrpcHandler {
  hello(request: HelloRequest, authUser: AuthUser) {
    console.log('authUser', authUser?.user_id);
    return `Hello ${
      request.name ? (authUser ? 'Logged in ' : '') + request.name : 'World'
    }!`;
  }

  getTodos() {
    return [10, 2, 3, 4, 50, 60];
  }
}
