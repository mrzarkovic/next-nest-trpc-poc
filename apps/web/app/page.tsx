import ClientSide from "./components/ClientSide";
import { trpc } from "./trpc/server";

export default async function Home() {
    const response = await trpc.hello.query({ name: "Server" });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {response}
            <ClientSide initial={response} />
        </main>
    );
}
