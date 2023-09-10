import { getServerSession } from "next-auth";
import ClientSide from "./_components/ClientSide";
import { trpc } from "./_trpc/server";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
    const session = await getServerSession(authOptions);
    const response = await trpc.getTodos.query();

    return (
        <div className="container mx-auto p-4">
            <div>Todos: {JSON.stringify(response)}</div>
            <div>
                <ClientSide />
            </div>
        </div>
    );
}
