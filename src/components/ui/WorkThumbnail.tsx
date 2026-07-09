export type ThumbnailKind =
  | "inventory"
  | "seo"
  | "hospitality"
  | "lineBuild"
  | "linePlatform";

interface WorkThumbnailProps {
  kind: ThumbnailKind;
}

/* ECモール在庫調整: テーブル＋棒グラフのダッシュボード線画 */
function InventoryMock() {
  return (
    <>
      <rect x="16" y="14" width="288" height="172" rx="4" fill="#ffffff" stroke="#d1d5db" />
      <line x1="16" y1="42" x2="304" y2="42" stroke="#e5e7eb" />
      <circle cx="32" cy="28" r="4" fill="#e5e7eb" />
      <rect x="44" y="24" width="56" height="8" rx="2" fill="#e5e7eb" />
      <rect x="252" y="22" width="40" height="12" rx="2" fill="#f3f4f6" stroke="#d1d5db" />
      {/* 左: 在庫テーブル */}
      <rect x="30" y="56" width="152" height="116" rx="3" fill="none" stroke="#e5e7eb" />
      <line x1="30" y1="78" x2="182" y2="78" stroke="#e5e7eb" />
      <rect x="38" y="64" width="48" height="7" rx="2" fill="#e5e7eb" />
      <rect x="120" y="64" width="28" height="7" rx="2" fill="#f3f4f6" />
      {[92, 112, 132, 152].map((y) => (
        <g key={y}>
          <rect x="38" y={y - 4} width="60" height="6" rx="2" fill="#f3f4f6" />
          <rect x="120" y={y - 4} width="24" height="6" rx="2" fill="#e5e7eb" />
          <rect x="154" y={y - 4} width="16" height="6" rx="2" fill="#f3f4f6" />
          <line x1="30" y1={y + 8} x2="182" y2={y + 8} stroke="#f3f4f6" />
        </g>
      ))}
      {/* 右: 棒グラフ */}
      <rect x="196" y="56" width="96" height="116" rx="3" fill="none" stroke="#e5e7eb" />
      <line x1="208" y1="160" x2="282" y2="160" stroke="#d1d5db" />
      <rect x="212" y="120" width="12" height="40" fill="#e5e7eb" />
      <rect x="230" y="100" width="12" height="60" fill="#d1d5db" />
      <rect x="248" y="132" width="12" height="28" fill="#e5e7eb" />
      <rect x="266" y="88" width="12" height="72" fill="#9ca3af" />
      <rect x="208" y="66" width="44" height="7" rx="2" fill="#e5e7eb" />
    </>
  );
}

/* AI SEO最適化: 折れ線グラフ＋スコア円＋チェックリスト */
function SeoMock() {
  return (
    <>
      <rect x="16" y="14" width="288" height="172" rx="4" fill="#ffffff" stroke="#d1d5db" />
      <line x1="16" y1="42" x2="304" y2="42" stroke="#e5e7eb" />
      <circle cx="32" cy="28" r="4" fill="#e5e7eb" />
      <rect x="44" y="24" width="72" height="8" rx="2" fill="#e5e7eb" />
      {/* 左上: スコア円 */}
      <circle cx="70" cy="94" r="30" fill="none" stroke="#e5e7eb" strokeWidth="6" />
      <path
        d="M 70 64 A 30 30 0 1 1 44 109"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect x="58" y="88" width="24" height="10" rx="2" fill="#e5e7eb" />
      {/* 左下: チェックリスト */}
      {[142, 158, 172].map((y) => (
        <g key={y}>
          <circle cx="40" cy={y} r="5" fill="none" stroke="#d1d5db" />
          <path
            d={`M 37 ${y} l 2 2.5 l 4 -5`}
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
          <rect x="54" y={y - 3.5} width="70" height="7" rx="2" fill="#f3f4f6" />
        </g>
      ))}
      {/* 右: 折れ線グラフ */}
      <rect x="148" y="56" width="144" height="120" rx="3" fill="none" stroke="#e5e7eb" />
      <line x1="160" y1="164" x2="282" y2="164" stroke="#d1d5db" />
      <line x1="160" y1="164" x2="160" y2="68" stroke="#d1d5db" />
      <polyline
        points="160,150 184,138 208,144 232,116 256,104 280,80"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="1.5"
      />
      <polyline
        points="160,156 184,152 208,148 232,140 256,138 280,126"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="1.5"
      />
      <circle cx="184" cy="138" r="2.5" fill="#9ca3af" />
      <circle cx="232" cy="116" r="2.5" fill="#9ca3af" />
      <circle cx="280" cy="80" r="2.5" fill="#9ca3af" />
    </>
  );
}

/* 宿泊施設自動化: カレンダー連携＋スマホ通知 */
function HospitalityMock() {
  return (
    <>
      {/* 左: カレンダー */}
      <rect x="20" y="30" width="140" height="140" rx="4" fill="#ffffff" stroke="#d1d5db" />
      <line x1="20" y1="56" x2="160" y2="56" stroke="#e5e7eb" />
      <rect x="30" y="38" width="52" height="9" rx="2" fill="#e5e7eb" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={30 + col * 25}
            y={66 + row * 25}
            width="20"
            height="20"
            rx="2"
            fill={(row === 1 && col === 2) || (row === 2 && col === 4) ? "#d1d5db" : "#f3f4f6"}
          />
        ))
      )}
      {/* 連携矢印 */}
      <path d="M 168 100 h 24" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
      <path d="M 187 95 l 6 5 l -6 5" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
      {/* 右: スマホ＋通知バブル */}
      <rect x="204" y="22" width="92" height="156" rx="10" fill="#ffffff" stroke="#d1d5db" />
      <line x1="204" y1="44" x2="296" y2="44" stroke="#e5e7eb" />
      <rect x="238" y="30" width="24" height="5" rx="2.5" fill="#e5e7eb" />
      <rect x="212" y="54" width="56" height="24" rx="6" fill="#f3f4f6" />
      <rect x="218" y="61" width="42" height="4" rx="2" fill="#d1d5db" />
      <rect x="218" y="69" width="30" height="4" rx="2" fill="#e5e7eb" />
      <rect x="232" y="86" width="56" height="24" rx="6" fill="#e5e7eb" />
      <rect x="238" y="93" width="42" height="4" rx="2" fill="#9ca3af" />
      <rect x="238" y="101" width="26" height="4" rx="2" fill="#d1d5db" />
      <rect x="212" y="118" width="56" height="24" rx="6" fill="#f3f4f6" />
      <rect x="218" y="125" width="38" height="4" rx="2" fill="#d1d5db" />
      <rect x="218" y="133" width="44" height="4" rx="2" fill="#e5e7eb" />
      <rect x="212" y="154" width="76" height="14" rx="7" fill="none" stroke="#e5e7eb" />
    </>
  );
}

/* LINE公式×Lステップ構築: 配信ステップフロー＋スマホ・リッチメニュー */
function LineBuildMock() {
  return (
    <>
      {/* 左: 配信ステップフロー */}
      {[
        { y: 34, w: 96 },
        { y: 74, w: 84 },
        { y: 114, w: 96 },
        { y: 154, w: 78 },
      ].map((step, i) => (
        <g key={step.y}>
          <rect x="24" y={step.y} width={step.w} height="26" rx="4" fill="#ffffff" stroke="#d1d5db" />
          <circle cx="38" cy={step.y + 13} r="6" fill="#f3f4f6" stroke="#d1d5db" />
          <rect x="50" y={step.y + 7} width={step.w - 38} height="5" rx="2" fill="#e5e7eb" />
          <rect x="50" y={step.y + 16} width={step.w - 52} height="4" rx="2" fill="#f3f4f6" />
          {i < 3 && (
            <path
              d={`M 60 ${step.y + 26} v 8`}
              stroke="#9ca3af"
              strokeWidth="1.5"
              fill="none"
            />
          )}
        </g>
      ))}
      {/* 右: スマホ＋リッチメニュー */}
      <rect x="180" y="22" width="116" height="156" rx="10" fill="#ffffff" stroke="#d1d5db" />
      <line x1="180" y1="44" x2="296" y2="44" stroke="#e5e7eb" />
      <rect x="224" y="30" width="28" height="5" rx="2.5" fill="#e5e7eb" />
      {/* チャットバブル */}
      <rect x="188" y="52" width="64" height="20" rx="6" fill="#f3f4f6" />
      <rect x="194" y="58" width="48" height="4" rx="2" fill="#d1d5db" />
      <rect x="216" y="78" width="72" height="20" rx="6" fill="#e5e7eb" />
      <rect x="222" y="84" width="52" height="4" rx="2" fill="#9ca3af" />
      {/* リッチメニュー 2x3 */}
      {[0, 1].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={188 + col * 34}
            y={110 + row * 30}
            width="32"
            height="28"
            rx="3"
            fill={row === 0 && col === 0 ? "#d1d5db" : "#f3f4f6"}
            stroke="#e5e7eb"
          />
        ))
      )}
    </>
  );
}

/* LINE配信基盤: サイドバー付きCRM管理画面 */
function LinePlatformMock() {
  return (
    <>
      <rect x="16" y="14" width="288" height="172" rx="4" fill="#ffffff" stroke="#d1d5db" />
      {/* サイドバー */}
      <rect x="16" y="14" width="64" height="172" rx="4" fill="#f3f4f6" />
      <line x1="80" y1="14" x2="80" y2="186" stroke="#e5e7eb" />
      <rect x="26" y="28" width="40" height="9" rx="2" fill="#d1d5db" />
      {[52, 70, 88, 106, 124].map((y, i) => (
        <rect
          key={y}
          x="26"
          y={y}
          width={i === 1 ? 44 : 36}
          height="7"
          rx="2"
          fill={i === 1 ? "#9ca3af" : "#d1d5db"}
        />
      ))}
      {/* ヘッダー＋タグチップ */}
      <rect x="94" y="28" width="80" height="10" rx="2" fill="#e5e7eb" />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={94 + i * 46}
          y={48}
          width="40"
          height="14"
          rx="7"
          fill="none"
          stroke="#d1d5db"
        />
      ))}
      {/* 顧客テーブル */}
      <rect x="94" y="74" width="196" height="98" rx="3" fill="none" stroke="#e5e7eb" />
      <line x1="94" y1="94" x2="290" y2="94" stroke="#e5e7eb" />
      {[110, 128, 146, 164].map((y) => (
        <g key={y}>
          <circle cx="106" cy={y - 2} r="5" fill="#e5e7eb" />
          <rect x="118" y={y - 5} width="52" height="6" rx="2" fill="#f3f4f6" />
          <rect x="182" y={y - 5} width="28" height="6" rx="3" fill="#e5e7eb" />
          <rect x="220" y={y - 5} width="28" height="6" rx="3" fill="#f3f4f6" />
          <rect x="258" y={y - 5} width="22" height="6" rx="2" fill="#e5e7eb" />
          <line x1="94" y1={y + 7} x2="290" y2={y + 7} stroke="#f3f4f6" />
        </g>
      ))}
    </>
  );
}

const THUMBNAILS: Record<ThumbnailKind, React.ReactNode> = {
  inventory: <InventoryMock />,
  seo: <SeoMock />,
  hospitality: <HospitalityMock />,
  lineBuild: <LineBuildMock />,
  linePlatform: <LinePlatformMock />,
};

export default function WorkThumbnail({ kind }: WorkThumbnailProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-auto block bg-gray-50"
      aria-hidden="true"
      focusable="false"
    >
      {THUMBNAILS[kind]}
    </svg>
  );
}
