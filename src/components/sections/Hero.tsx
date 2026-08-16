"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import ProfilePhoto from "@/components/ui/ProfilePhoto";

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
      <div data-fade className="mb-8 flex items-start gap-5">
        <ProfilePhoto size={92} />
        <div>
          <p className="text-sm font-medium tracking-[0.15em] text-gray-900">
            佐藤 雅俊
            <span className="text-[10px] tracking-[0.3em] text-gray-500 ml-3 align-middle uppercase">
              Masatoshi Sato
            </span>
          </p>
          <p className="text-[11px] tracking-[0.2em] text-gray-600 mt-2">
            フルスタックエンジニア｜AI・Web・業務自動化
          </p>
          <p className="text-[11px] tracking-[0.2em] text-gray-600 mt-1">
            電気通信大学 情報理工学域｜プログラミング・情報セキュリティを専攻
          </p>
        </div>
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
          <span data-reveal className="block text-sm text-gray-700 leading-loose">
            AI導入の相談・社内レクチャー · AI実装 · 業務自動化 · Web開発
          </span>
        </span>
        <span className="block overflow-hidden">
          <span data-reveal className="block text-sm text-gray-700 leading-loose">
            ── 要件を決めるところから、動いて回るところまで。
          </span>
        </span>
        <span className="block overflow-hidden">
          <span
            data-reveal
            className="block text-sm text-gray-700 leading-loose mt-3"
          >
            <span className="text-accent mr-1.5" aria-hidden="true">
              →
            </span>
            平日 8:00〜22:00、日中はすぐに返信します。
          </span>
        </span>
      </div>

      <div data-fade className="flex gap-4 flex-wrap">
        <a
          href="#works"
          className="inline-block text-xs tracking-[0.2em] border border-gray-400 text-gray-700 px-8 py-4 hover:border-gray-900 hover:text-gray-900 transition-colors duration-300 w-fit"
        >
          実績を見る
        </a>
        <a
          href="#contact"
          className="inline-block text-xs tracking-[0.2em] border border-gray-900 bg-gray-900 text-white px-8 py-4 hover:bg-white hover:text-gray-900 transition-colors duration-300 w-fit"
        >
          相談する
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
