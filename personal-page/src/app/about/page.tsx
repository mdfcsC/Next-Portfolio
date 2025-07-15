import Hero from "@/components/hero";
import aboutBG from "/public/images/identity-1815811.jpg";

export default function Page() {
    return (
        <>
            <Hero imgData={aboutBG} imgAlt="Identity Picture" heroTitle='W h o &nbsp; A m &nbsp; I' >
                <div className="text-white/30 text-center">Hope you watched the musical Les Misérables ...</div>
            </Hero>
            {/* 只暗化背景，不影响文字 */}
            <div className="absolute inset-0 bg-gray-900/60 pointer-events-none -z-10"></div>
        </>
    );
}