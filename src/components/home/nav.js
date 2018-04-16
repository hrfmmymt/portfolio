import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'
const Link = Scroll.Link
const Events = Scroll.Events
import styled from 'styled-components'
import { media } from '../../style-utils'

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
      <Wrapper className={open ? 'open' : ''}>
        <StyledHamburger
          open={open}
          className={open ? 'open' : ''}
          onClick={this.toggle}
        />
        <NavList className={open ? 'open' : ''}>
          <List>
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
          </List>
        </NavList>
      </Wrapper>
    )
  }
}

const Hamburger = ({ open, ...props }) => (
  <button type="button" open={open} {...props}>
    <div className="ham" />
    <div className="bur" />
    <div className="ger" />
  </button>
)

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired
}

const Wrapper = styled.div`
  align-self: flex-end;

  &.open {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0;
    z-index: 2;
    text-align: center;
    transition: all 250ms ease;
    transform: translateZ(0);

    background: #f2f2f2;
    height: 100%;
    overflow: auto;
    overflow-scrolling: touch;
  }
`

const NavList = styled.nav`
  display: flex;
  width: 100%;

  ${media.tablet`
    display: none;
    position: absolute;
    top: 5rem;

    &.open {
      display: block;
    }
  `};
`

const List = styled.ul`
  display: flex;
  flex-flow: row;
  list-style-type: none;
  padding: 0;
  width: 100%;

  & a {
    color: #fff;
    display: block;
    padding: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  ${media.tablet`
    flex-flow: column;

    & li {
      margin-left: 0;
      line-height: 5;
    }

    & a {
      color: #0057a7;
      padding: 0;
    }
  `};
`

const StyledHamburger = styled(Hamburger)`
  display: none;

  ${media.tablet`
    display: block;
    position: absolute;
    box-sizing: initial;
    right: 0;
    top: 0;
    margin: 3px;
    padding: 18px 15px 12px;
    transition: opacity 250ms ease;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform-origin: center;
      background: rgba(255, 255, 255, 0.2);
      transform: scale(0);
    }

    &.open::after {
      content: 'close';
      position: absolute;
      top: 35%;
      left: -30%;
      color: #0057a7;
    }

    &:active::before {
      animation: pop 200ms forwards cubic-bezier(0.15, 1.05, 0.54, 1.29) 1;
    }

    @keyframes pop {
      to {
        transform: scale(1);
      }
    }

    & .ham,
    & .bur,
    & .ger {
      position: relative;
      width: 20px;
      height: 3px;
      border-width: 1px 0;
      margin: 0 auto 3px;
      padding: 0;
      background: #fff;
      border-radius: 1px;
      font-size: 1px;
      transition: all .2s ease;
      transform-origin: 0 0;
    }

    &[open] {
      .ham,
      .bur,
      .ger {
        background: #0057a7;
      }

      .ham {
        transform: translate(4px, -1px) rotate(45deg);
      }
      .bur {
        opacity: 0;
      }
      .ger {
        transform: translate(2px, 1px) rotate(-45deg);
      }
    }
  `};
`
