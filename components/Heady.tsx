import Head from 'next/head';
import React from 'react';

import { META } from '../constants/meta';

type Props = {
  content: string;
  title: string;
};

export const Heady: React.VFC<Props> = (props) => {
  const { content, title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta content="width=device-width,initial-scale=1" name="viewport" />
      <meta content="yes" name="mobile-web-app-capable" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta content={META.AUTHOR} name="author" />
      <meta content={`Copyright(c)${META.AUTHOR}. 2018 All Rights Reserved.`} name="copyright" />
      <meta content="telephone=no,address=no,email=no" name="format-detection" />
      <meta content={content} name="description" />
      <meta content={content} property="og:description" />
      <meta content={title} property="og:title" />
      <meta content="https://hrfmmymt.com" property="og:url" />
      <meta content="https://hrfmmymt.com/img/icons/icon_512x512.jpg" property="og:image" />
      <meta content="website" property="og:type" />
      <meta content="ja_JP" property="og:locale" />
      <meta content={content} name="twitter:title" />
      <meta content={content} name="twitter:description" />
      <meta content="https://hrfmmymt.com/img/icons/icon_192x192.jpg" name="twitter:image" />
      <meta content="summary" name="twitter:card" />
      <meta content="@hrfmmymt" name="twitter:site" />
      <meta content={META.THEME_COLOR} name="theme-color" />
      <link href="/manifest.json" rel="manifest" />
      <link href="/img/icons/icon_512x512.jpg" rel="image_src" />
      <link href="/img/icon_192x192.jpg" rel="apple-touch-icon" />
      <link href="/favicon.ico" rel="icon" />
      <link href="/favicon.ico" rel="shortcut icon" />
    </Head>
  );
};
