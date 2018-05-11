import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'
const Link = Scroll.Link
import { focusTargetElement } from '../../utils'
import style from './nav.css'

export default class Nav extends Component {
  constructor(props) {
    super(props)
  }

  state = { open: false }

  toggle = () => this.setState({ open: !this.state.open })

  close = () => this.setState({ open: false })

  componentDidMount() {
    focusTargetElement()
  }

  render({ props }, { open }) {
    return (
      <div className={open ? `${style.wrapper} ${style.open}` : style.wrapper}>
        <Hamburger
          open={open}
          className={
            open ? `${style.hamburger} ${style.open}` : style.hamburger
          }
          onClick={this.toggle}
        />
        <nav
          className={open ? `${style.navList} ${style.open}` : style.navList}
        >
          <NavList {...props} />
        </nav>
      </div>
    )
  }
}

class NavList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: props.profile,
      career: props.career,
      skills: props.skills,
      etc: props.etc
    }
  }

  render() {
    const list = []
    let key
    for (key in this.state) {
      const str = this.state[key].title.replace('## ', '')

      list.push(
        <li>
          <Link
            to={key}
            smooth={true}
            duration={300}
            href={'#' + key}
            onClick={this.close}
          >
            {str}
          </Link>
        </li>
      )
    }

    return <ul className={style.list}>{list}</ul>
  }
}

NavList.propTypes = {
  profile: PropTypes.string,
  career: PropTypes.string,
  skills: PropTypes.string,
  etc: PropTypes.string
}

const Hamburger = ({ open, ...props }) => (
  <button
    type="button"
    open={open}
    {...props}
    aria-label={open ? 'Close menu' : 'Open menu'}
  >
    <div className={style.ham} />
    <div className={style.bur} />
    <div className={style.ger} />
  </button>
)

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired
}
