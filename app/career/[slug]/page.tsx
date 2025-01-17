import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { getCareerPosts } from "app/career/utils";
import { baseUrl } from "app/sitemap";
import Link from "next/link";

import styles from "../../styles/CareerDetail.module.css";

export async function generateStaticParams() {
  const posts = getCareerPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = getCareerPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, startDate, role, device, id } = post.metadata;
  const description = `${role} - ${post.metadata.tagList.join(", ")}`;
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: startDate,
      url: `${baseUrl}/career/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Career({ params }) {
  const post = getCareerPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const tagList = post.metadata.tagList.map((item) => (
    <li key={`${post.metadata.id}-${item}`} className={styles.tagItem}>
      {item}
    </li>
  ));

  return (
    <main className={styles.wrapper}>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: post.metadata.title,
          datePosted: post.metadata.startDate,
          validThrough: post.metadata.endDate,
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "JP",
            },
          },
          employmentType: "FULL_TIME",
          description: post.metadata.role,
          skills: post.metadata.tagList.join(", "),
          hiringOrganization: {
            "@type": "Organization",
            name: post.metadata.title,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${baseUrl}/career/${post.slug}`,
          },
        })}
      </script>

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
            <time dateTime={post.metadata.startDate}>
              {post.metadata.startDate}
            </time>
            <span className={styles.timeHyphen}>-</span>
            <time dateTime={post.metadata.endDate}>
              {post.metadata.endDate}
            </time>
          </div>
          <ul className={styles.tagList}>{tagList}</ul>
          <article>
            <CustomMDX source={post.content} />
          </article>
        </div>
      </div>
    </main>
  );
}
