import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";

const works = [
  {
    number: "01",
    title: "株管理・通知LINEボット",
    tags: ["Node.js", "LINE Messaging API", "株価API", "タスクスケジューラー", "自動化"],
    description:
      "MACD・RSIなどのテクニカル指標を自動分析し、ゴールデンクロスなど注目すべき状態になるとLINEで通知するボットを開発。また、LINEで「〇〇を△株買った」と打つだけで損益・保有状況を自動計算・記録。毎日チャートを確認する手間をなくし、チャット感覚で株を管理できる仕組みを構築。",
    result: "チャート確認工数をゼロに削減。1日30分の作業を自動化。",
    links: { github: "", demo: "" },
  },
  {
    number: "02",
    title: "朝のニュース自動まとめ配信",
    tags: ["Node.js", "RSS / News API", "LINE Messaging API", "Cron", "自動化"],
    description:
      "厳選した情報源からニュースを自動収集・要約し、毎朝LINEに配信。ニュースを自分で調べる時間をなくし、最小限の手間で必要な情報だけを受け取れる仕組みを開発。",
    result: "毎朝15〜20分の情報収集を完全自動化。",
    links: { github: "", demo: "" },
  },
  {
    number: "03",
    title: "Webサイト・LP制作",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "個人・小規模ビジネス向けのシンプルなコーポレートサイトやランディングページを制作。デザインから実装・公開まで一貫して対応。",
    result: "複数案件のデザイン〜デプロイを単独で完遂。",
    links: { github: "", demo: "" },
  },
  {
    number: "04",
    title: "SNSアカウント改善コンサル",
    tags: ["X（Twitter）", "アカウント分析", "コンサルティング"],
    description:
      "X（Twitter）のプロフィール・投稿構成・発信内容を分析し、フォロワーに刺さる運用に改善提案。数字をもとに、伸びるアカウントの作り方をアドバイス。",
    result: "改善提案後3ヶ月でフォロワー数・エンゲージメント率が向上。",
    links: { github: "", demo: "" },
  },
  {
    number: "05",
    title: "データ収集・レポート自動化",
    tags: ["Python", "スクレイピング", "Google Sheets API", "自動化"],
    description:
      "特定サイトから必要な情報を定期的に収集し、スプレッドシートやドキュメントに自動でまとめる仕組みを構築。リサーチや情報整理にかかる時間を大幅に削減。",
    result: "週次レポート作成を手作業ゼロに。実稼働中。",
    links: { github: "", demo: "" },
  },
];

export default function Works() {
  return (
    <SectionWrapper id="works" number="03">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 mb-8 uppercase">Works</p>
        <h2 className="text-3xl font-light text-gray-900 mb-4 leading-snug">実績</h2>
        <p className="text-sm text-gray-400 mb-16 leading-loose">
          開発・自動化・AI実装の実績を紹介します。
        </p>
      </AnimatedBlock>

      <div className="space-y-0">
        {works.map((work, i) => (
          <AnimatedBlock key={work.number} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
            <div className="group border-t border-gray-100 py-10 hover:bg-gray-50 transition-colors duration-300 -mx-4 px-4">
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] tracking-widest text-gray-300 group-hover:text-gray-400 transition-colors duration-300">{work.number}</span>
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
              <h3 className="text-base font-medium text-gray-900 mb-3">{work.title}</h3>
              <p className="text-sm text-gray-500 leading-loose">{work.description}</p>
              {work.result && (
                <p className="text-xs text-gray-400 mt-3 border-l border-gray-200 pl-3 leading-relaxed">
                  {work.result}
                </p>
              )}
              {(work.links.github || work.links.demo) && (
                <div className="flex gap-4 mt-4">
                  {work.links.github && (
                    <a
                      href={work.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] tracking-wider text-gray-400 hover:text-gray-900 transition-colors duration-300"
                    >
                      GitHub →
                    </a>
                  )}
                  {work.links.demo && (
                    <a
                      href={work.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] tracking-wider text-gray-400 hover:text-gray-900 transition-colors duration-300"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              )}
            </div>
          </AnimatedBlock>
        ))}
        <div className="border-t border-gray-100" />
      </div>
    </SectionWrapper>
  );
}
