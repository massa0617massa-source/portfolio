"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { STRIP_TEXT } from "@/lib/constants";

const REPEATED_TEXT = Array(12).fill(STRIP_TEXT).join("");

export default function VerticalStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stripRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(stripRef.current, {
        x: "32vw",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="hidden md:flex fixed left-0 top-0 h-screen w-[40vw] z-10 pointer-events-none items-center"
      style={{
        WebkitMaskImage: "linear-gradient(to right, black 0%, black 10vw, transparent 10vw, transparent 20vw, black 20vw, black 27vw, transparent 27vw, transparent 100%)",
        maskImage: "linear-gradient(to right, black 0%, black 10vw, transparent 10vw, transparent 20vw, black 20vw, black 27vw, transparent 27vw, transparent 100%)",
      }}
      aria-hidden="true"
    >
      <div
        ref={stripRef}
        className="whitespace-nowrap text-[10px] tracking-[0.3em] text-gray-300 font-light"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {REPEATED_TEXT}
      </div>
    </div>
  );
}
