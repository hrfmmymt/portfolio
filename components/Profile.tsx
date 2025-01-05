import Image from 'next/image';

import styles from './Profile.module.css';

export const Profile: React.VFC = () => {
  return (
    <>
      <Image
        priority
        alt="profile image"
        height={405}
        src="/img/profile/profile_l.jpg"
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={720}
      />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <h3>### about</h3>
          <ul>
            <li className={styles.childListItem}>japanese web [ developer | designer ]</li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <h3>### bio</h3>
          <ul className={styles.childList}>
            <li>
              <h4>#### id</h4>
              <ul>
                <li className={styles.childListItem}>hrfmmymt</li>
              </ul>
            </li>
            <li>
              <h4>#### location</h4>
              <ul>
                <li className={styles.childListItem}>tokyo, jp</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
