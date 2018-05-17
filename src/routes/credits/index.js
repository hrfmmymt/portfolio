import { h, Component } from 'preact'
import style from './style.css'

const injectStyle = style => {
  const styleElement = document.createElement('style')
  let styleSheet = null
  document.head.appendChild(styleElement)
  styleSheet = styleElement.sheet
  styleSheet.insertRule(style, styleSheet.cssRules.length)
}

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

  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.className = 'credits'
  }

  render({}, { credits }) {
    return (
      <main className={style.wrapper}>
        <h2 className={style.title}>{credits.title}</h2>
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
          className={style.link}
        >
          {stringSplitter('tomasswood/preact-homepage-generator')}
        </a>
        <dl className={style.defList}>
          <dt>work soundtracks</dt>
          <dd>
            <ul>
              {credits.sublist &&
                credits.sublist.map((item, i) => (
                  <CreditsList key={i} {...item} />
                ))}
            </ul>
          </dd>
        </dl>
        <p className={style.copy}>
          © {`${new Date().getFullYear()} `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hrfmmymt.github.io"
            className={style.link}
          >
            {credits.name}
          </a>
          . All rights reserved.
        </p>
      </main>
    )
  }
}

class CreditsList extends Component {
  render({ label, link }) {
    return (
      <li>
        {link === '' ? (
          <a tabIndex="-1" className={style.notLink}>
            <span>{stringSplitter(label)}</span>
          </a>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={style.link}
          >
            <span>{stringSplitter(label)}</span>
          </a>
        )}
      </li>
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
