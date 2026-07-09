"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const MARQUEE_TEXT = "MASATOSHI SATO — FULL-STACK ENGINEER — ";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lines = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const fades = root.querySelectorAll<HTMLElement>("[data-fade]");

    const ctx = gsap.context(() => {
      gsap.set(lines, { yPercent: 110 });
      gsap.set(fades, { opacity: 0, y: 10 });
    }, root);

    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      ctx.add(() => {
        const tl = gsap.timeline({ delay: 0.6 });
        tl.to(lines, {
          yPercent: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
        }).to(
          fades,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.5"
        );
      });
    };

    window.addEventListener("loader:done", play);
    const fallback = setTimeout(play, 4000);

    return () => {
      window.removeEventListener("loader:done", play);
      clearTimeout(fallback);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center py-20 pr-4 md:py-32 md:pr-16 overflow-hidden"
    >
      <div data-fade className="mb-8">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 uppercase">
          Full-Stack Engineer
        </p>
        <p className="text-[10px] tracking-[0.4em] text-gray-300 uppercase mt-1">
          AI × Web × Automation
        </p>
      </div>

      <h2 className="mb-10">
        <span className="block overflow-hidden">
          <span
            data-reveal
            className="block text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.15] tracking-tight text-gray-900"
          >
            アイデアを、
          </span>
        </span>
        <span className="block overflow-hidden">
          <span
            data-reveal
            className="block text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.15] tracking-tight text-gray-900"
          >
            <span className="text-stroke-dark">動くもの</span>にする。
          </span>
        </span>
      </h2>

      <div className="mb-12">
        <span className="block overflow-hidden">
          <span data-reveal className="block text-sm text-gray-500 leading-loose">
            MVP開発 · AI実装 · 自動化
          </span>
        </span>
        <span className="block overflow-hidden">
          <span data-reveal className="block text-sm text-gray-500 leading-loose">
            ── 最短で形にします。
          </span>
        </span>
      </div>

      <div data-fade className="flex gap-4 flex-wrap">
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

      {/* マーキー帯 */}
      <div
        className="absolute bottom-6 left-0 right-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="animate-marquee flex whitespace-nowrap will-change-transform">
          <span className="text-stroke-light text-5xl md:text-7xl font-medium tracking-wider shrink-0">
            {MARQUEE_TEXT.repeat(4)}
          </span>
          <span className="text-stroke-light text-5xl md:text-7xl font-medium tracking-wider shrink-0">
            {MARQUEE_TEXT.repeat(4)}
          </span>
        </div>
      </div>
    </section>
  );
}
