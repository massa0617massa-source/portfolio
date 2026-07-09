"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const LINES = [
  "アイデアを、動くものにする。",
  "",
  "MVP開発 · AI実装 · 自動化",
  "── 最短で形にします。",
];

const FULL_TEXT = LINES.join("\n");

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const labelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
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
      <div ref={labelRef} className="mb-8 opacity-0">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 uppercase">Full-Stack Engineer</p>
        <p className="text-[10px] tracking-[0.4em] text-gray-300 uppercase mt-1">AI × Web × Automation</p>
      </div>

      <div className="mb-12">
        {typedLines.map((line, i) =>
          line === "" ? (
            <br key={i} />
          ) : i < 1 ? (
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

      <div ref={btnRef} className="flex gap-4 flex-wrap opacity-0">
        <a
          href="#works"
          className="inline-block text-[10px] tracking-[0.4em] border border-gray-300 text-gray-600 px-8 py-4 hover:border-gray-900 hover:text-gray-900 transition-colors duration-300 w-fit"
        >
          VIEW WORKS
        </a>
        <a
          href="#contact"
          className="inline-block text-[10px] tracking-[0.4em] border border-gray-900 text-gray-900 px-8 py-4 hover:bg-gray-900 hover:text-white transition-colors duration-300 w-fit"
        >
          CONTACT
        </a>
      </div>
    </section>
  );
}
