'use client';

import { type FC, useEffect, useState } from 'react';

import { skillsList, type SkillsList } from '../api/skills';

import styles from './Skills.module.css';

const shuffledSkillsList = (list: SkillsList[]) => {
  let i = list.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
  return list;
};

const SkillsListItem: FC<SkillsList> = (skillsListItem) => {
  const skillsDetail = { className: '', ariaLabel: '' };
  const [list, setList] = useState<SkillsList>();

  useEffect(() => {
    setList(skillsListItem);
  }, [skillsListItem]);

  if (!list) {
    return null;
  }

  switch (list.value) {
    case 1:
      skillsDetail.className = '😩';
      skillsDetail.ariaLabel = `${list.label} is During study`;
      break;
    case 2:
      skillsDetail.className = '😀';
      skillsDetail.ariaLabel = `${list.label} is OK`;
      break;
    case 3:
      skillsDetail.className = '😍';
      skillsDetail.ariaLabel = `${list.label} is Love`;
      break;
  }

  return (
    <li
      aria-label={skillsDetail.ariaLabel}
      className={`${styles.skillsListItem} ${styles[skillsDetail.className]}`}
    >
      {list.label}
    </li>
  );
};

const Description: React.FC = () => (
  <>
    <p>these blocks are large enough to be interested or skilled</p>
    <p>ブロックの大きさと興味や技術の大きさが比例しています。</p>
  </>
);

export const Skills: React.FC = () => {
  const shuffledList = shuffledSkillsList(skillsList);
  return (
    <>
      <Description />
      <ul className={styles.list}>
        {shuffledList.map((item: SkillsList) => (
          <SkillsListItem key={item.label} {...item} />
        ))}
      </ul>
    </>
  );
};
