import { h, Component } from 'preact'
import style from './header.css'

import Nav from './nav'
import Scroll from 'react-scroll'
const Link = Scroll.Link

export default class Header extends Component {
  constructor() {
    super()
  }

  render(props) {
    return (
      <header className={style.header}>
        <Nav />
        <h1 className={style.title} itemProp="name">
          <svg
            className={style.titleSvg}
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <title>{props.title}</title>
            <desc>{props.title}</desc>
            <path id="path">
              <animate
                attributeName="d"
                values="m0,110 h0;m0,110 h1100"
                dur="12s"
                repeatCount="indefinite"
              />
            </path>
            <text fontSize="36" fill="rgb(255,255,255)">
              <textPath xlinkHref="#path">{props.title}</textPath>
            </text>
          </svg>
        </h1>
        <p itemProp="jobTitle">{props.subtitle}</p>
        <p>scroll down slowly and see.</p>
        <Link
          to="profile"
          smooth={true}
          duration={300}
          href="#profile"
          className={style.arrowScroll}
          aria-label="Scroll to profile"
        >
          <div className={style.arrowCircle}>
            <div className={style.arrow} />
          </div>
        </Link>
      </header>
    )
  }
}
