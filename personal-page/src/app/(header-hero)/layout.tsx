import Header from "@/components/Header";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
    title: "mdfcsC - Personal Website",
    description: "A showcase of my work and projects, built with Next.js",
};

export default function HeaderHeroLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
