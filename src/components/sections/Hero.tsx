"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const LINES = [
  "「これも頼めますか？」",
  "そういう依頼、大歓迎です。",
  "",
  "Web開発・AI活用・SNS運用まで、",
  "困ったことがあればまず気軽に声をかけてください。",
];

const FULL_TEXT = LINES.join("\n");

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1;
        const next = FULL_TEXT.slice(0, indexRef.current);
        setTyped(next);
        if (indexRef.current >= FULL_TEXT.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 60);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!done) return;
    gsap.from([labelRef.current, btnRef.current], {
      opacity: 0,
      y: 10,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, [done]);

  const typedLines = typed.split("\n");

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-20 pr-4 md:py-32 md:pr-16">
      <p ref={labelRef} className="text-[10px] tracking-[0.5em] text-gray-400 mb-8 uppercase opacity-0">
        Freelance Engineer
      </p>

      <div className="mb-12">
        {typedLines.map((line, i) =>
          line === "" ? (
            <br key={i} />
          ) : i < 2 ? (
            <p key={i} className="text-3xl md:text-4xl font-light leading-snug text-gray-900 tracking-tight">
              {line}{i === typedLines.length - 1 && !done && <span className="animate-pulse">|</span>}
            </p>
          ) : (
            <p key={i} className="text-sm text-gray-500 leading-loose">
              {line}{i === typedLines.length - 1 && !done && <span className="animate-pulse">|</span>}
            </p>
          )
        )}
      </div>

      <a
        ref={btnRef}
        href="#contact"
        className="inline-block text-[10px] tracking-[0.4em] border border-gray-900 text-gray-900 px-8 py-4 hover:bg-gray-900 hover:text-white transition-colors duration-300 opacity-0 w-fit"
      >
        CONTACT
      </a>
    </section>
  );
}
