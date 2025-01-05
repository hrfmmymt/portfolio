import type { NextPage } from 'next';
import { Noto_Sans, Give_You_Glory } from 'next/font/google';
import { Events, Link } from 'react-scroll';

import { Career } from '../components/Career';
import { Etc } from '../components/Etc';
import { Heady } from '../components/Heady';
import { Nav } from '../components/Nav';
import { Profile } from '../components/Profile';
import { Section } from '../components/Section';
import { Skills } from '../components/Skills';
import { META } from '../constants/meta';
import { SECTION_LIST } from '../constants/section_title';
import styles from '../styles/Index.module.css';

import { careerList } from './api/career';

const focusTargetElement = () => {
  Events.scrollEvent.register('end', (_, element) => {
    element.setAttribute('tabindex', '-1');
    element.focus();
  });
};

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const giveYouGlory = Give_You_Glory({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Home: NextPage = () => {
  return (
    <>
      <Heady content={META.INDEX_CONTENT} title={META.TITLE} />
      <main className={`${styles.main} ${notoSans.className}`}>
        <header className={styles.header}>
          <Nav />
          <h1 className={giveYouGlory.className}># hirofumi miyamoto</h1>
          <div>
            <p>hi everyone! i am hrfmmymt.</p>
            <p>i'm always goofing off on the internet.</p>
            <p>scroll down slowly and see.</p>
          </div>
          <Link
            aria-label="Scroll to profile"
            className={styles.arrowScroll}
            duration={200}
            href="#profile"
            smooth={true}
            to="profile"
            onClick={() => focusTargetElement()}
          >
            <div aria-label="down arrow" className={styles.arrowCircle} role="img">
              <div className={styles.arrow} />
            </div>
          </Link>
        </header>

        <Section id={SECTION_LIST.PROFILE} title={SECTION_LIST.PROFILE}>
          <Profile />
        </Section>

        <Section
          className={SECTION_LIST.CAREER}
          id={SECTION_LIST.CAREER}
          title={SECTION_LIST.CAREER}
        >
          <Career />
        </Section>

        <Section
          className={SECTION_LIST.SKILLS}
          id={SECTION_LIST.SKILLS}
          title={SECTION_LIST.SKILLS_OR}
        >
          <Skills />
        </Section>

        <Section className={SECTION_LIST.ETC} id={SECTION_LIST.ETC} title={SECTION_LIST.ETC_PERIOD}>
          <Etc />
        </Section>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      career: careerList,
    },
  };
};

export default Home;
