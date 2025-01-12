import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { type NextRouter, useRouter } from 'next/router';
import reactStringReplace from 'react-string-replace';

import { Heady } from '../components/Heady';
import { META } from '../constants/meta';
import styles from '../styles/CareerDetail.module.css';
import { formatDate, synthesizeString } from '../utils';

import { careerList, type CareerList, type Files } from './api/career';

type PathParams = {
  careerId: CareerList['id'];
};

type ImageListProps = {
  assetsPath: string;
  file: Files;
};

export const getStaticProps: GetStaticProps<CareerList> = async (context) => {
  const { careerId } = context.params as PathParams;
  const props = careerList.find((career) => career.id === careerId);

  if (!props) {
    return {
      notFound: true,
    };
  }

  return { props };
};

const handleGoBack = (router: NextRouter, e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.preventDefault();
  router.back();
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const paths = careerList.map((career) => `/${career.id}`);
  return { paths, fallback: false };
};

const Career: NextPage<CareerList> = (props) => {
  const router = useRouter();
  const { title, time, description, topic_names, assets, role, id } = props;
  const employmentPeriod = formatDate({ ...time });

  const tagList = topic_names.map((topicName) => (
    <li key={`${id}-${topicName}`} className={styles.tagItem}>
      {topicName}
    </li>
  ));

  const ImageList: React.VFC<ImageListProps> = (props) => {
    const { assetsPath, file } = props;

    return (
      <figure className={styles.figureItem}>
        <Image
          alt={file.alt}
          className={`${id}-${file.name}`}
          height={file.height ?? '405'}
          src={`${assetsPath}/${id}/${file.name}`}
          style={{
            width: 'auto',
            height: 'auto',
          }}
          width={file.width ?? '720'}
        />
        <figcaption>
          <p>
            {file.caption &&
              reactStringReplace(file.caption, /(https?:\/\/\S+)/g, (match) => (
                <a key={`${id}-link-${match}`} href={match}>
                  {match}
                </a>
              ))}
          </p>
        </figcaption>
      </figure>
    );
  };

  return (
    <>
      <Heady
        content={synthesizeString(META.CAREER_CONTENT, props.role)}
        title={`career - ${props.title} | ${META.TITLE}`}
      />
      <main className={styles.wrapper}>
        <header className={styles.header}>
          <button
            className={styles.backButton}
            type="button"
            onClick={(e) => handleGoBack(router, e)}
          >
            <svg aria-labelledby="backButtonTitle" viewBox="0 0 24 24">
              <title id="backButtonTitle">戻る</title>
              <g>
                <path d="M20 11H7.414l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a.996.996 0 0 0 1.414 0 1 1 0 0 0 0-1.414L7.414 13H20a1 1 0 1 0 0-2z" />
              </g>
            </svg>
          </button>
          <h1 className={styles.pageTitle} itemProp="name">
            career
          </h1>
        </header>
        <article className={styles.contents}>
          <section className={styles.section}>
            <h2 className={styles.jobTitle}>{title}</h2>
            <h3>{role}</h3>
            <div className={styles.time}>
              <time dateTime={employmentPeriod.from}>{time.from}</time>
              <span className={styles.timeHyphen}>-</span>
              <time dateTime={employmentPeriod.to}>{time.to}</time>
            </div>
            <div className={styles.description}>
              {description.split('\n').map((text) => (
                <p key={`${id}-desc-${text.slice(0, 20)}`} className={styles.descriptionText}>
                  {text}
                </p>
              ))}
            </div>
            <ul className={styles.tagList}>{tagList}</ul>
            {assets && (
              <div className={styles.imgSection}>
                {assets.files.map((file) => (
                  <ImageList key={file.name} assetsPath={assets.path} file={file} />
                ))}
                <small>
                  画像はイメージです。
                  <br />
                  the image is an image. you know what i mean?
                </small>
              </div>
            )}
          </section>
        </article>
      </main>
    </>
  );
};

export default Career;
