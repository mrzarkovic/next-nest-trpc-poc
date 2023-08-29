import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { type AppRouter } from "@server/trpc/trpc.router";

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: "http://server:3000/api/trpc",
            // You can pass any HTTP headers you wish here
            async headers() {
                return {
                    // authorization: getAuthCookie(),
                };
            },
        }),
    ],
});
