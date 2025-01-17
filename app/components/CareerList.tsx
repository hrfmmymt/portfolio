import Link from "next/link";

import { getCareerPosts, type CareerPost } from "../career/utils";
import styles from "./Career.module.css";

const CareerItem: React.FC<{ post: CareerPost }> = ({ post }) => {
  const tagList = post.metadata.tagList.map((tag) => (
    <li key={`${post.slug}-${tag}`} className={styles.tagItem}>
      {tag}
    </li>
  ));

  return (
    <>
      <div className={styles.time}>
        <time dateTime={post.metadata.startDate}>
          {post.metadata.startDate}
        </time>
        <span className={styles.timeHyphen}>-</span>
        <time dateTime={post.metadata.endDate}>{post.metadata.endDate}</time>
      </div>
      {Array.isArray(post.metadata.device) &&
      post.metadata.device.length > 1 ? (
        <div className={`${styles.circle} ${styles.PC} ${styles.SP}`} />
      ) : (
        <div
          className={`${styles.circle} ${styles[post.metadata.device as string]}`}
        />
      )}

      <div className={styles.description}>
        <h3 className={styles.jobTitle}>{post.metadata.title}</h3>
        <p className={styles.jobRole}>{post.metadata.role}</p>
        <ul className={styles.tagList}>{tagList}</ul>
      </div>
    </>
  );
};

export function CareerList() {
  const posts = getCareerPosts();

  return (
    <ul className={styles.timelineList}>
      {posts
        .sort((a, b) => {
          if (new Date(a.metadata.startDate) > new Date(b.metadata.startDate)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <li key={post.slug} className={styles.timelineItem}>
            <Link className={styles.link} href={`/career/${post.slug}`}>
              <CareerItem post={post} />
            </Link>
          </li>
        ))}
    </ul>
  );
}
