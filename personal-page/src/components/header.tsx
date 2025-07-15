import Link from "next/link";

export default function Header() {
    return (
        <header className="absolute w-full z-20 text-white [&_a]:hover:text-gray-300">
            <nav className="container flex items-center justify-between mx-auto p-8">
                <Link className="text-3xl font-bold" href="/">Home</Link>
                <div className="flex space-x-8 text-2xl">
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    );
}