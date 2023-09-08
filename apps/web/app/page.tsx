import { authOptions } from "./api/auth/[...nextauth]/route";
import ClientSide from "./_components/ClientSide";
import { trpc } from "./_trpc/server";
import { getServerSession } from "next-auth";

export default async function Home() {
    const session = await getServerSession(authOptions);
    const response = await trpc.hello.query({
        name: session?.user?.name ?? "Server",
    });

    return (
        <div className="container mx-auto p-4">
            <div>Server: {response}</div>
            <div>
                <ClientSide initial={response} />
            </div>
        </div>
    );
}
