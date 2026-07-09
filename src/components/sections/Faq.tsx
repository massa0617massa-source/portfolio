"use client";

import { useState } from "react";
import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";

const faqs = [
  {
    question: "料金はどのくらいかかりますか？",
    answer:
      "内容と規模により変わるため、まず無料でお見積もりします。ご予算に合わせたご提案も可能です。",
  },
  {
    question: "納期はどのくらいですか？",
    answer: "LPや小規模サイトで2〜4週間が目安です。お急ぎの場合もご相談ください。",
  },
  {
    question: "打ち合わせはどのように行いますか？",
    answer:
      "ChatWork・Zoom・Google Meetに対応しています。テキストのみのやり取りでも大丈夫です。",
  },
  {
    question: "納品後の修正や保守もお願いできますか？",
    answer:
      "可能です。軽微な修正から月額での保守・運用まで、納品後も継続サポートします。",
  },
  {
    question: "小さな依頼でも大丈夫ですか？",
    answer:
      "歓迎です。「ここだけ直したい」「これ自動化できる？」といったスポット依頼もお受けしています。",
  },
  {
    question: "遠方からの依頼でも大丈夫ですか？",
    answer: "問題ありません。ご相談から納品まですべてオンラインで完結できます。",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" number="05">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 mb-8 uppercase">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-snug">
          よくあるご質問
        </h2>
        <p className="text-sm text-gray-400 mb-20 leading-loose">
          その他のご質問は、お気軽にお問い合わせください。
        </p>
      </AnimatedBlock>

      <AnimatedBlock direction="left" delay={0.1}>
        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span
                    className="text-lg font-light text-gray-400 shrink-0"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "＋"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-gray-500 leading-loose pb-6 pr-10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-gray-100" />
        </div>
      </AnimatedBlock>
    </SectionWrapper>
  );
}
