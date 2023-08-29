"use client";
import { trpc } from "@web/app/trpc/client";
import { trpc as serverClient } from "@web/app/trpc/server";

export default function ClientSide({
    initial,
}: {
    initial: Awaited<ReturnType<typeof serverClient.hello.query>>;
}) {
    const greeting = trpc.hello.useQuery(
        { name: "Client" },
        { initialData: initial }
    ).data;

    return <div className="text-4xl font-bold">{greeting}</div>;
}
