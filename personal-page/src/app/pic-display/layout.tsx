import React from 'react'

export default function PicDisplayLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}
