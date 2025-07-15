'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 计算透明度，滚动0-100px时从0逐渐变为1
    const opacity = Math.min(scrollY / 100, 1);

    return (
        <header className="fixed top-0 w-full z-20 transition-all duration-300 [&_a]:hover:text-gray-400">
            {/* 背景层 - 渐变背景 */}
            <div 
                className="absolute inset-0 bg-gradient-to-b from-blue-950 to-transparent backdrop-blur-md"
                style={{ opacity }}
            />
            {/* 内容层 */}
            <nav className="relative container flex items-center justify-between mx-auto p-8">
                <Link className="text-3xl font-bold" href="/">Home</Link>
                <div className="flex space-x-8 text-2xl font-semibold">
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    );
}