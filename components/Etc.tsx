import Image from 'next/image';
import Link from 'next/link';

import { EtcList, etcList } from '../pages/api/etc';

import styles from './Etc.module.css';

const EtcListItem: React.VFC<EtcList> = (etcListItem) => {
  return (
    <li className={styles.etcListItem}>
      <Link href={etcListItem.href}>
        <a
          className={`${styles.link} ${styles[etcListItem.className]}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt=""
            className={styles.linkIcon}
            height={26}
            layout={'fixed'}
            loading={'lazy'}
            src={`/img/etc/${etcListItem.className}.svg`}
            unoptimized={false}
            width={26}
          />
          <span>{etcListItem.label}</span>
        </a>
      </Link>
    </li>
  );
};

const Copyright: React.VFC = () => (
  <p className={styles.copyright}>
    © {`${new Date().getFullYear()} `}
    <Link href="https://hrfmmymt.github.io">
      <a className={styles.copyrightLink} rel="noopener noreferrer" target="_blank">
        hirofumi miyamoto
      </a>
    </Link>
    . All rights reserved.
  </p>
);

export const Etc: React.VFC = () => {
  return (
    <>
      <ul className={styles.list}>
        {etcList.map((item: EtcList) => (
          <EtcListItem key={item.label} {...item} />
        ))}
      </ul>
      <footer className={styles.footer}>
        <Copyright />
      </footer>
    </>
  );
};
