import { getCareerList, getCareerData } from '../utils';
import { Markdown } from '../../components/markdown';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Noto_Sans } from 'next/font/google';

import styles from '../../styles/CareerDetail.module.css';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hrfmmymt.com';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export async function generateStaticParams() {
  const posts = await getCareerList();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getCareerData(params.slug);
  if (!post) {
    return {};
  }

  const { title, role } = post.metadata;
  const description = `${role} - ${post.metadata.tagList.join(', ')}`;
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getCareerData(params.slug);
  if (!post) {
    console.log('Post data not found');
    return <div>記事が見つかりませんでした。</div>;
  }

  if (!post.content) {
    console.log('Post content is missing');
    return <div>記事の内容を読み込めませんでした。</div>;
  }

  const tagList = post.metadata.tagList.map((item) => (
    <li key={`${post.metadata.id}-${item}`} className={styles.tagItem}>
      {item}
    </li>
  ));

  return (
    <main className={`${notoSans.className} ${styles.wrapper}`}>
      <header className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <svg aria-labelledby="backButtonTitle" viewBox="0 0 24 24">
            <title id="backButtonTitle">戻る</title>
            <g>
              <path d="M20 11H7.414l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a.996.996 0 0 0 1.414 0 1 1 0 0 0 0-1.414L7.414 13H20a1 1 0 1 0 0-2z" />
            </g>
          </svg>
        </Link>
        <h1 className={styles.pageTitle} itemProp="name">
          career
        </h1>
      </header>
      <div className={styles.contents}>
        <div className={styles.section}>
          <h2 className={styles.jobTitle}>{post.metadata.title}</h2>
          <h3>{post.metadata.role}</h3>
          <div className={styles.time}>
            <time dateTime={post.metadata.startDate}>{post.metadata.startDate}</time>
            <span className={styles.timeHyphen}>-</span>
            <time dateTime={post.metadata.endDate}>{post.metadata.endDate}</time>
          </div>
          <ul className={styles.tagList}>{tagList}</ul>
          <article>
            <Markdown content={post.content} />
          </article>
        </div>
      </div>
    </main>
  );
}
