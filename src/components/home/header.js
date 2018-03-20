import { h, Component } from 'preact'
import styles from './header.css'

export default class Header extends Component {
  constructor() {
    super()
  }

  render(props) {
    return (
      <header className={styles.wrapper}>
        <h2 className="title" itemProp="name">
          {props.title}
        </h2>
      </header>
    )
  }
}
