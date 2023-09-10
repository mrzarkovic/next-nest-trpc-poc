import { z } from 'zod';

export const HelloRequest = z.object({ name: z.string().optional() });
export type HelloRequest = z.infer<typeof HelloRequest>;
