import { h, Component } from 'preact'
import Nav from './nav'
import Scroll from 'react-scroll'
const Link = Scroll.Link
import styled from 'styled-components'
import { media } from '../../style-utils'

export default class Header extends Component {
  constructor() {
    super()
  }

  render(props) {
    return (
      <Wrapper>
        <Nav />
        <Heading className="title" itemProp="name">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
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
        </Heading>
        <p className="subtitle" itemProp="jobTitle">
          {props.subtitle}
        </p>
        <p>scroll down slowly and see.</p>
        <Link
          to="profile"
          smooth={true}
          duration={300}
          href="#profile"
          class="arrow-scroll"
        >
          <Arrow />
        </Link>
      </Wrapper>
    )
  }
}

const Wrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100%;
  height: 100vh;
  background-color: #1ba1ff;
  color: #fff;
  width: 100%;
  padding: 2rem;

  ${media.tablet`
    height: 80vh;
  `};

  & .arrow-scroll {
    position: absolute;
    bottom: 8%;
    align-self: center;
    width: 100%;
    padding: 2rem;
    text-align: center;
    animation: scrollHint 1s normal ease-out infinite;

    @keyframes scrollHint {
      0% {
        bottom: 8%;
      }
      50% {
        bottom: 6%;
      }
      100% {
        bottom: 8%;
      }
    }
  }

  & a:focus {
    outline-color: #fff;
  }
`

const Heading = styled.h1`
  font-family: 'Give You Glory', cursive;

  & svg {
    width: 100%;
  }
`

const Arrow = styled.div`
  display: inline-block;
  border: solid #fff;
  border-width: 0 0.3rem 0.3rem 0;
  padding: 0.6rem;
  transform: rotate(45deg);
`
