# ADHD特化コーチング事業 — AIコンテキストファイル

> **目的**: 新セッション開始時にClaude Codeが即座にプロジェクト全体を把握するためのファイル。
> **更新**: 各Phase完了時・重要な意思決定時に更新する。

## 事業概要

- **事業名**: ADHD特化コーチング（100日プログラム）
- **体制**: 2人（Coach + Engineer、ともにADHD当事者）
- **規模**: 6-8名/コホート × ¥300,000-500,000
- **期間**: 100日（14週）
- **IP**: 部分利用（方法論エッセンスは参考、コンテンツは独自、REBOOSTは外部紹介のみ）
- **技術**: Claude Codeで必要なツールをMVP構築

## 現在のフェーズ

**Phase 5: 各ドキュメント詳細仕様・構築** ← 現在地

| Phase | 状態 | 成果物 |
|-------|------|--------|
| 0. コンセプト壁打ち | ✅ 完了 | — |
| 1. 徹底リサーチ（8テーマ） | ✅ 完了 | `src/content/research/` A-H |
| 2a. 理想形設計 | ✅ 完了 | [理想形設計書](https://tkonishikawa.github.io/adhd-project/adhd-service-design.html) |
| 2b. 論点整理 | ✅ 完了 | [論点整理](https://tkonishikawa.github.io/adhd-project/adhd-careerspi-ronten.html) |
| 2c. MVP設計 | ✅ 完了 | [MVP設計書](https://tkonishikawa.github.io/adhd-project/adhd-mvp-design.html) |
| 3. ドキュメント棚卸し | ✅ 完了 | [準備マップ](https://tkonishikawa.github.io/adhd-project/adhd-doc-inventory.html) |
| 4. インフラ構築 | ✅ 完了 | Driveフォルダ34個（omoshiku_drive_utils.py FOLDERS参照） |
| 5. ドキュメント構築 | 🔄 進行中 | Tier 1（47件）から順次着手 |

## 重要な意思決定ログ

| 日付 | 項目 | 決定 | 理由 |
|------|------|------|------|
| 2026-02-27 | IP利用 | 部分利用 | 方法論参考、コンテンツ独自、REBOOST外部紹介のみ |
| 2026-02-27 | コホートサイズ | 6-8名 × ¥30-50万 | 2人体制の上限 |
| 2026-02-27 | プログラム期間 | 100日（14週） | 理想形と同じ |
| 2026-02-27 | Driveフォルダ設計 | DXコンサルとは完全分離 | 別会社移行の可能性。adhd-coaching/を自己完結型に |
| 2026-02-27 | 動画保管 | YouTube限定公開 | Drive 15GB制約。Meet録画→YouTube自動パイプライン |
| 2026-02-27 | 参加者フォルダ命名 | ID+実名（001_田中太郎） | 運用中の視認性を重視 |
| 2026-02-27 | ビデオ会議 | Google Meet | Workspace既存、追加コスト¥0 |

## 成果物マップ

### GitHub Pages（公開HTML）
- `public/adhd-service-design.html` — 理想形設計書（5コーチ・20名の完成形）
- `public/adhd-mvp-design.html` — MVP設計書（2人・6-8名パイロット版）
- `public/adhd-careerspi-ronten.html` — 論点整理（キャリスピ2.0 × ADHD分析）
- `public/adhd-doc-inventory.html` — ドキュメント準備マップ（84件・3階層）

### リサーチ（Astro Content Collections）
- `src/content/research/` — 8テーマ（A: ADHD基礎 〜 H: 市場分析）

### omoshiku Drive
- `adhd-coaching/` — ADHD事業フォルダ（34フォルダ）
  - `_templates/` — 9カテゴリのマスターテンプレート
  - `cohort_1/` — コホート1（participants, _ops, recordings, analysis）
  - `marketing/` — コホート横断マーケティング
  - `finance/2026/` — 財務
  - `legal_compliance/` — 法務コンプライアンス
  - `founder/` — 創業者運営
  - `alumni/` — 卒業生

### 関連リポジトリ（raftel_gcp内）
- `scripts/omoshiku_drive_utils.py` — Drive APIユーティリティ（FOLDERS定数にADHDフォルダID群）
- `output/adhd_drive_folder_ids.json` — フォルダIDバックアップ

## ドキュメント構築の進捗（Tier 1: 47件）

### カテゴリA: 法務・契約（6件）— 未着手
- [ ] A1: サービス利用規約
- [ ] A2: コーチング同意書（スコープ合意書）
- [ ] A3: 個人情報保護方針
- [ ] A4: エスカレーション同意書
- [ ] A5: 特定商取引法に基づく表記
- [ ] A6: 医療機関紹介先リスト

### カテゴリB: スクリーニング（6件）— 未着手
- [ ] B1: ASRS-v1.1 Webフォーム
- [ ] B2: PHQ-9 Webフォーム
- [ ] B3: GAD-7 Webフォーム
- [ ] B4: インテーク面談シート
- [ ] B5: 除外基準チェックリスト
- [ ] B6: スクリーニング結果通知テンプレート

### カテゴリC: オンボーディング（6件）— 未着手
### カテゴリD: DAY講義（16件）— 未着手
### カテゴリE: パーソナルセッション（5件）— 未着手
### カテゴリF: 運営（8件）— 未着手

## 技術スタック

| 領域 | 技術 | 備考 |
|------|------|------|
| 公開サイト | Astro 5 + GitHub Pages | adhd-projectリポ |
| 設計書HTML | McKinsey Dark Theme | Noto Sans JP + JetBrains Mono |
| データ管理 | Google Drive (omoshiku) | adhd-coaching/フォルダ |
| スプレッドシート | MCP sheets-omoshiku | 進捗管理・トラッキング |
| セルフマニュアルビルダー | Astro or Next.js + Supabase | 未構築 |
| パルスチェック | Webフォーム + ダッシュボード | 未構築 |
| ナッジBot | Discord Bot | 未構築 |
| ビデオ会議 | Google Meet | Workspace既存 |
| 動画保管 | YouTube限定公開 | パイプライン未構築 |

## 8DAYカリキュラム（クイックリファレンス）

| DAY | テーマ | 効果量 | マニュアル章 |
|-----|-------|--------|------------|
| 1 | ADHD脳のOS（メタ認知） | d=0.5-0.7 | Ch1: 脳のプロファイル |
| 2 | トリガーとパターン（ABC分析） | d=0.89 | Ch2: トリガーマップ |
| 3 | 環境デザイン（ナッジ理論） | d=0.5+ | Ch3: 環境設計図 |
| 4 | If-Then自動操縦 | d=0.65 | Ch4: プレイブック |
| 5 | 時間アーキテクチャ | d=0.89 | Ch5: 時間設計 |
| 6 | 証人の力（ボディダブリング） | d=0.5-0.8 | Ch6: サポート設計 |
| 7 | 強みは本物（セルフコンパッション） | d=0.4-0.6 | Ch7: 強みインベントリ |
| 8 | セルフマニュアル完成（統合） | — | Ch8: 運用マニュアル |
