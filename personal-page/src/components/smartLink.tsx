// components/SmartLink.tsx
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
                target="_blank" 
                rel="noopener noreferrer"
                className={className}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={className} {...props}>
            {children}
        </Link>
    );
};

export default SmartLink;