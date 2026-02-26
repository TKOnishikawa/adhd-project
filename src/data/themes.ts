export type ThemeId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export interface ThemeDef {
  label: string;
  icon: string;
  color: string;
  description: string;
  prerequisites: ThemeId[];
}

export const themes: Record<ThemeId, ThemeDef> = {
  A: {
    label: 'ADHDの基礎',
    icon: '\uD83E\uDDE0',
    color: '#4a7dff',
    description: '診断基準、サブタイプ、疫学、併存症、マスキング',
    prerequisites: [],
  },
  B: {
    label: '神経科学メカニズム',
    icon: '\u26A1',
    color: '#22d3ee',
    description: '実行機能障害、ドーパミン仮説、時間盲、報酬系、DMN',
    prerequisites: ['A'],
  },
  C: {
    label: '強み・才能の科学',
    icon: '\u2728',
    color: '#34d399',
    description: 'ハイパーフォーカス、創造性、起業家精神、2E',
    prerequisites: ['A'],
  },
  D: {
    label: '行動科学フレームワーク',
    icon: '\uD83D\uDD2C',
    color: '#a78bfa',
    description: 'ABC分析、自己調整理論、SDT、CBT、ACT',
    prerequisites: ['B'],
  },
  E: {
    label: '介入エビデンス',
    icon: '\uD83C\uDFAF',
    color: '#f472b6',
    description: 'コーチング効果検証、外部足場、ストレングスベースド',
    prerequisites: ['B', 'C', 'D'],
  },
  F: {
    label: '成人ADHD × 実生活',
    icon: '\uD83C\uDFE2',
    color: '#fb923c',
    description: '職場、対人関係、自己肯定感、アイデンティティ',
    prerequisites: ['A'],
  },
  G: {
    label: 'セルフコーチング',
    icon: '\uD83E\uDE9E',
    color: '#f59e0b',
    description: '当事者研究、マインドフルネス、自己特性言語化',
    prerequisites: ['D', 'F'],
  },
  H: {
    label: '市場・既存サービス',
    icon: '\uD83D\uDCCA',
    color: '#9898ae',
    description: '海外・国内コーチング団体、差別化ポイント',
    prerequisites: [],
  },
} as const;

/** All theme IDs ordered */
export const themeIds = Object.keys(themes) as ThemeId[];

/** Get themes that depend on this theme */
export function getDependents(id: ThemeId): ThemeId[] {
  return themeIds.filter((tid) => themes[tid].prerequisites.includes(id));
}
