"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedBlockProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
  stagger?: boolean;
  className?: string;
}

export default function AnimatedBlock({
  children,
  direction = "left",
  delay = 0,
  stagger = false,
  className = "",
}: AnimatedBlockProps) {
  const { ref } = useScrollAnimation({ direction, delay, stagger });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
