import { h, Component } from 'preact'
import style from './style.css'

export default class Credits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credits: require('../../assets/credits.json')
    }

    const keyframesStyle = `@keyframes rainbow-color-keyframes {
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
    }`

    injectStyle(keyframesStyle)
  }

  render({}, { credits }) {
    return (
      <main className={style.wrapper}>
        <h2>{credits.title}</h2>
        <p>all words, movies and photos by {credits.name}.</p>
        <p>{credits.subtitle}</p>
        <ul>
          {credits.list &&
            credits.list.map((item, i) => <CreditsList key={i} {...item} />)}
        </ul>
        <span>and, made it based on </span>
        <a
          href="https://github.com/tomasswood/preact-homepage-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          {stringSplitter('tomasswood/preact-homepage-generator')}
        </a>
        <p>
          © {`${new Date().getFullYear()} `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hrfmmymt.github.io"
          >
            {credits.name}
          </a>
          . All rights reserved.
        </p>
      </main>
    )
  }
}

const stringSplitter = str =>
  str.split('').map((char, index) => (
    <span
      key={index}
      style={`animation: rainbow-color-keyframes 0.6s ${(index + 1) /
        100 *
        5}s linear infinite`}
    >
      {char}
    </span>
  ))

class CreditsList extends Component {
  render({ label, link }) {
    return (
      <li>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{stringSplitter(label)}</span>
        </a>
      </li>
    )
  }
}

const injectStyle = style => {
  const styleElement = document.createElement('style')
  let styleSheet = null
  document.head.appendChild(styleElement)
  styleSheet = styleElement.sheet
  styleSheet.insertRule(style, styleSheet.cssRules.length)
}
