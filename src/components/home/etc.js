import { h, Component } from 'preact'
import styles from './etc.css'

class EtcItem extends Component {
  render({ label, link, className }) {
    return (
      <li>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.links} ${className}`}
        >
          {label}
        </a>
      </li>
    )
  }
}

export default class Etc extends Component {
  render(props) {
    return (
      <footer className={styles.wrapper}>
        <h2>{props.title}</h2>
        <ul>
          {props.list &&
            props.list.map((item, i) => <EtcItem key={i} {...item} />)}
        </ul>
      </footer>
    )
  }
}
