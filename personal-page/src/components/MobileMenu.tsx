'use client';

import React from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "./Header";

// 类型定义
interface MenuItem {
    href: string;
    label: string;
}

// 汉堡菜单按钮组件
export const HamburgerButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button 
        className="sm:hidden p-2 hover:text-gray-400 transition-colors"
        onClick={onClick}
        aria-label="Toggle menu"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    </button>
);

// 关闭按钮组件
const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div className="flex justify-end items-center p-8">
        <button 
            onClick={onClick}
            className="hover:text-gray-400 transition-colors p-2"
            aria-label="Close menu"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
);

// 菜单项组件
const MenuItem: React.FC<{ item: MenuItem; onClose: () => void }> = ({ item, onClose }) => (
    <Link 
        href={item.href} 
        className="text-2xl font-semibold hover:text-gray-400 transition-colors"
        onClick={onClose}
    >
        {item.label}
    </Link>
);

// 移动端侧滑菜单组件
export const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const menuStyles = {
        background: 'var(--background)',
        opacity: 0.95
    };

    return (
        <div 
            className={`sm:hidden fixed top-0 right-0 h-full w-48 backdrop-blur-md shadow-2xl z-30 transition-all duration-300 ease-in-out transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={menuStyles}
        >
            <div className="flex flex-col h-full">
                {/* 关闭按钮区域 */}
                <div className="flex-shrink-0">
                    <CloseButton onClick={onClose} />
                </div>
                
                {/* 菜单项区域 */}
                <div className="flex-1 overflow-y-auto px-8 pb-6 min-h-0">
                    <div className="flex flex-col space-y-6">
                        {NAVIGATION_ITEMS.map((item) => (
                            <MenuItem key={item.href} item={item} onClose={onClose} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}; 