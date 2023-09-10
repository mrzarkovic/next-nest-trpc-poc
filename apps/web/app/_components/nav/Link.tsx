"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export const Link = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    const pathname = usePathname();

    const getActiveClass = () => {
        return href == pathname ? "border-b-2 border-primary-aquamarine" : "";
    };

    return (
        <NextLink
            href={href}
            className={`py-4 mx-4 first-of-type:ml-0 text-primary-ultramarine dark:text-primary-aquamarine uppercase ${getActiveClass()}`}
        >
            {children}
        </NextLink>
    );
};
