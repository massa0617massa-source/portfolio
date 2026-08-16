import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";

/**
 * 理念。実績（WORKS）の後に置くことで、宣言ではなく「ここまでの仕事の一貫性の証明」として読ませる。
 * サイト内で唯一、明朝体を使うセクション。
 */
export default function Vision() {
  return (
    <SectionWrapper id="vision" number="04">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.4em] text-gray-500 mb-8 uppercase">Vision</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 leading-snug">
          大事にしていること
        </h2>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.1}>
        <p className="font-serif text-2xl md:text-[1.75rem] font-medium text-gray-900 leading-relaxed mb-10">
          「何から始めればいいかわからない」を、
          <br className="hidden md:block" />
          話し終わるまでに「まず、これ」に変える。
        </p>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.15}>
        <div className="border-l-2 border-accent pl-6 max-w-xl">
          <p className="font-serif text-base text-gray-800 leading-loose">
            やりたいことはあるのに、やり方が分からなくて止まる。
            <br />
            自分もずっとそうだったので、その感じはよく分かります。
          </p>
          <p className="font-serif text-base text-gray-800 leading-loose mt-6">
            だから、一歩目はこちらで軽くします。
            <br />
            うまくいかなかったところを、一人に持たせません。
            <br />
            話し終わったときには、次の一手が一つ決まっている状態にします。
          </p>
        </div>
      </AnimatedBlock>
    </SectionWrapper>
  );
}
