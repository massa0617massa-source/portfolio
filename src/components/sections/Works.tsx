import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";
import WorkThumbnail, { ThumbnailKind } from "@/components/ui/WorkThumbnail";

interface Work {
  number: string;
  title: string;
  client: string;
  thumbnail: ThumbnailKind;
  tags: string[];
  description: string;
  result: string;
}

const works: Work[] = [
  {
    number: "01",
    title: "LINE公式×Lステップ構築",
    client: "オンラインスクール運営者様",
    thumbnail: "lineBuild",
    tags: ["LINE公式アカウント", "Lステップ", "配信シナリオ設計"],
    description:
      "LINE公式アカウントの開設からLステップの初期設定、4段階のステップ配信シナリオ、リッチメニュー、予約ツール連携まで一括構築。",
    result: "構築から納品・操作ガイド作成まで一貫対応。",
  },
  {
    number: "02",
    title: "LINE配信基盤の受託開発",
    client: "販売事業者様",
    thumbnail: "linePlatform",
    tags: ["ステップ配信エンジン", "LIFF", "React", "CRM"],
    description:
      "Lステップ相当の配信基盤をフルスクラッチ開発。ステップ配信エンジン、タグ別セグメント配信、リッチメニュー自動切替、LIFFフォーム、React製CRM管理画面。",
    result: "月額ツールなしで自社運用できる配信基盤を実現。",
  },
  {
    number: "03",
    title: "宿泊施設運営の自動化システム",
    client: "宿泊施設運営会社様",
    thumbnail: "hospitality",
    tags: ["LINE Messaging API", "LIFF", "GAS", "Cloudflare D1"],
    description:
      "民泊8物件の運営を自動化。予約カレンダー（iCal）連携による清掃スタッフへのLINE自動通知、勤怠打刻から請求書自動生成までを一気通貫で構築。",
    result: "8物件分の連絡・請求業務を自動化。現在も稼働中。",
  },
  {
    number: "04",
    title: "ECモール在庫調整システム",
    client: "EC事業会社様",
    thumbnail: "inventory",
    tags: ["Cloudflare Workers", "Hono", "Supabase", "楽天・Yahoo!・eBay API"],
    description:
      "楽天・Yahoo!ショッピング・eBayの複数モールをAPI連携し、在庫を自動調整するシステムを開発。Cloudflare Workers/Pages + Hono + Supabase構成。",
    result: "複数モールの在庫管理を一元化。現在も稼働中。",
  },
  {
    number: "05",
    title: "AI活用SEO最適化ツール",
    client: "EC事業会社様",
    thumbnail: "seo",
    tags: ["Cloudflare Workers", "AI API連携", "SEO"],
    description: "EC商品ページのSEOをAIで分析・最適化するツールを開発。",
    result: "商品ページ改善の工数を大幅削減。現在も稼働中。",
  },
];

export default function Works() {
  return (
    <SectionWrapper id="works" number="03">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 mb-8 uppercase">Works</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-snug">実績</h2>
        <p className="text-sm text-gray-400 mb-20 leading-loose">
          受託開発の実績を紹介します。守秘義務のため、クライアント名は業種表記としています。
        </p>
      </AnimatedBlock>

      <div className="space-y-0">
        {works.map((work, i) => (
          <AnimatedBlock key={work.number} direction="left" delay={i * 0.1}>
            <div className="group border-t border-gray-100 py-10 hover:bg-gray-50 transition-colors duration-300 -mx-4 px-4">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-[40%] md:shrink-0">
                  <div className="overflow-hidden border border-gray-100">
                    <div className="transition-transform duration-[600ms] ease-out group-hover:scale-105">
                      <WorkThumbnail kind={work.thumbnail} />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] tracking-widest text-gray-300 group-hover:text-gray-400 transition-colors duration-300">
                      {work.number}
                    </span>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] tracking-wider text-gray-400 border border-gray-200 px-2 py-1 group-hover:border-gray-400 group-hover:text-gray-600 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">{work.title}</h3>
                  <p className="text-[10px] tracking-[0.2em] text-gray-400 mb-3">{work.client}</p>
                  <p className="text-sm text-gray-500 leading-loose">{work.description}</p>
                  <p className="text-xs text-gray-400 mt-3 border-l border-gray-200 pl-3 leading-relaxed">
                    {work.result}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedBlock>
        ))}
        <div className="border-t border-gray-100" />
      </div>
    </SectionWrapper>
  );
}
