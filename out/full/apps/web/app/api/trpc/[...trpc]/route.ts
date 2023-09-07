import { NextResponse } from "next/server";

const handler = async (
    request: Request,
    { params }: { params: { trpc: string } }
) => {
    const { searchParams } = new URL(request.url);
    const requestString = `${
        process.env.NEXT_PRIVATE_NESTJS_ADDRESS
    }/api/trpc/${params.trpc}?${searchParams.toString()}`;

    const res = await fetch(requestString, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();

    return NextResponse.json(data);
};

export { handler as GET, handler as POST };
