import Link from 'next/link';

import { useCareerSwr } from '../fetch/useCareerSwr';
import type { CareerList } from '../pages/api/career';
import { formatDate } from '../utils';

import styles from './Career.module.css';

type CareerItemProps = { career: CareerList };

const CareerItem: React.FC<CareerItemProps> = (props) => {
  const { time, title, role, topic_names, device } = props.career;
  const employmentPeriod = formatDate({ ...time });

  const tagList = topic_names.map((topicName) => (
    <li key={`${props.career.id}-${topicName}`} className={styles.tagItem}>
      {topicName}
    </li>
  ));

  return (
    <>
      <div className={styles.time}>
        <time dateTime={employmentPeriod.from}>{time.from}</time>
        <span className={styles.timeHyphen}>-</span>
        <time dateTime={employmentPeriod.to}>{time.to}</time>
      </div>
      {device.length > 1 ? (
        <div className={`${styles.circle} ${styles.PC} ${styles.SP}`} />
      ) : (
        <div className={`${styles.circle} ${styles[device[0]]}`} />
      )}

      <div className={styles.description}>
        <h3 className={styles.jobTitle}>{title}</h3>
        <small className={styles.role}>{role}</small>
        <ul className={styles.tagList}>{tagList}</ul>
      </div>
    </>
  );
};

export const Career = () => {
  const { careerList, isLoading, isError } = useCareerSwr();

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>fetch failed</div>;

  return (
    <ul className={styles.timelineList}>
      {careerList.map((career: CareerList) => (
        <li key={career.id} className={styles.timelineItem}>
          <Link as={`/${career.id}`} className={styles.link} href="/[careerId]">
            <CareerItem career={career} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
