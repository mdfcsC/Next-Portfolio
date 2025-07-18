import React from 'react';
import SmartLink from './SmartLink';

export default function Footer() {
    return (
        <footer className="flex items-center bg-gradient-to-b from-transparent to-blue-950 pt-11 pb-10 px-4">
            <div className="w-10 flex-shrink-0" />
            <div className="flex-1 flex flex-col items-center">
                <div className="text-center">
                    <p>Created by <SmartLink href="https://github.com/mdfcsC">@mdfcsC</SmartLink></p>
                    <p>Powered by ChatGPT / Claude / Cursor / DeepSeek / Gemini ...</p>
                </div>
            </div>
            <div className="w-10 flex-shrink-0 flex items-center">
                <SmartLink href="/" className="inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-7.5L21 12M4.5 10.5V19a1.5 1.5 0 001.5 1.5h3.75m6 0H18a1.5 1.5 0 001.5-1.5v-8.5m-10.5 10V15a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v4.5" />
                    </svg>
                </SmartLink>
            </div>
        </footer>
    );
}