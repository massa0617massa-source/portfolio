import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactForm from "@/components/ui/ContactForm";

export default function Contact() {
  return (
    <SectionWrapper id="contact" number="05">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.4em] text-gray-500 mb-8 uppercase">Contact</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-snug">
          まずは、話してみてください。
        </h2>
        <p className="text-sm text-gray-500 mb-6 leading-loose">
          お仕事のご依頼・ご相談はこちらから。どんな内容でもお気軽に。
        </p>
        <p className="text-[11px] tracking-[0.2em] text-gray-600 mb-4">
          対応時間：8:00 〜 22:00
        </p>
        <p className="text-sm text-gray-500 mb-16">
          フォームが使えない場合は{" "}
          <a
            href="mailto:massa0617massa@gmail.com"
            className="underline underline-offset-4 text-gray-700 hover:text-gray-900 transition-colors"
          >
            massa0617massa@gmail.com
          </a>{" "}
          へ直接どうぞ。
        </p>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.1}>
        <ContactForm />
      </AnimatedBlock>
    </SectionWrapper>
  );
}
