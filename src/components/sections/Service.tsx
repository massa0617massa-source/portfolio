import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";

const menuItems = [
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
    category: "AI / AUTOMATION",
    label: "AI・業務自動化",
    items: [
      "業務フローの自動化",
      "スクレイピング・情報収集ツールの構築",
      "リサーチ・データ整理の自動化",
      "AIチャットボットの構築",
      "LLMを活用したシステム実装",
    ],
  },
  {
    category: "SNS",
    label: "SNSコンサル・運用",
    items: [
      "X（Twitter）運用戦略の立案・アドバイス",
      "投稿コンテンツの企画・作成",
      "アカウント分析・改善提案",
      "運用体制のサポート",
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
    <SectionWrapper id="service" number="02">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 mb-8 uppercase">Service</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-snug">できること</h2>
        <p className="text-sm text-gray-400 mb-20 leading-loose">
          ここに書いていないことでも、相談してください。
        </p>
      </AnimatedBlock>

      <div className="space-y-0">
        {menuItems.map((menu, i) => (
          <AnimatedBlock key={menu.category} direction="left" delay={i * 0.08}>
            <div className="border-t border-gray-100 py-8 flex flex-col gap-4 md:flex-row md:gap-8">
              <div className="md:w-32 md:shrink-0">
                <p className="text-[9px] tracking-[0.3em] text-gray-300 mb-1">{menu.category}</p>
                <p className="text-sm font-medium text-gray-900">{menu.label}</p>
              </div>
              <ul className="space-y-2 flex-1">
                {menu.items.map((item) => (
                  <li key={item} className="text-sm text-gray-500 flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0 mt-2" />
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
