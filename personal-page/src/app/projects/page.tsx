"use client"

import Hero from "@/components/hero";
import projectsBG from "/public/images/pexels-negativespace-169573.jpg";
import { useEffect, useState } from "react";
import SmartLink from "@/components/smartLink";

export default function Page() {

    // 声明state来存储URL
    const [minsweeperUrl, setMinsweeperUrl] = useState('');
    const [jingBirthdayUrl, setJingBirthdayUrl] = useState('');

    useEffect(() => {
        // 给链接添加时间戳，确保每次都是最新版本
        const timestamp = Date.now();

        // 直接在state中存储URL字符串
        setMinsweeperUrl(`https://mdfcsc.github.io/My-Portfolio/minesweeper/minesweeper.html?v=${timestamp}`);
        setJingBirthdayUrl(`https://mdfcsc.github.io/My-Portfolio/BirthdayGift-Jing/index.html?v=${timestamp}`);
    }, []);

    return (
        <>
            <Hero imgData={projectsBG} imgAlt="Keep calm and drink coffee" heroTitle='See my "published work" !' >
                <div className="text-white bg-black/60 container mx-auto p-8 rounded-lg space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-3xl font-semibold font-serif tracking-tight">
                            {/* 使用 {' '} 确保单词间距正确 */}
                            First game,{' '}
                            <SmartLink href={minsweeperUrl}>
                                Minesweeper (My Version)
                            </SmartLink>
                        </h2>
                        <div className="space-y-2 text-gray-100">
                            <p>Best played in a real web browser, &apos;cause that&apos;s the only place I tested it.</p>
                            <p>
                                See the{' '}
                                <SmartLink href="https://github.com/mdfcsC/My-Portfolio/blob/main/README.md#minesweeper">
                                    README
                                </SmartLink>{' '}
                                in my GitHub repo for more details, if you have access.
                            </p>
                        </div>
                    </section>
                    
                    <section className="space-y-4">
                        <h2 className="text-3xl font-semibold font-serif tracking-tight">A birthday gift for my friend</h2>
                        <div className="text-gray-100">
                            <p>
                                With assistance of Claude and Cursor,{' '}
                                <SmartLink href={jingBirthdayUrl}>
                                    a web page
                                </SmartLink>{' '}
                                modified based on someone else&apos;s codes and design.
                            </p>
                        </div>
                    </section>
                </div>
            </Hero>
        </>
    )
}