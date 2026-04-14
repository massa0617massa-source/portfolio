import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" number="01">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 mb-8 uppercase">About</p>
        <h2 className="text-3xl font-light text-gray-900 mb-2 leading-snug">
          佐藤 雅俊
        </h2>
        <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-16">
          電気通信大学 情報理工学域 3類
        </p>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.1}>
        <p className="text-sm text-gray-500 leading-loose mb-16">
          作ったものが実際に誰かに使われる、それが一番うれしい。<br />
          自分の力で本物を作り、関わる人の役に立ちながら成長したい。<br />
          そのシンプルな気持ちで動いています。
        </p>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.2}>
        <div className="border-l-2 border-gray-200 pl-6">
          <p className="text-[10px] tracking-[0.4em] text-gray-400 mb-4 uppercase">Vision</p>
          <p className="text-base font-light text-gray-700 leading-relaxed">
            「迷ったらとりあえず聞いてみよう」<br />
            そう思ってもらえる存在でいたい。
          </p>
        </div>
      </AnimatedBlock>
    </SectionWrapper>
  );
}
