import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProfilePhoto from "@/components/ui/ProfilePhoto";

const skills = [
  { category: "LANGUAGE", items: ["TypeScript", "Python", "SQL"] },
  { category: "FRONTEND", items: ["Next.js", "React", "Tailwind CSS"] },
  { category: "BACKEND", items: ["Node.js", "Hono", "Cloudflare Workers"] },
  { category: "AI / LLM", items: ["Claude API", "マルチエージェント", "RAG"] },
];

const timeline = [
  { year: "2026", body: "個人事業主として開業。AI開発・業務自動化を軸に受託" },
  { year: "2028", body: "法人化を予定" },
];

export default function About() {
  return (
    <SectionWrapper id="about" number="01">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.4em] text-gray-500 mb-8 uppercase">About</p>
        <div className="flex items-center gap-6 mb-14">
          <ProfilePhoto size={104} />
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-3 leading-snug">
              佐藤 雅俊
            </h2>
            <p className="text-[11px] tracking-[0.25em] text-gray-500">
              静岡出身
              <br className="md:hidden" />
              ｜電気通信大学でプログラミングと情報セキュリティを学ぶ
            </p>
          </div>
        </div>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.1}>
        <div className="text-[15px] text-gray-800 leading-loose mb-14 max-w-2xl space-y-6">
          <p className="text-lg font-medium text-gray-900 leading-relaxed">
            社交ダンス日本一になるまでに身に着けた集中力や人前でのアピール力を、AIに注ぎ、多くの企業のAI活用をリードする。
          </p>
          <p>
            AIエージェント基盤、ECモールの在庫自動化、LINE配信基盤、AI×SEOの記事制作パイプラインを、要件を決めるところから運用まで一人で作成。
          </p>
        </div>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.15}>
        <div className="mb-14 max-w-xl">
          <p className="text-[10px] tracking-[0.25em] text-gray-500 mb-4 uppercase">Timeline</p>
          <ul className="space-y-3">
            {timeline.map((row) => (
              <li key={row.year} className="flex gap-5 text-sm">
                <span className="w-16 shrink-0 text-gray-500 tabular-nums">{row.year}</span>
                <span className="text-gray-700 leading-relaxed">{row.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.2}>
        <div>
          <p className="text-[10px] tracking-[0.25em] text-gray-500 mb-4 uppercase">Skills</p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.category}>
                <p className="text-[10px] tracking-[0.25em] text-gray-500 mb-2">{skill.category}</p>
                <ul className="space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="text-xs text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedBlock>
    </SectionWrapper>
  );
}
