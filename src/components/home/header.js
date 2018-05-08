import { h, Component } from 'preact'
import style from './header.css'

import Nav from './nav'
import Scroll from 'react-scroll'
const Link = Scroll.Link

import { focusTargetElement, nl2p } from '../../utils'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render(props) {
    console.log(props)
    return (
      <header className={style.header} title={props.image_title}>
        <Nav />
        <h1>{props.title}</h1>
        <div itemProp="jobTitle">{props.subtitle && nl2p(props.subtitle)}</div>
        <Link
          to="profile"
          smooth={true}
          duration={300}
          href="#profile"
          className={style.arrowScroll}
          aria-label="Scroll to profile"
          onClick={focusTargetElement()}
        >
          <div className={style.arrowCircle} role="img" aria-label="down arrow">
            <div className={style.arrow} />
          </div>
        </Link>
      </header>
    )
  }
}
