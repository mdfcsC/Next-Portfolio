import PicDispCard from "./PicDispCard";

export default async function SinglePicturePage({ params }: { params: Promise<{ pic_id: string }> }) {
    const { pic_id } = await params;
    return (
        <div>
            <PicDispCard pic_id={pic_id} />
        </div>
    )
}