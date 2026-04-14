"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface UseScrollAnimationOptions {
  direction?: "left" | "right" | "up";
  delay?: number;
  stagger?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { direction = "left", delay = 0, stagger = false } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const xFrom = direction === "left" ? -60 : direction === "right" ? 60 : 0;
    const yFrom = direction === "up" ? 40 : 0;

    const ctx = gsap.context(() => {
      if (stagger && ref.current) {
        gsap.from(ref.current.children, {
          opacity: 0,
          x: xFrom,
          y: yFrom,
          duration: 0.7,
          delay,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      } else {
        gsap.from(ref.current, {
          opacity: 0,
          x: xFrom,
          y: yFrom,
          duration: 0.7,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [direction, delay, stagger]);

  return { ref };
}

export function useActiveSection(sectionIds: string[]) {
  const activeSection = useRef<string>(sectionIds[0]);

  useEffect(() => {
    const triggers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      return ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => { activeSection.current = id; },
        onEnterBack: () => { activeSection.current = id; },
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, [sectionIds]);

  return activeSection;
}
