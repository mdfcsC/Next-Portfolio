import React from 'react'
import PicDispCard from './PicDispCard';

export async function generateMetadata({ params }: { params: Promise<{ pic_id: string }> }) {
    const { pic_id } = await params;
    return {
        title: `Picture - ${pic_id}`,
        description: 'A full description of the picture.',
    }
}

export default async function SinglePicturePage({ params }: { params: Promise<{ pic_id: string }> }) {
    const { pic_id } = await params;
    return (
        <div>
            <PicDispCard pic_id={pic_id} />
        </div>
    )
}