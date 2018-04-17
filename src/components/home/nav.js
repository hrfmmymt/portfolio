import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'
const Link = Scroll.Link
const Events = Scroll.Events
import style from './nav.css'

export default class Nav extends Component {
  state = { open: false }

  toggle = () => this.setState({ open: !this.state.open })

  close = () => this.setState({ open: false })

  componentDidMount() {
    Events.scrollEvent.register('end', (to, element) => {
      element.setAttribute('tabindex', '-1')
      element.focus()
    })
  }

  render({}, { open }) {
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
          <ul className={style.list}>
            <li>
              <Link
                to="profile"
                smooth={true}
                duration={300}
                href="#profile"
                onClick={this.close}
              >
                profile
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="career"
                spy={true}
                smooth={true}
                duration={300}
                href="#career"
                onClick={this.close}
              >
                career
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={300}
                href="#skills"
                onClick={this.close}
              >
                skills, or
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="etc"
                spy={true}
                smooth={true}
                duration={300}
                href="#etc"
                onSetActive={this.handleSetActive}
                onClick={this.close}
              >
                etc.
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
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
