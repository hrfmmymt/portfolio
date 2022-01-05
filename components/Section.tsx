import Link from 'next/link';
import React from 'react';

import { SectionId, SectionTitle } from '../constants/section_title';

import styles from './Section.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  id: SectionId;
  title: SectionTitle;
};

const CreditsLink: React.VFC = () => (
  <div className={styles.heart}>
    <Link href={`/credits`}>
      <a>💗</a>
    </Link>
  </div>
);

export const Section: React.VFC<Props> = (props) => {
  const { id, title, children, className } = props;
  return (
    <section
      className={className ? `${styles.section} ${styles[className]}` : styles.section}
      id={id}
    >
      <h2 className={styles.title}>
        ## {title}
        {id === 'skills' && <CreditsLink />}
      </h2>
      {children}
    </section>
  );
};
