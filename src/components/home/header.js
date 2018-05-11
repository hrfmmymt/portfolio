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
    return (
      <header className={style.header} title={props.header.image_title}>
        <Nav props={props} />
        <h1>{props.header.title}</h1>
        <div itemProp="jobTitle">
          {props.header.subtitle && nl2p(props.header.subtitle)}
        </div>
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
