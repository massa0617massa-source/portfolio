import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/layout/SideNav";
import VerticalStrip from "@/components/layout/VerticalStrip";
import CustomCursor from "@/components/layout/CustomCursor";
import Loader from "@/components/layout/Loader";
import BackToTop from "@/components/ui/BackToTop";

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
  title: "Masatoshi Sato | Freelance Engineer",
  description: "MVP開発・AI実装・業務自動化を最短で。スタートアップのゼロイチ開発を支援するフルスタックエンジニア、佐藤雅俊のポートフォリオ。",
  openGraph: {
    title: "Masatoshi Sato | Freelance Engineer",
    description: "MVP開発・AI実装・業務自動化。最短で動くものを作るフルスタックエンジニア、佐藤雅俊のポートフォリオ。",
    url: "https://portfolio-129l6owdc-massa0617massa-sources-projects.vercel.app",
    siteName: "Masatoshi Sato Portfolio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masatoshi Sato | Freelance Engineer",
    description: "MVP開発・AI実装・業務自動化。最短で動くものを作るフルスタックエンジニア。",
    creator: "@tanuki_ai_lab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <Loader />
        <CustomCursor />
        <BackToTop />
        <VerticalStrip />
        <SideNav />
        <main className="ml-0 pt-14 md:pt-0 md:ml-[30vw]">
          {children}
        </main>
      </body>
    </html>
  );
}
