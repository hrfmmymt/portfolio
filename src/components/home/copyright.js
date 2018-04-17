import { h, Component } from 'preact'
import style from './copyright.css'

export default class Copyright extends Component {
  render(props) {
    return (
      <p className={style.wrapper}>
        © {`${new Date().getFullYear()} `}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://hrfmmymt.github.io"
        >
          {props.name}
        </a>
        . All rights reserved.
      </p>
    )
  }
}
