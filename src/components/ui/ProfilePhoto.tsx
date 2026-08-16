"use client";

interface ProfilePhotoProps {
  /** 正方形の一辺（px） */
  size?: number;
  className?: string;
}

/** 読み込めなかった画像を隠す。背面のモノグラムがそのまま見える */
function hideIfBroken(img: HTMLImageElement | null) {
  if (!img) return;
  if (img.complete && img.naturalWidth === 0) img.style.display = "none";
}

/**
 * 顔写真。public/profile.jpg を置くと表示される。
 * 未設置・読み込み失敗時は背面のモノグラムにフォールバックするので、写真がなくても崩れない。
 */
export default function ProfilePhoto({ size = 112, className = "" }: ProfilePhotoProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border border-accent/40 bg-accent-soft ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center text-accent tracking-[0.15em]"
        style={{ fontSize: Math.round(size / 5) }}
        aria-hidden="true"
      >
        MS
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={hideIfBroken}
        src="/profile.jpg"
        alt="佐藤雅俊"
        width={size}
        height={size}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        className="relative h-full w-full object-cover"
      />
    </div>
  );
}
