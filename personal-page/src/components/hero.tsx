import { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    heroTitle: string;
    objectFit?: "cover" | "contain";
    objectPosition?: string;
    scale?: number;
    children?: React.ReactNode;
}

export default function Hero( props: HeroProps ) {
    return (
        <div className="relative h-screen overflow-y-auto">
            <div className="absolute -z-20 inset-0">
                <Image src={props.imgData} alt={props.imgAlt} fill style={{ objectFit: props.objectFit || "cover", objectPosition: props.objectPosition || "center center", transform: props.scale ? `scale(${props.scale})` : undefined }} />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900"></div>
            </div>
            <div className="pt-48 flex justify-center container mx-auto">
                <h1 className="text-white text-6xl font-serif font-extrabold">{props.heroTitle}</h1>
            </div>
            {props.children && (
                <div className="mt-30 p-8">
                    {props.children}
                </div>
            )}
        </div>
    );
}