"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";

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
    <nav className="fixed left-[10vw] top-0 h-screen w-[20vw] flex flex-col justify-between py-16 px-8 z-20">
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
                  isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {isActive && (
                  <span className="inline-block w-4 h-px bg-gray-900 mr-2 align-middle" />
                )}
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div />
    </nav>
  );
}
