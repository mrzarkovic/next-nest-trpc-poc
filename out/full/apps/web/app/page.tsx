import { authOptions } from "./api/auth/[...nextauth]/route";
import ClientSide from "./_components/ClientSide";
import { trpc } from "./_trpc/server";
import { getServerSession } from "next-auth";

export default async function Home() {
    const session = await getServerSession(authOptions);
    const response = await trpc.hello.query({
        name: session?.user?.name ?? "World",
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {response}
            <ClientSide initial={response} />
        </main>
    );
}
