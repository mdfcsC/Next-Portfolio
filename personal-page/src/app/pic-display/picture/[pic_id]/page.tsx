import React from 'react'
import PicDispCard from '@/components/PicDispCard';

export async function generateMetadata({ params }: { params: { pic_id: string } }) {
    return {
        title: `Picture - ${params.pic_id}`,
        description: 'A full description of the picture.',
    }
}

export default function SinglePicturePage({ params }: { params: { pic_id: string } }) {
    return (
        <div>
            <PicDispCard pic_id={params.pic_id} />
        </div>
    )
}