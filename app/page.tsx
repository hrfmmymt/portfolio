import { Nav } from './components/nav';
import styles from './styles/Index.module.css';
import { Noto_Sans, Give_You_Glory } from 'next/font/google';
import { Profile } from './components/Profile';
import { CareerList } from './components/CareerList';
import { Section } from './components/Section';
import { Skills } from './components/Skills';
import { SECTION_LIST } from './constants/section-title';
import { Etc } from './components/Etc';

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

export default function Page() {
  return (
    <main className={notoSans.className}>
      <header className={styles.header}>
        <Nav />
        <h1 className={giveYouGlory.className}># hirofumi miyamoto</h1>
        <div>
          <p>hi everyone! i am hrfmmymt.</p>
          <p>i'm always goofing off on the internet.</p>
          <p>scroll down slowly and see.</p>
        </div>
      </header>
      <Section id={SECTION_LIST.PROFILE} title={SECTION_LIST.PROFILE}>
        <Profile />
      </Section>
      <Section className={SECTION_LIST.CAREER} id={SECTION_LIST.CAREER} title={SECTION_LIST.CAREER}>
        <CareerList />
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
  );
}
