import Image from 'next/image';
import { picData } from "@/data/pic-display_data";
import React from 'react';
import { notFound } from 'next/dist/client/components/navigation';

interface PictureProps {
    pic_id: string;
}

export default function PicDispCard({ pic_id }: PictureProps) {
    const pic = picData.find(p => p.id === pic_id);

    if (!pic) {
        return notFound();
    }

    return (
        <div className="container mx-auto p-5 m-10">
            <Image 
                alt={pic.alt} 
                src={pic.src} 
                className="block mx-auto mt-10 rounded-lg max-h-[66vh] w-auto object-contain" 
            />
            <div className="border-dashed border-2 p-5 mt-10">
                <strong className="text-lg font-bold mt-4">Description&nbsp;:&nbsp;</strong>
                <p>{pic.desc}</p>
            </div>
        </div>
    )
}