import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";

const skills = [
  { category: "LANGUAGE", items: ["TypeScript", "Python", "SQL"] },
  { category: "FRONTEND", items: ["Next.js", "React", "Tailwind CSS"] },
  { category: "BACKEND", items: ["Node.js", "FastAPI", "REST API"] },
  { category: "AI / LLM", items: ["Claude API", "OpenAI API", "LangChain"] },
];

export default function About() {
  return (
    <SectionWrapper id="about" number="01">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 mb-8 uppercase">About</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-3 leading-snug">
          佐藤 雅俊
        </h2>
        <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-16">
          電気通信大学 情報理工学域 3類
        </p>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.1}>
        <p className="text-sm text-gray-500 leading-loose mb-16">
          電気通信大学でコンピュータサイエンスを学びながら、<br />
          フルスタックエンジニアとして独立。<br />
          LLM統合・Web開発・業務自動化を中心に、<br />
          「早く・動く・使える」ものを作ることにこだわる。
        </p>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.15}>
        <div className="grid grid-cols-2 gap-6 mb-16 md:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.category}>
              <p className="text-[9px] tracking-[0.3em] text-gray-300 mb-2">{skill.category}</p>
              <ul className="space-y-1">
                {skill.items.map((item) => (
                  <li key={item} className="text-xs text-gray-500">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.2}>
        <div className="border-l-2 border-gray-200 pl-6">
          <p className="text-[10px] tracking-[0.4em] text-gray-400 mb-4 uppercase">Vision</p>
          <p className="text-base font-light text-gray-700 leading-relaxed">
            アイデアを持つ人の、技術的な右腕になる。
          </p>
        </div>
      </AnimatedBlock>
    </SectionWrapper>
  );
}
