"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current!.children, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-32 pr-16">
      <div ref={containerRef}>
        <p className="text-[10px] tracking-[0.5em] text-gray-400 mb-8 uppercase">
          Freelance Engineer
        </p>
        <h2 className="text-4xl font-light leading-snug text-gray-900 mb-8 tracking-tight">
          「これも頼めますか？」<br />
          そういう依頼、大歓迎です。
        </h2>
        <p className="text-sm text-gray-500 leading-loose max-w-sm mb-12">
          Web開発・AI活用・SNS運用まで、<br />
          困ったことがあればまず気軽に声をかけてください。
        </p>
        <a
          href="#contact"
          className="inline-block text-[10px] tracking-[0.4em] border border-gray-900 text-gray-900 px-8 py-4 hover:bg-gray-900 hover:text-white transition-colors duration-300"
        >
          CONTACT
        </a>
      </div>
    </section>
  );
}
