import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { type AppRouter } from "@server/trpc/trpc.router";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `${process.env.NEXT_PRIVATE_NESTJS_ADDRESS}/api/trpc`,
            // You can pass any HTTP headers you wish here
            async headers() {
                const session = await getServerSession(authOptions);
                if (session) {
                    return {
                        authorization: `Bearer ${session?.auth_token}`,
                    };
                }

                return {};
            },
        }),
    ],
});
