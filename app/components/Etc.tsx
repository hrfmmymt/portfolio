import Image from "next/image";
import Link from "next/link";

import { type EtcList, etcList } from "../api/etc";

import styles from "./Etc.module.css";

const EtcListItem: React.FC<EtcList> = (etcListItem) => {
  return (
    <li className={styles.etcListItem}>
      <Link
        className={`${styles.link} ${styles[etcListItem.className]}`}
        href={etcListItem.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          alt={""}
          height={26}
          src={`/img/etc/${etcListItem.className}.svg`}
          style={{
            width: "26px",
            height: "26px",
          }}
          width={26}
        />
        <span>{etcListItem.label}</span>
      </Link>
    </li>
  );
};

const Copyright: React.VFC = () => (
  <p className={styles.copyright}>
    © {`${new Date().getFullYear()} `}
    <Link
      className={styles.copyrightLink}
      href="https://hrfmmymt.github.io"
      rel="noopener noreferrer"
      target="_blank"
    >
      hirofumi miyamoto
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
