import "./globals.css";
import Footer from "@/components/footer";
import { Gantari } from "next/font/google";

const MyFont = Gantari({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={MyFont.className}>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
