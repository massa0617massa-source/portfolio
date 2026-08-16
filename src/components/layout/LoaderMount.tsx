"use client";

import dynamic from "next/dynamic";

/**
 * ローダーはクライアント側でのみ描画する。
 * SSRのHTMLに黒い全画面パネルを含めないことで、JSが読み込めなかった場合に
 * 画面が黒いままになる事故を構造的に防ぐ。
 */
const Loader = dynamic(() => import("./Loader"), { ssr: false });

export default function LoaderMount() {
  return <Loader />;
}
