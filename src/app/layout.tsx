import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Portfolio | Your Name",
  description: "Professional portfolio showcasing expertise in Generative AI and Machine Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
} 