import Link from 'next/link';
import { ReactNode, AnchorHTMLAttributes } from 'react';

interface SmartLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    className?: string;
}

const SmartLink = ({ href, children, className, ...props }: SmartLinkProps) => {
    // 判断是否为外部链接
    const isExternal = href.startsWith('http') || href.startsWith('https');

    if (isExternal) {
        return (
            <a 
                href={href} 
                target="_blank" // 确保链接在新标签页打开
                rel="noopener noreferrer" // 安全性考虑
                className={`text-blue-300 hover:text-gray-400 hover:underline decoration-2 underline-offset-2 transition-colors duration-200 cursor-pointer ${className ? className : ''}`}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={`hover:text-gray-400 ${className}`} {...props}>
            {children}
        </Link>
    );
};

export default SmartLink;