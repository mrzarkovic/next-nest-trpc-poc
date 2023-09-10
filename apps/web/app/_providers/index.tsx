"use client";

import { ReactNode } from "react";
import TRPCProvider from "./TRPCProvider";
import NextAuthProvider from "./NextAuthProvider";
import { Session } from "next-auth/core/types";

type ProviderProps = {
    children: ReactNode;
    session: Session | null;
};

const Providers = ({ children, session }: ProviderProps) => {
    return (
        <NextAuthProvider session={session}>
            <TRPCProvider>{children}</TRPCProvider>
        </NextAuthProvider>
    );
};

export default Providers;
