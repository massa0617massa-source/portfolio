"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export default function SideNav() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* モバイルヘッダー */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 flex items-center justify-between px-6 bg-white/90 backdrop-blur-sm z-20 border-b border-gray-100">
        <div>
          <p className="text-[9px] tracking-[0.4em] text-gray-500 uppercase">Portfolio</p>
          <h1 className="text-xs font-medium tracking-wider text-gray-900">Masatoshi Sato</h1>
        </div>
        <a href="#contact" className="text-[9px] tracking-[0.3em] border border-gray-900 text-gray-900 px-3 py-2 hover:bg-gray-900 hover:text-white transition-colors duration-300">
          CONTACT
        </a>
      </div>

      {/* デスクトップサイドナビ */}
      <nav className="hidden md:flex fixed left-[10vw] top-0 h-screen w-[20vw] flex-col justify-between py-16 px-8 z-20">
        {/* 名前 */}
        <div>
          <p className="text-[10px] tracking-[0.4em] text-gray-400 mb-1 uppercase">Portfolio</p>
          <h1 className="text-sm font-medium tracking-wider text-gray-900">
            Masatoshi<br />Sato
          </h1>
        </div>

        {/* ナビリンク */}
        <ul className="space-y-5">
          {NAV_ITEMS.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={item.href}
                  className={`text-[10px] tracking-[0.3em] transition-colors duration-300 ${
                    isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <span className="text-accent mr-2" aria-hidden="true">
                      →
                    </span>
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div />
      </nav>
    </>
  );
}
