import SmartLink from "./smartLink";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-transparent to-blue-950 pt-13 pb-10 px-4">
            <div className="text-center">
                <p>Created by <SmartLink href="https://github.com/mdfcsC">@mdfcsC</SmartLink></p>
                <p>Powered by ChatGPT / Claude / Cursor / DeepSeek / Gemini ...</p>
            </div>
        </footer>
    );
}