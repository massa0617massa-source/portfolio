export type DiagramKind =
  | "agents"
  | "inventory"
  | "seo"
  | "contentPipeline"
  | "linePlatform"
  | "lineBuild"
  | "hospitality";

interface WorkDiagramProps {
  kind: DiagramKind;
}

const PALETTE: Record<DiagramKind, { accent: string; soft: string }> = {
  agents: { accent: "#4338ca", soft: "#eeeefc" },
  inventory: { accent: "#2563eb", soft: "#e8f0fe" },
  seo: { accent: "#059669", soft: "#e3f7ef" },
  contentPipeline: { accent: "#0891b2", soft: "#e0f5fa" },
  linePlatform: { accent: "#7c3aed", soft: "#f0eafd" },
  lineBuild: { accent: "#06a34a", soft: "#e6f7ed" },
  hospitality: { accent: "#c2740a", soft: "#fdf1de" },
};

interface Ctx {
  a: string;
  soft: string;
  id: string;
}

interface BoxProps extends Ctx {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  /** built = 自分が作った部分（アクセント色）／ext = 外部サービス・既存業務（グレー） */
  built?: boolean;
}

function Box({ x, y, w, h, label, sub, built = false, a, soft }: BoxProps) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="6"
        fill={built ? soft : "#ffffff"}
        stroke={built ? a : "#cbd0d8"}
        strokeWidth={built ? 1.4 : 1}
      />
      <text
        x={cx}
        y={sub ? cy - 4 : cy + 5}
        textAnchor="middle"
        fontSize="15"
        fontWeight={built ? 600 : 400}
        fill={built ? a : "#374151"}
      >
        {label}
      </text>
      {sub && (
        <text x={cx} y={cy + 16} textAnchor="middle" fontSize="12" fill="#6b7280">
          {sub}
        </text>
      )}
    </g>
  );
}

/** 直線または折れ線の矢印 */
function Arrow({ points, id, a }: { points: string } & Ctx) {
  return (
    <polyline
      points={points}
      fill="none"
      stroke={a}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd={`url(#ar-${id})`}
    />
  );
}

function InfraBar({ text }: { text: string }) {
  return (
    <g>
      <rect x="16" y="182" width="728" height="28" rx="4" fill="#f7f8fa" stroke="#e5e7eb" />
      <text x="30" y="201" fontSize="12.5" fill="#4b5563">
        {text}
      </text>
    </g>
  );
}

function Agents(c: Ctx) {
  return (
    <>
      <Box {...c} x={16} y={78} w={128} h={46} label="業務からの依頼" />
      <Arrow {...c} points="150,101 184,101" />
      <Box
        {...c}
        x={190}
        y={70}
        w={168}
        h={62}
        label="司令塔エージェント"
        sub="指示を分解して振り分け"
        built
      />
      <Arrow {...c} points="364,95 388,95 388,42 404,42" />
      <Arrow {...c} points="364,101 398,101" />
      <Arrow {...c} points="364,107 388,107 388,160 404,160" />
      <Box {...c} x={410} y={22} w={150} h={40} label="在庫調整" built />
      <Box {...c} x={410} y={81} w={150} h={40} label="商品ページ改善" built />
      <Box {...c} x={410} y={140} w={150} h={40} label="外部API連携" built />
      <Arrow {...c} points="566,42 592,42 592,101 608,101" />
      <Arrow {...c} points="566,101 608,101" />
      <Arrow {...c} points="566,160 592,160 592,101 608,101" />
      <Box {...c} x={614} y={78} w={130} h={46} label="日常業務" sub="本番で常時稼働" />
      <InfraBar text="Claude API ／ Cloudflare Workers ／ Hono ／ Supabase" />
    </>
  );
}

function Inventory(c: Ctx) {
  return (
    <>
      <Box {...c} x={16} y={22} w={150} h={40} label="楽天RMS" />
      <Box {...c} x={16} y={81} w={150} h={40} label="Yahoo!ショッピング" />
      <Box {...c} x={16} y={140} w={150} h={40} label="eBay" />
      <Arrow {...c} points="172,42 196,42 196,95 214,95" />
      <Arrow {...c} points="172,101 214,101" />
      <Arrow {...c} points="172,160 196,160 196,107 214,107" />
      <Box
        {...c}
        x={220}
        y={68}
        w={186}
        h={66}
        label="在庫同期エンジン"
        sub="1件売れたら他モールを自動調整"
        built
      />
      <Arrow {...c} points="412,88 436,88 436,60 452,60" />
      <Arrow {...c} points="412,114 436,114 436,142 452,142" />
      <Box {...c} x={458} y={40} w={162} h={42} label="Supabase 在庫DB" built />
      <Box {...c} x={458} y={122} w={162} h={42} label="在庫確認の管理画面" built />
      <Arrow {...c} points="626,143 660,143" />
      <Box {...c} x={666} y={122} w={78} h={42} label="担当者" />
      <InfraBar text="Cloudflare Workers ／ Hono ／ 認証・レート制限・仕様変更への追従込み" />
    </>
  );
}

function Seo(c: Ctx) {
  return (
    <>
      <Box {...c} x={16} y={78} w={140} h={48} label="商品ページ" sub="数が多く人力では限界" />
      <Arrow {...c} points="162,102 192,102" />
      <Box
        {...c}
        x={198}
        y={70}
        w={172}
        h={64}
        label="AIが分析"
        sub="構成・キーワード・不足要素"
        built
      />
      <Arrow {...c} points="376,102 406,102" />
      <Box
        {...c}
        x={412}
        y={70}
        w={172}
        h={64}
        label="改善文面を出力"
        sub="そのまま使える形で"
        built
      />
      <Arrow {...c} points="590,102 620,102" />
      <Box {...c} x={626} y={78} w={118} h={48} label="担当者が確認" sub="して反映するだけ" />
      <InfraBar text="Claude API ／ Cloudflare Workers 上で公開・担当者はブラウザから利用" />
    </>
  );
}

function ContentPipeline(c: Ctx) {
  return (
    <>
      <Box
        {...c}
        x={16}
        y={62}
        w={158}
        h={62}
        label="キーワード設計"
        sub="検索意図から勝ち筋を決める"
        built
      />
      <Arrow {...c} points="180,93 208,93" />
      <Box {...c} x={214} y={62} w={162} h={62} label="Claude Code" sub="Web検索 ／ Ahrefs" built />
      <Arrow {...c} points="382,93 410,93" />
      <Box {...c} x={416} y={62} w={158} h={62} label="記事作成・入稿" sub="CMS連携で一本の流れに" built />
      <Arrow {...c} points="580,93 608,93" />
      <Box {...c} x={614} y={62} w={130} h={62} label="公開後の計測" sub="GSC ／ GA4" />
      {/* 計測結果を設計に戻すループ */}
      <Arrow {...c} points="679,130 679,158 95,158 95,130" />
      <text x="380" y="174" textAnchor="middle" fontSize="12.5" fill="#6b7280">
        順位と流入を見て、次の構成に反映
      </text>
      <InfraBar text="調査・構成・執筆・入稿が別作業だった状態を、ひとつのパイプラインに" />
    </>
  );
}

function LinePlatform(c: Ctx) {
  return (
    <>
      <Box {...c} x={16} y={30} w={140} h={44} label="cron" sub="指定日時に起動" built />
      <Box {...c} x={16} y={104} w={140} h={44} label="React CRM画面" sub="友だち・タグ管理" built />
      <Arrow {...c} points="162,52 190,52 190,84 208,84" />
      <Arrow {...c} points="162,126 190,126 190,96 208,96" />
      <Box
        {...c}
        x={214}
        y={58}
        w={176}
        h={64}
        label="配信エンジン"
        sub="ステップ ／ セグメント配信"
        built
      />
      <Arrow {...c} points="396,90 428,90" />
      <Box {...c} x={434} y={68} w={152} h={44} label="LINE Messaging API" />
      <Arrow {...c} points="592,90 622,90" />
      <Box {...c} x={628} y={68} w={116} h={44} label="友だち" />
      <Arrow {...c} points="302,128 302,150" />
      <Box {...c} x={214} y={150} w={176} h={30} label="D1（タグ・配信状況）" built />
      <Box {...c} x={434} y={140} w={152} h={40} label="LIFFフォーム" built />
      <Arrow {...c} points="430,160 396,160" />
      <InfraBar text="月額ツールに合わせるのではなく、自社の運用に合わせた配信基盤として自社所有" />
    </>
  );
}

function LineBuild(c: Ctx) {
  const steps = [
    { label: "STEP1", sub: "教育" },
    { label: "STEP2", sub: "体験談" },
    { label: "STEP3", sub: "コース詳細" },
    { label: "STEP4", sub: "面談予約" },
  ];
  return (
    <>
      <Box {...c} x={16} y={64} w={112} h={56} label="友だち追加" />
      <Arrow {...c} points="134,92 154,92" />
      {steps.map((s, i) => (
        <g key={s.label}>
          <Box {...c} x={160 + i * 128} y={64} w={112} h={56} label={s.label} sub={s.sub} built />
          <Arrow {...c} points={`${278 + i * 128},92 ${298 + i * 128},92`} />
        </g>
      ))}
      <Box {...c} x={672} y={64} w={72} h={56} label="予約" sub="ツール連携" />
      <text x="380" y="150" textAnchor="middle" fontSize="12.5" fill="#6b7280">
        リッチメニュー2種 ／ 流入経路アンケート ／ 操作ガイドPDFを同梱して引き渡し
      </text>
      <InfraBar text="LINE公式アカウントの開設からシナリオ設計・納品後の引き渡しまで一括で担当" />
    </>
  );
}

function Hospitality(c: Ctx) {
  return (
    <>
      <Box {...c} x={16} y={70} w={140} h={56} label="予約カレンダー" sub="iCal連携" />
      <Arrow {...c} points="162,98 186,98" />
      <Box {...c} x={192} y={70} w={148} h={56} label="清掃スタッフへ" sub="LINEで自動通知" built />
      <Arrow {...c} points="346,98 370,98" />
      <Box {...c} x={376} y={70} w={148} h={56} label="LIFFで勤怠打刻" sub="スタッフ本人が入力" built />
      <Arrow {...c} points="530,98 554,98" />
      <Box {...c} x={560} y={70} w={184} h={56} label="請求書を自動生成" sub="インセンティブ確認まで" built />
      <text x="380" y="154" textAnchor="middle" fontSize="12.5" fill="#6b7280">
        民泊8物件分の「予約のたびに手で連絡・月末に集計」がなくなる
      </text>
      <InfraBar text="LINE Messaging API ／ LIFF ／ GAS ／ Cloudflare Workers ／ D1" />
    </>
  );
}

const DIAGRAMS: Record<DiagramKind, (c: Ctx) => React.ReactElement> = {
  agents: Agents,
  inventory: Inventory,
  seo: Seo,
  contentPipeline: ContentPipeline,
  linePlatform: LinePlatform,
  lineBuild: LineBuild,
  hospitality: Hospitality,
};

export default function WorkDiagram({ kind }: WorkDiagramProps) {
  const { accent, soft } = PALETTE[kind];
  const ctx: Ctx = { a: accent, soft, id: kind };
  const render = DIAGRAMS[kind];

  return (
    <svg
      viewBox="0 0 760 218"
      className="w-full h-auto block bg-white"
      role="img"
      aria-label="システム構成図"
    >
      <defs>
        <marker
          id={`ar-${kind}`}
          markerWidth="7"
          markerHeight="7"
          refX="5.5"
          refY="3"
          orient="auto"
        >
          <path d="M 0 0 L 6 3 L 0 6" fill="none" stroke={accent} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>
      {render(ctx)}
    </svg>
  );
}
