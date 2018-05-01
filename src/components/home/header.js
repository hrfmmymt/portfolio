import { h, Component } from 'preact'
import style from './header.css'

import Nav from './nav'
import Scroll from 'react-scroll'
const Link = Scroll.Link

import { focusTargetElement, nl2p } from '../../utils'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: props,
      title: '',
      count: 0
    }
  }

  componentWillMount() {
    this.setTitle()
  }

  componentDidMount() {
    this.titleTimer = setInterval(() => this.setTitle(), 200)
  }

  componentWillUnmount() {
    clearTimeout(this.titleTimer)
  }

  setTitle() {
    /* eslint react/no-direct-mutation-state: 0 */
    this.setState({
      title: this.state.header.title.substring(0, this.state.count++)
    })
  }

  render(props) {
    return (
      <header className={style.header} title={props.image_title}>
        <Nav />
        <h1>{this.state.title}</h1>
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
