import ClientSide from "./components/ClientSide";
import { trpc } from "./trpc/server";
import { getServerSession } from "next-auth";

export default async function Home() {
    const session = await getServerSession();
    const response = await trpc.hello.query({
        name: session?.user?.name ?? "World",
    });

    console.log({ serverSession: session });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {response}
            <ClientSide initial={response} />
        </main>
    );
}
