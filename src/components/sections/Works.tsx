import AnimatedBlock from "@/components/ui/AnimatedBlock";
import SectionWrapper from "@/components/ui/SectionWrapper";
import WorkDiagram, { DiagramKind } from "@/components/ui/WorkDiagram";

interface Work {
  number: string;
  title: string;
  client: string;
  status?: string;
  thumbnail: DiagramKind;
  tags: string[];
  /** 依頼を受けたときの状況 */
  context: string;
  /** 担当した範囲 */
  role: string;
  /** 実際にやったこと */
  actions: string[];
  /** どうなったか */
  result: string;
}

const works: Work[] = [
  {
    number: "01",
    title: "AIエージェント基盤の開発",
    client: "EC事業会社様",
    thumbnail: "agents",
    tags: ["Claude API", "マルチエージェント", "Cloudflare Workers", "Hono", "Supabase"],
    context:
      "AIを業務に入れたいが、チャットに都度質問する使い方では実務が回らない。担当者が変わっても同じ品質で動く形にしたい、という状況でした。",
    role: "開発補佐として参画。エージェント構成の設計と実装、既存業務ツールとの接続を担当。",
    actions: [
      "司令塔となるエージェントが指示を分解し、役割ごとのエージェントに配る Hub-Spoke 型の構成を設計・実装",
      "各エージェントを実際の業務ツール（在庫・商品ページ・外部API）に接続",
      "一度きりの検証で終わらせず、本番環境で運用し続ける前提の構成に",
    ],
    result:
      "単発のチャット利用ではなく、日常業務の中でAIが動き続ける基盤として本番投入。以下02・03のツールもこの基盤の上に載っています。",
  },
  {
    number: "02",
    title: "ECモール在庫調整システム",
    client: "EC事業会社様",
    thumbnail: "inventory",
    tags: ["楽天RMS", "Yahoo!ショッピング", "eBay API", "Cloudflare Workers", "Supabase"],
    context:
      "同じ商品を3つのモールに出しているため、どこかが売れるたびに他モールの在庫を手で直す必要がありました。対応が遅れると売り越しが発生します。",
    role: "要件整理・API連携・管理画面まで一貫して担当。",
    actions: [
      "楽天RMS / Yahoo!ショッピング / eBay の3モールをAPI連携",
      "1件売れたら他モールの在庫を自動で調整する仕組みを実装",
      "認証・レート制限・仕様変更といったモールAPI特有の面倒な部分を吸収する構成に",
      "現在の在庫状況を人が確認できる管理画面を用意",
    ],
    result: "手作業だった3モールの在庫合わせが自動化され、売り越し対応の手戻りがなくなりました。",
  },
  {
    number: "03",
    title: "AI活用SEO最適化ツール",
    client: "EC事業会社様",
    thumbnail: "seo",
    tags: ["Claude API", "Cloudflare Workers", "SEO"],
    context:
      "商品ページのSEO改善は効果があるとわかっていても、点数が多いと人力では手が回らない状態でした。",
    role: "ツールの企画から実装・本番デプロイまで担当。",
    actions: [
      "商品ページの構成・キーワード・不足要素をAIが分析する処理を実装",
      "分析だけで終わらせず、そのまま使える改善文面まで出力",
      "担当者がブラウザから使えるようCloudflare Workers上で公開",
    ],
    result: "1ページずつ人が読んで直していた作業を、確認して反映するだけの作業に変えました。",
  },
  {
    number: "04",
    title: "AI×SEO記事制作パイプライン",
    client: "メディア／SEO支援",
    status: "稼働中",
    thumbnail: "contentPipeline",
    tags: ["Claude Code", "Web検索", "Ahrefs", "CMS連携", "GSC / GA4"],
    context:
      "記事の本数を増やしたいが、品質を落とすと意味がない。調査・構成・執筆・入稿がすべて別作業になっていました。",
    role: "制作フロー全体の設計と、AIを組み込んだ仕組みづくり。効果測定まで担当。",
    actions: [
      "キーワード戦略と検索意図の設計から着手し、書く前に勝ち筋を決める",
      "Claude Code に Web検索・Ahrefs・CMS を接続し、調査から入稿までを一本の流れに",
      "Google Search Console / GA4 で公開後の順位と流入を追い、構成に反映",
    ],
    result: "現在も継続して運用中の案件です。",
  },
  {
    number: "05",
    title: "LINE配信基盤の受託開発",
    client: "販売事業者様",
    thumbnail: "linePlatform",
    tags: ["ステップ配信エンジン", "LIFF", "React", "CRM", "Cloudflare D1"],
    context:
      "Lステップなどの月額ツールに機能を合わせるのではなく、自社のやり方に合わせた配信の仕組みを持ちたい、というご依頼でした。",
    role: "配信エンジンから管理画面まで、フルスクラッチで設計・開発。",
    actions: [
      "指定日時に自動でメッセージを送るステップ配信エンジンを実装",
      "タグで対象を絞り込むセグメント配信、状態に応じたリッチメニューの自動切替",
      "LIFFでLINE内で完結するフォームを用意",
      "友だち一覧・タグ・配信状況を扱うCRM管理画面をReactで開発",
    ],
    result:
      "月額ツールに合わせるのではなく、自社の運用に合わせた配信基盤を自社の資産として持てる形にしました。",
  },
  {
    number: "06",
    title: "LINE公式×Lステップ構築",
    client: "オンラインスクール運営者様",
    thumbnail: "lineBuild",
    tags: ["LINE公式アカウント", "Lステップ", "配信シナリオ設計", "予約ツール連携"],
    context:
      "講座の申し込みまでの案内をLINEで行いたいが、アカウントの開設から設定まで手が付けられていない状態からのスタートでした。",
    role: "アカウント開設からシナリオ設計・納品後の引き渡しまで一括で担当。",
    actions: [
      "LINE公式アカウントの開設とLステップの初期設定",
      "教育 → 体験談 → コース詳細 → 面談予約の4段階のステップ配信シナリオを設計",
      "リッチメニュー2パターン、流入経路アンケート、予約ツール連携を構築",
      "運用担当者がそのまま触れるよう、操作ガイドPDFを作成して同梱",
    ],
    result:
      "構築して終わりではなく、担当者が自分で配信を回せる状態にして引き渡しました。",
  },
  {
    number: "07",
    title: "宿泊施設運営の自動化システム",
    client: "宿泊施設運営会社様",
    thumbnail: "hospitality",
    tags: ["LINE Messaging API", "LIFF", "GAS", "Cloudflare Workers", "D1"],
    context:
      "民泊8物件を運営する中で、予約が入るたびに清掃スタッフへ手で連絡し、月末には勤怠を集計して請求書を作る、という作業が積み上がっていました。",
    role: "業務フローの整理から実装・運用まで担当。",
    actions: [
      "予約カレンダー（iCal）と連携し、予約が入ると清掃スタッフへLINEで自動通知",
      "スタッフがLIFFから勤怠を打刻できる仕組みを用意",
      "打刻データから請求書を自動生成し、インセンティブの確認まで一気通貫に",
    ],
    result:
      "8物件分の連絡と請求の手作業がなくなりました。納品後は先方の運用に移管し、システムは稼働を継続しています。",
  },
];

export default function Works() {
  return (
    <SectionWrapper id="works" number="02" allowOverflow>
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.4em] text-gray-500 mb-8 uppercase">Works</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-snug">実績</h2>
        <p className="text-sm text-gray-600 mb-20 leading-loose">
          守秘義務があるため、社名と実際のURLは伏せ、業種のみを記載しています。
          <br className="hidden md:block" />
          記載のうち04は現在も運用中、それ以外は納品を終えた案件です。差し支えのない範囲であれば、詳しい内容は個別にお話しできます。
        </p>
      </AnimatedBlock>

      <div className="space-y-0">
        {works.map((work, i) => (
          <AnimatedBlock key={work.number} direction="left" delay={i * 0.06}>
            <div className="border-t border-gray-100 py-12 -mx-4 px-4">
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="text-[11px] tracking-widest text-gray-500">{work.number}</span>
                <div className="flex gap-2 flex-wrap justify-end">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wide text-gray-600 border border-gray-200 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h3 className="text-xl font-medium text-gray-900">{work.title}</h3>
                {work.status && (
                  <span className="text-[10px] tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                    {work.status}
                  </span>
                )}
              </div>
              <p className="text-[11px] tracking-[0.2em] text-gray-500 mb-7">{work.client}</p>

              {/* 構成図。実際に使ったサービス名とデータの流れをそのまま示す */}
              <figure className="mb-8 border border-gray-200 rounded-sm overflow-hidden">
                <WorkDiagram kind={work.thumbnail} />
                <figcaption className="text-[10px] tracking-[0.15em] text-gray-500 px-4 py-2 border-t border-gray-100 bg-gray-50">
                  システム構成図（色付き＝自分が設計・実装した部分）
                </figcaption>
              </figure>

              <div className="space-y-5 md:max-w-3xl">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-gray-500 mb-1.5">依頼時の状況</p>
                  <p className="text-sm text-gray-700 leading-loose">{work.context}</p>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.2em] text-gray-500 mb-1.5">担当した範囲</p>
                  <p className="text-sm text-gray-700 leading-loose">{work.role}</p>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.2em] text-gray-500 mb-2">やったこと</p>
                  <ul className="space-y-1.5">
                    {work.actions.map((action) => (
                      <li
                        key={action}
                        className="text-sm text-gray-700 leading-loose pl-4 relative before:absolute before:left-0 before:top-[0.85em] before:w-1.5 before:h-px before:bg-gray-400"
                      >
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-2 border-accent pl-4">
                  <p className="text-[10px] tracking-[0.2em] text-gray-500 mb-1.5">結果</p>
                  <p className="text-sm text-gray-900 leading-loose">{work.result}</p>
                </div>
              </div>
            </div>
          </AnimatedBlock>
        ))}
        <div className="border-t border-gray-100" />
      </div>
    </SectionWrapper>
  );
}
