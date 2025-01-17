---
title: "動画配信サービス開発"
startDate: "oct. 2020"
endDate: "now"
device: ["PC", "SP"]
id: "202010-"
role: "developing video distribution services at AbemaTV inc."
tagList:
  - React
  - RxJS
  - NodeJS
  - PostCSS
  - ava
  - Jest
  - CircleCI
  - GitHub Actions
  - webpack
  - esbuild
---

新規機能開発、コードレビュー、既存サービスの改修・リファクタリング、CI チューニング、パフォーマンス改善その他関連作業などを行っています。

![スクリーンショット](/img/career/202010-/abema_web_desktop.png)

ABEMA の desktop 版 ( [https://abema.tv/](https://abema.tv/) )。

![スクリーンショット](/img/career/202010-/abema_web_mobile.png)

ABEMA mobile

![スクリーンショット](/img/career/202010-/fifa_wcup_2022.png)

FIFA ワールドカップ 2022 特設ページ ( [https://abema.tv/video/genre/fifaworldcup](https://abema.tv/video/genre/fifaworldcup) ) 、試合一覧のタブやカルーセルを新規実装しました。
ワールドカップのページは3月末に削除されますが、プレミアリーグ ( [https://abema.tv/video/genre/premierleague](https://abema.tv/video/genre/premierleague) ) で流用されています。

![スクリーンショット](/img/career/202010-/stats_stats.png)

サッカー試合データ機能。スポーツの試合に関するデータ（選手名、試合のスコアリングなどの状況、その他）を閲覧できる機能です。Web ブラウザや iOS、 Android、 IPTV、Nitendo Switch など多岐にわたるデバイスで同じ体験を提供するため、WebView と iframe を活用してミニアプリとして実装しています。レガシーブラウザの対応もしており、IE11 を公式でサポートしている Preact を使用。eslint-plugin-compat などによる Linter の整備、Karma と Jasmine によるブラウザ上 (WebDriver 使用) でのユニットテスト、Storybook による Visual Regression Testing を行うなどしています。

![スクリーンショット](/img/career/202010-/stats_formation.png)

サッカー試合データ機能 フォーメーション

![スクリーンショット](/img/career/202010-/stats_member.png)

サッカー試合データ機能 メンバー
