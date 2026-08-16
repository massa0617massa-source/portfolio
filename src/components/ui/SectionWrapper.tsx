interface SectionWrapperProps {
  id: string;
  number: string;
  /** 内容が画面高を大きく超えるセクション（実績など）は中央寄せをやめて上詰めにする */
  allowOverflow?: boolean;
  children: React.ReactNode;
}

export default function SectionWrapper({
  id,
  number,
  allowOverflow = false,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex flex-col py-20 pr-4 md:py-32 md:pr-16 ${
        allowOverflow ? "justify-start" : "justify-center"
      }`}
    >
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[80px] md:text-[160px] font-bold text-gray-100 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        {number}
      </span>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
