"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { trpc } from "@web/app/_trpc/client";
import { useSession } from "next-auth/react";

export default function Provider({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession();

    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: `/api/trpc`,

                    async headers() {
                        if (session) {
                            return {
                                authorization: `Bearer ${session?.auth_token}`,
                            };
                        }

                        return {};
                    },
                }),
            ],
        })
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    );
}
