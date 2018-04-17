import { h, Component } from 'preact'
import Copyright from './copyright'
import style from './etc.css'
import H2style from './h2.css'

class EtcItem extends Component {
  render({ label, link, className }) {
    return (
      <li className={style.listItem}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${style.link} ${style[className]}`}
        >
          <img src={`../../assets/etc/${className}.svg`} alt={label} />
          {label}
        </a>
      </li>
    )
  }
}

export default class Etc extends Component {
  render(props) {
    return (
      <footer name="etc" id="etc" className={style.wrapper}>
        <h2 className={H2style.headingLevel2}>{props.title}</h2>
        <div className={style.contents}>
          <ul className={style.list}>
            {props.list &&
              props.list.map((item, i) => <EtcItem key={i} {...item} />)}
          </ul>
          <Copyright name={props.name} />
        </div>
      </footer>
    )
  }
}
