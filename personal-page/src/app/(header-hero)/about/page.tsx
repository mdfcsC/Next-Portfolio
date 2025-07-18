import Hero from "@/components/Hero";
import aboutBG from "/public/images/identity-1815811.jpg";
import SmartLink from "@/components/SmartLink";

export default function AboutPage() {
    return (
        <>
            <Hero imgData={aboutBG} imgAlt="Identity Picture" heroTitle='Who Am I' >
                <div className="text-white/30 text-center">Hope you watched the musical&nbsp;
                    <SmartLink href="https://www.tiktok.com/@jaimeleeogle/video/7330308482823949611?is_from_webapp=1" className="text-white/30">
                        Les Misérables
                    </SmartLink>
                    &nbsp;...
                </div>
            </Hero>
            {/* 只暗化背景，不影响文字 */}
            <div className="absolute inset-0 bg-gray-900/60 pointer-events-none -z-10"></div>
        </>
    );
}