"use client";

// import type { Metadata } from "next";

import styles from "../styles/Credits.module.css";

import { creditsList } from "../api/credits";
import React, { type FC } from "react";

// export const metadata: Metadata = {
// 	title: "Credits | Hirofumi Miyamoto",
// 	description: "Credits page",
// };

type CreditsListProps = {
  label: string;
  link: string;
};

const stringSplitter = (str: string, parentKey = "") =>
  str.split("").map((char, index) => (
    <React.Fragment key={`${parentKey}-${char}-${index}-${char.charCodeAt(0)}`}>
      <span>{char}</span>
      <style jsx>{`
        span {
          animation: rainbow-color-keyframes 0.6s
            ${(char.charCodeAt(0) / 100) * 5}s linear infinite;
        }
        @keyframes rainbow-color-keyframes {
          0% {
            color: #0057b8;
          }
          20% {
            color: #f11e4a;
          }
          40% {
            color: #f8a527;
          }
          60% {
            color: #266d7f;
          }
          80% {
            color: #82a;
          }
          100% {
            color: #0057b8;
          }
        }
      `}</style>
    </React.Fragment>
  ));
const CreditsList: FC<CreditsListProps> = ({ label, link }) => {
  return (
    <li key={label} className={styles.creditsListItem}>
      {link === "" ? (
        <span>{stringSplitter(label, `span-${label}`)}</span>
      ) : (
        <a
          className={styles.creditsListItemLink}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>{stringSplitter(label, `link-${label}`)}</span>
        </a>
      )}
    </li>
  );
};

export default function CreditsPage() {
  return (
    <>
      <main className={styles.wrapper}>
        <h2 className={styles.title}>{creditsList.title}</h2>
        <p>all words, movies and photos by {creditsList.name}.</p>
        <p>{creditsList.subtitle}</p>
        <ul>
          {creditsList.list.map((item) => (
            <CreditsList key={item.label} {...item} />
          ))}
        </ul>
        <span>and, made it based on </span>
        <a
          className={styles.creditsListItemLink}
          href="https://github.com/tomasswood/preact-homepage-generator"
          rel="noopener noreferrer"
          target="_blank"
        >
          {stringSplitter("tomasswood/preact-homepage-generator")}
        </a>
        <dl className={styles.defList}>
          <dt>work soundtracks</dt>
          <dd>
            <ul>
              {creditsList.subList.map((item) => (
                <CreditsList key={item.label} {...item} />
              ))}
            </ul>
          </dd>
        </dl>
        <p className={styles.copy}>
          © {`${new Date().getFullYear()} `}
          <a
            className={styles.copyLink}
            href="https://hrfmmymt.github.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            {creditsList.name}
          </a>
          . All rights reserved.
        </p>
      </main>
      <style global jsx>{`
        div#__next {
          background-color: #0e1e25;
          height: 100%;
        }
        @media (max-width: 414px) {
          div#__next {
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
