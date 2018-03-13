import { h, Component } from 'preact'
import styles from './footer.css'

class FooterItem extends Component {
  render({ label, link }) {
    return (
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </div>
    )
  }
}

export default class Footer extends Component {
  render(props) {
    return (
      <footer className={styles.wrapper}>
        <div>
          <div>
            <h3>{props.title}</h3>
          </div>
          {props.list && props.list.map(item => <FooterItem {...item} />)}
        </div>
      </footer>
    )
  }
}
