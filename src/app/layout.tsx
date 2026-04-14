import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/layout/SideNav";
import VerticalStrip from "@/components/layout/VerticalStrip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Masatoshi Sato | Portfolio",
  description: "Webデザイン・コピーライティング・SNS運用のフリーランス、佐藤雅俊のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <VerticalStrip />
        <SideNav />
        <main className="ml-[30vw]">
          {children}
        </main>
      </body>
    </html>
  );
}
