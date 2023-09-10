"use client";
import { trpc } from "@web/app/_trpc/client";
import { trpc as serverClient } from "@web/app/_trpc/server";
import { useSession } from "next-auth/react";

export default function ClientSide({
    initial,
}: {
    initial?: Awaited<ReturnType<typeof serverClient.hello.query>>;
}) {
    const { data: session } = useSession();

    const greeting = trpc.getTodos.useQuery().data;

    return <div className="text-4xl font-bold">Client: {greeting}</div>;
}
