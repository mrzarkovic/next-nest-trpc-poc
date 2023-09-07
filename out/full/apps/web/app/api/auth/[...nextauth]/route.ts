import NextAuth, { NextAuthOptions } from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { signJwt } from "@web/app/_lib/jwt";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID ?? "",
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? "",
            authorization: {
                params: { scope: "openid profile email" },
            },
            issuer: "https://www.linkedin.com",
            jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
            profile(profile, tokens) {
                const defaultImage =
                    "https://cdn-icons-png.flaticon.com/512/174/174857.png";

                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture ?? defaultImage,
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.auth_token = await signJwt({
                    sub: token.sub,
                    id_token: account.id_token,
                    access_token: account.access_token,
                    expires_at: account.expires_at,
                });
            }
            return token;
        },
        async session({ session, token }) {
            session.auth_token = token.auth_token as string;

            return session;
        },
    },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
