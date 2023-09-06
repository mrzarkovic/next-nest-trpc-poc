"use client";
import { trpc } from "@web/app/trpc/client";
import { trpc as serverClient } from "@web/app/trpc/server";
import { useSession } from "next-auth/react";

export default function ClientSide({
    initial,
}: {
    initial: Awaited<ReturnType<typeof serverClient.hello.query>>;
}) {
    const { data: session } = useSession();

    console.log({ clientSession: session });

    const greeting = trpc.hello.useQuery(
        { name: "Client" },
        { initialData: initial }
    ).data;

    return <div className="text-4xl font-bold">{greeting}</div>;
}
