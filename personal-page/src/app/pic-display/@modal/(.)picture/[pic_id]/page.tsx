'use client'

import { notFound, useRouter } from "next/navigation";
import { picData } from "@/data/pic-display_data";
import Image from 'next/image';
import React from 'react';

export default function SinglePicturePage({ params }: { params: { pic_id: string } }) {
    const router = useRouter();

    const pic = picData.find(p => p.id === params.pic_id);

    if (!pic) {
        return notFound();
    }

    return (
        <div className="mx-auto flex justify-center items-center fixed inset-0 bg-slate-400/[.8] p-4" onClick={router.back}>
            <div className="bg-white rounded-lg shadow-lg p-5 max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <Image 
                    alt={pic.alt} 
                    src={pic.src} 
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg mb-5" 
                />
                <p className="text-black">{pic.desc}</p>
            </div>
        </div>
    )
}