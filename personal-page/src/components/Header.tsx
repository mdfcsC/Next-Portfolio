'use client';

import React from "react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { HamburgerButton, MobileMenu } from "./MobileMenu";

// 常量定义
const SCROLL_THRESHOLD = 100;

// 共享的导航配置 - 便于维护和扩展
export const NAVIGATION_ITEMS = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
] as const;

// 自定义Hook：滚动监听
const useScrollOpacity = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return Math.min(scrollY / SCROLL_THRESHOLD, 1);
};

// 桌面端导航组件
const DesktopNavigation: React.FC = () => (
    <div className="hidden sm:flex space-x-8 text-2xl font-semibold">
        {NAVIGATION_ITEMS.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-gray-400 transition-colors">
                {label}
            </Link>
        ))}
    </div>
);

// 主Header组件
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const opacity = useScrollOpacity();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-0 w-full z-20 transition-all duration-300 [&_a]:hover:text-gray-400">
            {/* 背景层 */}
            <div 
                className="absolute inset-0 bg-gradient-to-b from-blue-950 to-transparent backdrop-blur-md"
                style={{ opacity }}
            />
            
            {/* 导航栏 */}
            <nav className="relative container flex items-center justify-between mx-auto p-8">
                <Link className="text-3xl font-bold hover:text-gray-400 transition-colors" href="/">
                    Home
                </Link>
                <DesktopNavigation />
                <HamburgerButton onClick={toggleMenu} />
            </nav>

            {/* 移动端菜单 */}
            <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </header>
    );
}