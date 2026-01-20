import type { SectionId, SectionTitle } from '../constants/section-title';

import styles from './Section.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  id: SectionId;
  title: SectionTitle;
};

export const Section: React.FC<Props> = (props) => {
  const { id, title, children, className } = props;
  return (
    <section
      className={className ? `${styles.section} ${styles[className]}` : styles.section}
      id={id}
    >
      <h2 className={styles.title}>
        ## {title}
      </h2>
      {children}
    </section>
  );
};
