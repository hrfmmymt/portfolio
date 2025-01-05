import type { NextApiRequest, NextApiResponse } from 'next';

const Device = {
  PC: 'PC',
  SP: 'SP',
} as const;
export type Device = (typeof Device)[keyof typeof Device];

export type Files = {
  name: string;
  height: number;
  width: number;
  alt: string;
  caption?: string;
};

export type CareerList = {
  title: string;
  time: {
    from: string;
    to: string;
  };
  device: Device[];
  id: string;
  role: string;
  description: string;
  topic_names: string[];
  assets?: {
    path: string;
    files: Files[];
  };
};

export const careerList: CareerList[] = [
  {
    title: '動画配信サービス開発',
    time: {
      from: 'oct. 2020',
      to: 'now',
    },
    device: ['PC', 'SP'],
    id: '202010-',
    role: 'developing video distribution services at AbemaTV inc.',
    description:
      '新規機能開発、コードレビュー、既存サービスの改修・リファクタリング、CI チューニング、パフォーマンス改善その他関連作業などを行っています。',
    topic_names: [
      'React',
      'RxJS',
      'NodeJS',
      'PostCSS',
      'ava',
      'Jest',
      'CircleCI',
      'GitHub Actions',
      'webpack',
      'esbuild',
    ],
    assets: {
      path: '/img/career',
      files: [
        {
          name: 'abema_web_desktop.png',
          caption: 'ABEMA の desktop 版 ( https://abema.tv/ )。',
          alt: '',
          height: 986,
          width: 1713,
        },
        {
          name: 'abema_web_mobile.png',
          caption: 'ABEMA mobile',
          alt: '',
          height: 896,
          width: 412,
        },
        {
          name: 'fifa_wcup_2022.png',
          caption:
            'FIFA ワールドカップ 2022 特設ページ ( https://abema.tv/video/genre/fifaworldcup ) 、試合一覧のタブやカルーセルを新規実装しました。\nワールドカップのページは3月末に削除されますが、プレミアリーグ ( https://abema.tv/video/genre/premierleague ) で流用されています。',
          alt: '',
          height: 1000,
          width: 1728,
        },
        {
          name: 'stats_stats.png',
          caption:
            'サッカー試合データ機能。スポーツの試合に関するデータ（選手名、試合のスコアリングなどの状況、その他）を閲覧できる機能です。Web ブラウザや iOS、 Android、 IPTV、Nitendo Switch など多岐にわたるデバイスで同じ体験を提供するため、WebView と iframe を活用してミニアプリとして実装しています。レガシーブラウザの対応もしており、IE11 を公式でサポートしている Preact を使用。eslint-plugin-compat などによる Linter の整備、Karma と Jasmine によるブラウザ上 (WebDriver 使用) でのユニットテスト、Storybook による Visual Regression Testing を行うなどしています。',
          alt: '',
          height: 1278,
          width: 590,
        },
        {
          name: 'stats_formation.png',
          caption: 'サッカー試合データ機能 フォーメーション',
          alt: '',
          height: 1278,
          width: 590,
        },
        {
          name: 'stats_member.png',
          caption: 'サッカー試合データ機能 メンバー',
          alt: '',
          height: 1278,
          width: 590,
        },
      ],
    },
  },
  {
    title: '大規模ブログ関連サービス開発',
    time: {
      from: 'nov. 2018',
      to: 'sep. 2020',
    },
    device: ['PC', 'SP'],
    id: '201811-',
    role: 'developing blog and some related services @CyberAgent, inc.',
    description:
      '新規機能開発、コードレビュー、既存サービスの改修・リファクタリング、SEO改善、パフォーマンス改善その他関連作業などを行っていました。',
    topic_names: [
      'React',
      'React Redux',
      'NodeJS',
      'PostCSS',
      'Less',
      'ava',
      'CircleCI',
      'webpack',
      'Gulp',
      'AMP',
      'PWA',
    ],
    assets: {
      path: '/img/career',
      files: [
        {
          name: 'ameblo_pc.png',
          caption:
            'アメーバブログ（アメブロ） PC 版です ( https://ameblo.jp/shibuya )。エディタなどの管理画面の改修をすることが多かった気がします。',
          alt: '',
          height: 766,
          width: 1402,
        },
        {
          name: 'ameblo_sp.png',
          caption: 'アメブロSP',
          alt: '',
          height: 1350,
          width: 764,
        },
        {
          name: 'ameba_pick.png',
          caption:
            'Ameba Pick という、アメーバブログに元々あったアフィリエイト機能をリニューアルしたサービスです ( https://content.ameba.jp/ameba_pick/start/ )。先に述べたエディタなどの管理画面の改修の延長線上にあった施策で自分に白羽の矢が立ちました。元々アメブロの管理画面のフロントエンドは Java の FreeMarker というテンプレートエンジンと jQuery で構成された、とてもレガシーなものでしたが、この度 React と TypeScript をこのページだけに導入しました。アクセシビリティー向上のためのチーム内での取り組みにも力を入れていました ( https://developers.cyberagent.co.jp/blog/archives/26695/ ) 。',
          alt: '',
          height: 968,
          width: 1311,
        },
        {
          name: 'ameba_pc.png',
          caption: 'アメーバPC ( https://www.ameba.jp/home )',
          alt: '',
          height: 766,
          width: 1402,
        },
        {
          name: 'ameba_sp.png',
          caption: 'アメーバSP ( https://s.amebame.com/#home )',
          alt: '',
          height: 1398,
          width: 826,
        },
        {
          name: 'amp.png',
          caption:
            'AMP ( https://gamp.ameblo.jp/shibuya ) 。対応終了しています ( https://ameblo.jp/staff/entry-12709589996.html ) 。',
          alt: '',
          height: 1348,
          width: 758,
        },
      ],
    },
  },
  {
    title: '航空券予約サイト など',
    time: {
      from: 'oct. 2015',
      to: 'oct. 2018',
    },
    device: ['PC', 'SP'],
    id: '201510-',
    role: 'developing skyticket.jp and some related services @Adventure, inc.',
    description:
      '新規サービス開発、コードレビュー、既存サービスの改修・リファクタリング、SEO改善、パフォーマンス改善、A / B テストその他関連作業などを行っています。',
    topic_names: [
      'React',
      'React Redux',
      'React Router',
      'jQuery',
      'Vue.js',
      'CircleCI',
      'webpack',
      'Gulp',
      'PHP',
      'Sass',
      'Compass',
      'AMP',
      'PWA',
    ],
    assets: {
      path: '/img/career',
      files: [
        {
          name: 'skyticket01.jpg',
          caption: 'やっていたやつです。',
          alt: 'skyticket モバイル、デスクトップの画面',
          height: 782,
          width: 1500,
        },
        {
          name: 'psi.jpg',
          caption:
            'PageSpeed Insights のスクリーンショット。Web サイトパフォーマンス改善は継続的に取り組んでいます。\nそれとこれはある種のハック情報なんですが、毎日の PageSpeed Insights の計測結果を何も言わず突然チャットで自動で定期投稿し始めてみたら、特に布教せずとも他の開発メンバーもサイトパフォーマンスを勝手に気にし出すようになりました。',
          alt: 'PageSpeed Insights のスクリーンショット',
          height: 1245,
          width: 1500,
        },
        {
          name: 'styleguide-ov.jpg',
          caption: '',
          alt: 'スタイルガイド',
          height: 1021,
          width: 1500,
        },
        {
          name: 'styleguide.jpg',
          caption: 'スタイルガイド。',
          alt: 'スタイルガイド',
          height: 928,
          width: 1500,
        },
        {
          name: 'skyticket_hotel.gif',
          caption:
            '当サイト開発時点での最新サービスがホテル予約です。技術的には React による SPA で PWA ( ServiceWorkers によるオフラインキャッシュと Web App Manifest による Add to Homescreen に対応 ) となっています。\nUI 設計は国内競業サービスよりも wego ( https://www.wego.com/ ) や treebo ( https://www.treebo.com/ ) trivago ( https://www.trivago.com/ ) あたりを意識しています。\n自分はコーディングより、主に開発環境整備やコードレビューに回ることになりました。',
          alt: 'skyticket ホテル',
          height: 730,
          width: 410,
        },
      ],
    },
  },
  {
    title: '広告配信システム管理画面',
    time: {
      from: 'oct. 2014',
      to: 'sep. 2015',
    },
    device: ['PC', 'SP'],
    id: '201410-201509',
    role: 'developing a front-end single page application.',
    description:
      'SSP 事業者にて、インターネット広告主向けサービスの CRUD 管理画面の開発を行いました。\nJS フレームワークは Angular (Angular-Seed) を使用しました。これの前の案件から足掛け一年ほど Angular (当時 v1) を扱っていましたが、慣れるという感触がなかったような。。難しかったですね。\nサーバーサイドがテストドリブンなデベロップメントだったので、フロントエンドでも Karma や Protractor などを使った E2E テストの導入を検討しましたが、コストに対する明確なリターンが得られるかといったところに答えを見出せず見送られました。',
    topic_names: ['Angular ( v1 )', 'Less', 'Google Chart Tools', 'Gulp'],
  },
  {
    title: 'web ブラウザ用ソーシャルゲーム',
    time: {
      from: 'jul. 2014',
      to: 'sep. 2014',
    },
    device: ['PC', 'SP'],
    id: '201407-201409',
    role: 'developing a front-end mobile web app.',
    description:
      '可愛いお部屋とアバターを作ってなんかやるブラウザゲーム。\nプロジェクトにおけるフロントエンドのスタックとしては、テンプレートエンジンに Velocity、jQuery / Angular (v1) で UI 実装を、キャラクターのアニメーションなどの表現に CreateJS が使用されていました。\n自分の担当は主に Angular 側で、イベント追加・更新や、 CSS / jQuery 修正含む UI 改修などを行なっていました。',
    topic_names: ['Angular ( v1 )', 'jQuery', 'Velocity', 'Grunt'],
  },
  {
    title: 'web サービスいくつか',
    time: {
      from: 'jan. 2014',
      to: 'jun. 2014',
    },
    device: ['PC', 'SP'],
    id: '201401-201406',
    role: 'developing a front-end some web services.',
    description:
      'いろいろな Web サービスを作ったり改修したりしました。内訳としては、\n- D3.js を用いた小売業の顧客動向を可視化する SPA 作成\n- 某大手企業の製品サイト改修・更新\n- クレジットカード会員向けサービスのリニューアル\n- IT勉強会・セミナーなどのイベント情報検索サービス改修\nです。',
    topic_names: ['jQuery', 'D3.js', 'Bootstrap', 'PHP', 'MySQL', 'Fireworks'],
  },
  {
    title: 'ファイナンシャルプランナー向け業務用 Web アプリ',
    time: {
      from: 'may. 2013',
      to: 'dec. 2013',
    },
    device: ['PC', 'SP'],
    id: '201305-201312',
    role: 'developing a front-end single page application.',
    description:
      'SPA 開発案件。\nよく聞かれるのでフランクに説明すると、「あなたが呼吸をし、結婚し、子どもを産み育て、その身が果てるまで生き抜くのにかかる費用は、、そしてそんなあなたに最適な保険がるんですよ」という営業プランに一役買うツールです。\n久しぶりにスーツを着ました。設計をアジャイルでするのが楽しかった思い出があります。Web フロントエンドの新技術に多く触れ、私自身がフロントエンドに振り切ってがんばっていこうと決心するに至った、これもまた一つの転機となった案件です。',
    topic_names: [
      'Yeoman',
      'Backbone.js',
      'CoffeeScript',
      'Bower',
      'Grunt',
      'Bootstrap',
      'EJS',
      'Sass',
      'Compass',
    ],
    assets: {
      path: '/img/career',
      files: [
        {
          height: 270,
          name: 'cap.png',
          width: 720,
          alt: '-5000兆円 生涯収支',
        },
      ],
    },
  },
  {
    title: 'スマートフォン用ソーシャルゲーム',
    time: {
      from: 'aug. 2012',
      to: 'apr. 2013',
    },
    device: ['SP'],
    id: '201208-201304',
    role: 'designing mobile app ui.',
    description:
      'デザイン・マークアップ担当として作業を行いました。\nアジャイル開発。ネイティブアプリでiOS / Android 対応。アニメーションなどの動きのある部分はUnity 3Dで、動きがなく更新頻度の高い画面はHTMLで構築していました。\n私は主にHTML側と画像作成に従事しておりました。Unityは要素の配置を変えたり、色を変えるなど極々軽微な作業でのみ使用しました。C# による機能実装などはしておりません。\nスキルの高い技術者と関わった、私にとって一つの転機となった案件だと思います。',
    topic_names: ['HTML', 'CSS', 'Photoshop', 'Photoshop JSX', 'Unity'],
  },
  {
    title: '小売業向けECサイト保守・運用',
    time: {
      from: 'apr. 2012',
      to: 'jul. 2012',
    },
    device: ['PC', 'SP'],
    id: '201204-201207',
    role: 'website markup, design.',
    description:
      '主にECサイトのコーディング、商品画像作成、バナー作成、メールマガジン作成を行いました。\nそれ以外にも、Yahoo! ショッピングや楽天市場にも出店しておりそちらの対応も、また店舗運営もしていた事業者だったので接客などを行うこともありました。',
    topic_names: ['XHTML', 'CSS', 'jQuery', 'Photoshop'],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<CareerList[]>) {
  res.status(200).json(careerList);
}
