import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/layout/SideNav";
import VerticalStrip from "@/components/layout/VerticalStrip";
import CustomCursor from "@/components/layout/CustomCursor";
import LoaderMount from "@/components/layout/LoaderMount";
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

/** 理念（VISION）だけに使う明朝。事実はゴシック、想いは明朝という役割分担 */
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif-jp",
  weight: ["400", "500"],
});

const SITE_DESCRIPTION =
  "AI実装・業務自動化・Web開発を、要件を決めるところから運用まで一人で担当します。電気通信大学でプログラミングと情報セキュリティを学ぶフルスタックエンジニア、佐藤雅俊のポートフォリオ。";

export const metadata: Metadata = {
  metadataBase: new URL("https://masatoshi-sato-official.vercel.app"),
  title: "佐藤雅俊 | フルスタックエンジニア（AI・Web・業務自動化）",
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "佐藤雅俊 | フルスタックエンジニア（AI・Web・業務自動化）",
    description: SITE_DESCRIPTION,
    url: "https://masatoshi-sato-official.vercel.app",
    siteName: "佐藤雅俊 ポートフォリオ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "佐藤雅俊 | フルスタックエンジニア（AI・Web・業務自動化）",
    description:
      "AI実装・業務自動化・Web開発を、要件定義から運用まで一人で。平日日中はすぐに返信します。",
    creator: "@tanuki_ai_lab",
  },
};

/** 検索エンジンに人物として認識させる構造化データ */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "佐藤 雅俊",
    alternateName: "Masatoshi Sato",
    jobTitle: "フルスタックエンジニア",
    description: SITE_DESCRIPTION,
    url: "https://masatoshi-sato-official.vercel.app",
    email: "mailto:massa0617massa@gmail.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "電気通信大学",
    },
    knowsAbout: [
      "AIエージェント開発",
      "業務自動化",
      "Web開発",
      "LINE Messaging API",
      "SEO",
    ],
    sameAs: [
      "https://x.com/tanuki_ai_lab",
      "https://github.com/massa0617massa-source",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <body className="bg-white text-gray-900 antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LoaderMount />
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
