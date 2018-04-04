import { h, Component } from 'preact'
import styles from './header.css'

export default class Header extends Component {
  constructor() {
    super()
  }

  render(props) {
    return (
      <header className={styles.wrapper}>
        <h1 className="title" itemProp="name">
          {props.title}
        </h1>
        <p class="subtitle" itemprop="jobTitle">
          {props.subtitle}
        </p>
      </header>
    )
  }
}
