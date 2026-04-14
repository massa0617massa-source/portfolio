import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Masatoshi Sato | Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        {/* 上部ライン */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "40px", height: "1px", background: "#d1d5db" }} />
          <span style={{ fontSize: "11px", letterSpacing: "0.4em", color: "#9ca3af", textTransform: "uppercase" }}>
            Freelance Engineer
          </span>
        </div>

        {/* メインコピー */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "52px", fontWeight: 300, color: "#111827", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
            「これも頼めますか？」
          </div>
          <div style={{ fontSize: "52px", fontWeight: 300, color: "#111827", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
            そういう依頼、大歓迎です。
          </div>
        </div>

        {/* 下部：名前 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ fontSize: "22px", fontWeight: 400, color: "#111827", letterSpacing: "0.05em" }}>
            Masatoshi Sato
          </span>
          <div style={{ display: "flex", gap: "16px" }}>
            {["Web開発", "AI・自動化", "SNS運用"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#9ca3af",
                  border: "1px solid #e5e7eb",
                  padding: "6px 12px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
