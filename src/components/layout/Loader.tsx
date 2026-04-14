"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Loader() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!topRef.current || !bottomRef.current || !nameRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 名前フェードイン
      tl.from(nameRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      // 少し待つ
      .to(nameRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        delay: 0.4,
      })
      // 上下の扉が開く
      .to(topRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
      }, "open")
      .to(bottomRef.current, {
        yPercent: 100,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          if (topRef.current) topRef.current.style.display = "none";
          if (bottomRef.current) bottomRef.current.style.display = "none";
        },
      }, "open");
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* 上の扉 */}
      <div
        ref={topRef}
        className="fixed top-0 left-0 right-0 h-1/2 bg-gray-900 z-50 flex items-end justify-center pb-4"
      >
        <p
          ref={nameRef}
          className="text-[11px] tracking-[0.8em] text-gray-400 uppercase"
        >
          Masatoshi Sato
        </p>
      </div>

      {/* 下の扉 */}
      <div
        ref={bottomRef}
        className="fixed bottom-0 left-0 right-0 h-1/2 bg-gray-900 z-50"
      />
    </>
  );
}
