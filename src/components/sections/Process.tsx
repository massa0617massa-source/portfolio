import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "ご相談（無料）",
    description: "課題ややりたいことを、ざっくりで大丈夫なのでお聞かせください。",
  },
  {
    number: "02",
    title: "要件整理・お見積もり",
    description: "内容を整理し、費用と納期をご提案。納得いただいてから着手します。",
  },
  {
    number: "03",
    title: "制作・実装",
    description: "進捗を随時共有しながら制作。平日日中は迅速にレスポンスします。",
  },
  {
    number: "04",
    title: "納品・公開",
    description: "動作確認のうえ納品。公開・リリース作業まで対応します。",
  },
  {
    number: "05",
    title: "保守・運用（任意）",
    description: "公開後の更新・改善も継続してサポートできます。",
  },
];

export default function Process() {
  return (
    <SectionWrapper id="process" number="04">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 mb-8 uppercase">Process</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-snug">
          ご依頼の流れ
        </h2>
        <p className="text-sm text-gray-400 mb-20 leading-loose">
          ご相談から納品まで、すべてオンラインで完結できます。
        </p>
      </AnimatedBlock>

      <AnimatedBlock
        direction="left"
        stagger
        className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6"
      >
        {steps.map((step) => (
          <div key={step.number}>
            <p className="text-[10px] tracking-widest text-gray-300 mb-3">{step.number}</p>
            <div className="w-8 h-px bg-gray-300 mb-4" />
            <h3 className="text-sm font-medium text-gray-900 mb-3">{step.title}</h3>
            <p className="text-xs text-gray-500 leading-loose">{step.description}</p>
          </div>
        ))}
      </AnimatedBlock>
    </SectionWrapper>
  );
}
