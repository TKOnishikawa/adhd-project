// Content type configuration
export const contentTypeConfig = {
  research:  { label: 'リサーチ', icon: '\uD83D\uDD0D', color: '#a78bfa' },
  meeting:   { label: '議事録',   icon: '\uD83D\uDCDD', color: '#22d3ee' },
  reference: { label: '参照',     icon: '\uD83D\uDCDA', color: '#4a7dff' },
  note:      { label: 'ノート',   icon: '\uD83D\uDCC4', color: '#fb923c' },
  sns: { label: 'SNS', icon: '\uD83D\uDCF1', color: '#ff6b6b' },
} as const;

// Maturity levels
export const maturityConfig = {
  seed:      { label: 'Seed',      color: '#f59e0b', description: 'アイデア段階' },
  memo:      { label: 'Memo',      color: '#a78bfa', description: 'メモ・断片' },
  draft:     { label: 'Draft',     color: '#22d3ee', description: '下書き' },
  published: { label: 'Published', color: '#34d399', description: '公開可能' },
} as const;

// Note types
export const noteTypeConfig = {
  idea:     { label: 'アイデア', icon: '\uD83D\uDCA1', color: '#f59e0b' },
  insight:  { label: '洞察',     icon: '\uD83D\uDD2E', color: '#a78bfa' },
  decision: { label: '決定事項', icon: '\u2705',        color: '#34d399' },
  todo:     { label: 'TODO',     icon: '\uD83D\uDCCB', color: '#22d3ee' },
} as const;

// Reference source types
export const sourceTypeConfig = {
  paper:   { label: '論文',       icon: '\uD83D\uDCC4', color: '#a78bfa' },
  book:    { label: '書籍',       icon: '\uD83D\uDCD6', color: '#4a7dff' },
  website: { label: 'Webサイト', icon: '\uD83C\uDF10', color: '#22d3ee' },
  video:   { label: '動画',       icon: '\uD83C\uDFA5', color: '#f472b6' },
  tool:    { label: 'ツール',     icon: '\uD83D\uDEE0\uFE0F', color: '#34d399' },
} as const;
