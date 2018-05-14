import { h, Component } from 'preact'
import style from './style.css'

export default class Credits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credits: require('../../assets/credits.json')
    }
  }

  render({}, { credits }) {
    return (
      <main className={style.wrapper}>
        <h2>{credits.title}</h2>
        <p>{credits.subtitle}</p>
        <ul className={style.list}>
          {credits.list &&
            credits.list.map((item, i) => <CreditsList key={i} {...item} />)}
        </ul>
      </main>
    )
  }
}

class CreditsList extends Component {
  render({ label, link }) {
    return (
      <li className={style.listItem}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          {label}
        </a>
      </li>
    )
  }
}
