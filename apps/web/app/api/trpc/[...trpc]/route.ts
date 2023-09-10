import { NextResponse } from "next/server";
import { headers } from "next/headers";

const handler = async (
    request: Request,
    { params }: { params: { trpc: string } }
) => {
    const requestHeaders = new Headers({
        "Content-Type": "application/json",
    });
    const headersInstance = headers();
    const authorization = headersInstance.get("authorization");

    if (authorization) {
        requestHeaders.set("authorization", authorization);
    }

    const { searchParams } = new URL(request.url);
    const requestString = `${
        process.env.NEXT_PRIVATE_NESTJS_ADDRESS
    }/api/trpc/${params.trpc}?${searchParams.toString()}`;

    const res = await fetch(requestString, {
        headers: requestHeaders,
    });
    const data = await res.json();

    return NextResponse.json(data);
};

export { handler as GET, handler as POST };
