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
  { year: "在学中", body: "電気通信大学 情報理工学域。プログラミングと情報セキュリティを学ぶ" },
  { year: "2026", body: "個人事業主として開業。AI開発・業務自動化を中心に受託" },
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
              電気通信大学 情報理工学域
              <br className="md:hidden" />
              ｜プログラミング・情報セキュリティを専攻
            </p>
          </div>
        </div>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.1}>
        <div className="text-sm text-gray-700 leading-loose mb-14 max-w-xl space-y-5">
          <p>
            大学でプログラミングと情報セキュリティを学びながら、フルスタックエンジニアとして独立しました。
            AIエージェントの開発、業務の自動化、LINEを使った仕組みづくり、Webサイト・アプリの制作まで、
            要件を決めるところから運用まで一人で担当しています。
          </p>
          <p>
            平日の日中に動けるので、決めたいことを翌日まで持ち越さずに済みます。
            会社員の副業では難しい時間帯にも返事ができるのが、いまの強みだと思っています。
          </p>
          <p>
            苦手なことも先に書いておきます。マス向けの派手なマーケティングは得意ではありません。
            目の前の一人と話して、その人の状況に合わせて作るほうが、ずっと得意です。
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
