"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.body.scrollHeight;
      setVisible(scrolled > total * 0.8);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-12 left-[2vw] z-30 text-[10px] tracking-[0.3em] text-gray-600 hover:text-gray-900 transition-all duration-500 pointer-events-auto ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ writingMode: "vertical-rl" }}
      aria-label="トップへ戻る"
    >
      ↑ TOP
    </button>
  );
}
