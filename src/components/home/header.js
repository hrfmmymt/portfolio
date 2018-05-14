import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import style from './header.css'

import Nav from './nav'
import Scroll from 'react-scroll'
const Link = Scroll.Link

import { focusTargetElement, nl2p } from '../../utils'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: props.header
    }
  }

  render(props) {
    return (
      <header className={style.header} title={this.state.header.image_title}>
        <Nav props={props} />
        <h1>{this.state.header.title}</h1>
        <div itemProp="jobTitle">
          {this.state.header.subtitle && nl2p(this.state.header.subtitle)}
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

Header.propTypes = {
  header: PropTypes.object.isRequired
}
