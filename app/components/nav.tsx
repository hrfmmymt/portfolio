'use client';

import { useEffect } from 'react';
import { Events, Link as Scroll } from 'react-scroll';
import { useToggle } from 'react-use';

import { SECTION_LIST } from '../constants/section-title';

import styles from './Nav.module.css';

type ButtonProps = {
  className: string;
  handleToggle: () => void;
  isOpen: boolean;
};

type NavListProps = {
  handleClose: () => void;
};

const SECTION_ID_LIST = [
  SECTION_LIST.PROFILE,
  SECTION_LIST.CAREER,
  SECTION_LIST.ETC,
];

const focusTargetElement = () => {
  Events.scrollEvent.register('end', (_, element) => {
    element.setAttribute('tabindex', '-1');
    element.focus();
  });
};

export const Nav: React.FC = () => {
  const [isOpen, toggle] = useToggle(false);

  useEffect(() => {
    focusTargetElement();
  }, []);

  return (
    <div className={isOpen ? `${styles.wrapper} ${styles.open}` : styles.wrapper}>
      <Hamburger
        className={isOpen ? `${styles.hamburger} ${styles.open}` : styles.hamburger}
        handleToggle={toggle}
        isOpen={isOpen}
      />
      <nav className={isOpen ? `${styles.navList} ${styles.open}` : styles.navList}>
        <NavList handleClose={() => toggle(false)} />
      </nav>
    </div>
  );
};

const Hamburger: React.FC<ButtonProps> = ({ className, isOpen, handleToggle }) => (
  <button
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    className={className}
    type="button"
    onClick={handleToggle}
  >
    <div className={styles.ham} />
    <div className={styles.bur} />
    <div className={styles.ger} />
  </button>
);

const NavList: React.VFC<NavListProps> = ({ handleClose }) => {
  const listItems = SECTION_ID_LIST.map((id) => (
    <li key={id} className={styles.listItem}>
      <Scroll
        className={styles.listItemLink}
        duration={200}
        href={`#${id}`}
        offset={60}
        smooth={true}
        to={`${id}`}
        onClick={handleClose}
      >
        {id === 'etc' ? SECTION_LIST.ETC_PERIOD : id}
      </Scroll>
    </li>
  ));

  return <ul className={styles.list}>{listItems}</ul>;
};
