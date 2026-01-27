# Next.js → Astro 移行ロードマップ

## フェーズ1: 環境準備と初期セットアップ

### 1. Astroプロジェクトの初期化
- `npm create astro@latest`でAstroプロジェクトを作成
- TypeScript、Tailwind CSS統合を選択
- React統合を追加（既存コンポーネントの段階的移行のため）

### 2. 基本設定の移行
- `astro.config.mjs`の設定
- Tailwind CSS設定の移行
- TypeScript設定の調整
- 環境変数の移行

## フェーズ2: 静的アセットとスタイルの移行

### 3. publicディレクトリの移行
- 画像、ファビコンなどをそのまま移行

### 4. グローバルスタイルの移行
- `app/global.css`をAstroのスタイルシステムに適応
- CSS Modulesの扱いを検討（Astroはscopedスタイルをサポート）

## フェーズ3: ページとルーティングの移行

### 5. ページ構造の移行
- `app/page.tsx` → `src/pages/index.astro`
- `app/layout.tsx` → Astroレイアウトコンポーネント
- `app/not-found.tsx` → `src/pages/404.astro`
- `app/career/page.tsx` → `src/pages/career/index.astro`
- `app/career/[slug]/page.tsx` → `src/pages/career/[slug].astro`

### 6. メタデータの移行
- Next.jsの`Metadata`API → Astroの`<head>`タグ
- OGP画像生成の再実装

## フェーズ4: コンポーネントの移行

### 7. Reactコンポーネントの段階的移行
インタラクティブなコンポーネント:
- `.tsx`としてReactのまま保持（client:load等のディレクティブ使用）

静的コンポーネント → `.astro`コンポーネントに書き換え:
- `Nav.tsx`
- `Profile.tsx`
- `Section.tsx`
- `CareerList.tsx`
- `Etc.tsx`

### 8. Markdownレンダリングの移行
- `react-markdown` → Astroのネイティブmarkdownサポートまたは`@astrojs/markdown-remark`
- Markdownコンテンツの取り扱い方法の変更

## フェーズ5: データフェッチングとビルドスクリプト

### 9. ビルドスクリプトの調整
- `scripts/generate-career-list.ts`の動作確認
- `scripts/copy-markdown.ts`の調整
- Astroのビルドプロセスに統合

### 10. API routesの移行
- `app/rss/route.ts` → `src/pages/rss.xml.ts`（Astro endpoints）
- `app/sitemap.ts` → `@astrojs/sitemap`統合
- `app/robots.ts` → `public/robots.txt`

## フェーズ6: フォント最適化

### 11. Google Fontsの移行
- `next/font/google` → Astroのフォント最適化手法
- `@fontsource`パッケージの使用を検討
- またはCDN経由での読み込み

## フェーズ7: デプロイ設定

### 12. Cloudflare Pages対応
- Astroの[Cloudflare adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)の導入
- `wrangler.toml`の調整
- ビルドコマンドの更新

## フェーズ8: テストと最適化

### 13. テストの移行
- Jestの設定をAstro環境に適応
- 必要に応じてVitestへの移行を検討

### 14. パフォーマンス検証
- ビルドサイズの比較
- ページロード速度の測定
- Lighthouseスコアの確認

### 15. 最終調整
- リンク切れのチェック
- SEO設定の確認
- 各ページの動作確認

---

## 主な利点

- **パフォーマンス向上**: Astroはデフォルトでゼロ-JSアプローチ
- **ビルド時間短縮**: 静的サイトとして最適化
- **バンドルサイズ削減**: 必要な部分だけJavaScriptを配信

## 注意点

- Next.jsのサーバーコンポーネントやISRは使っていないため、比較的スムーズな移行が可能
- インタラクティブ性が必要な部分は`client:`ディレクティブでReactを維持
- react-markdownの代替検討が必要

## 現在のプロジェクト構成

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS 4.0 (alpha)
- React 18
- Cloudflare Pages（デプロイ先）
- Jest（テスト）
