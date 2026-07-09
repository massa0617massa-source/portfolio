import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactForm from "@/components/ui/ContactForm";

export default function Contact() {
  return (
    <SectionWrapper id="contact" number="06">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 mb-8 uppercase">Contact</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-snug">
          まずは、話してみてください。
        </h2>
        <p className="text-sm text-gray-500 mb-6 leading-loose">
          お仕事のご依頼・ご相談はこちらから。どんな内容でもお気軽に。
        </p>
        <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-16">
          対応時間：8:00 〜 22:00
        </p>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.1}>
        <ContactForm />
      </AnimatedBlock>
    </SectionWrapper>
  );
}
