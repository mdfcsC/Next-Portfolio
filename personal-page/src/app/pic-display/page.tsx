import React from 'react'
import { picData } from "@/data/pic-display_data";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Picture Gallery",
    description: "A collection of pictures used in the personal page.",
};

type PicType = {
    id: string,
    src: string,
    alt: string,
    desc: string,
}

export default function page() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Using Pictures</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {picData.map((pic: PicType) => (
                        <Link key={pic.id} href={`/pic-display/picture/${pic.id}`} className="group">
                            <Image alt={pic.alt} src={pic.src} className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}