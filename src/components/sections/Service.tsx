import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";

const menuItems = [
  {
    category: "AI CONSULTING",
    label: "AI導入の相談・社内レクチャー",
    items: [
      "「何から始めるか」の整理（業務の棚卸しと優先順位づけ）",
      "使うAIツールの選定・比較（自社に合うものを一緒に決める）",
      "社内向けの勉強会・使い方レクチャー",
      "既存の業務フローへのAIの組み込み方の設計",
      "導入したあと、実際に使われるようにするまでの伴走",
    ],
  },
  {
    category: "AI / AUTOMATION",
    label: "AI実装・業務自動化",
    items: [
      "業務フローの自動化",
      "スクレイピング・情報収集ツールの構築",
      "リサーチ・データ整理の自動化",
      "AIチャットボットの構築",
      "LLMを活用したシステム実装",
    ],
  },
  {
    category: "DEVELOP",
    label: "Web・アプリ開発",
    items: [
      "Webサイト・LPの制作",
      "Webアプリケーション開発",
      "モバイルアプリ開発",
      "既存サイトの改修・機能追加",
    ],
  },
  {
    category: "LINE",
    label: "LINE公式・Lステップ構築",
    items: [
      "LINE公式アカウントの開設・初期構築",
      "Lステップの構築（ステップ配信・リッチメニュー・流入経路分析）",
      "配信シナリオの設計・改善",
      "予約ツール・外部サービスとの連携",
      "Lステップ相当の独自配信基盤の受託開発",
    ],
  },
  {
    category: "OTHER",
    label: "その他・相談",
    items: [
      "「これ頼めますか？」はまず聞いてください",
      "小さな依頼・スポット対応も歓迎",
      "技術的な相談・壁打ちだけでもOK",
    ],
  },
];

export default function Service() {
  return (
    <SectionWrapper id="range" number="03">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.4em] text-gray-500 mb-8 uppercase">Range</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-snug">
          守備範囲
        </h2>
        <p className="text-sm text-gray-600 mb-14 leading-loose">
          「AIで何かできないか」の相談から、設計・実装・公開・運用まで。分業せず、一人で通して担当します。
          <br className="hidden md:block" />
          作るものが決まっていない段階の相談が、いちばん歓迎です。
        </p>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.05}>
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-16">
          {["要件定義", "設計", "実装", "公開", "運用・改善"].map((step, i, arr) => (
            <li key={step} className="flex items-center gap-3">
              <span className="text-xs text-gray-700 border border-gray-300 px-3 py-1.5">
                {step}
              </span>
              {i < arr.length - 1 && (
                <span className="text-accent text-xs" aria-hidden="true">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </AnimatedBlock>

      <div className="space-y-0">
        {menuItems.map((menu, i) => (
          <AnimatedBlock key={menu.category} direction="left" delay={i * 0.08}>
            <div className="border-t border-gray-100 py-8 flex flex-col gap-4 md:flex-row md:gap-8">
              <div className="md:w-36 md:shrink-0">
                <p className="text-[10px] tracking-[0.25em] text-gray-500 mb-1">{menu.category}</p>
                <p className="text-sm font-medium text-gray-900">{menu.label}</p>
              </div>
              <ul className="space-y-2 flex-1">
                {menu.items.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedBlock>
        ))}
        <div className="border-t border-gray-100" />
      </div>
    </SectionWrapper>
  );
}
