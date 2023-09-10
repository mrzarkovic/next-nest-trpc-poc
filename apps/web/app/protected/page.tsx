import { getServerSession } from "next-auth";
import ClientSide from "@web/app/_components/ClientSide";
import { trpc } from "@web/app/_trpc/server";
import { authOptions } from "@web/app/api/auth/[...nextauth]/route";

export default async function Protected() {
    const session = await getServerSession(authOptions);
    const response = await trpc.hello.query({
        name: session?.user?.name ?? "Server",
    });

    return (
        <div className="container mx-auto p-4">
            <div>Server: {response}</div>
            <div>
                <ClientSide />
            </div>
        </div>
    );
}
