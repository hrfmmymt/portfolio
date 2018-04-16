import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import Contents from './ui-contents'
import Heading2 from './ui-h2'
import styled from 'styled-components'
import { media } from '../../style-utils'

// util funx
export const formatTime = ({ from, to }) =>
  [from, to].filter(val => val).join(' - ')

class ResumeItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      career: props
    }
  }

  render() {
    const { job_title, time, device, path, role } = this.state.career

    const timePeriod = formatTime({ ...time })

    let devices
    if (device.isPC) devices = 'isPC'
    if (device.isSP) devices = 'isSP'
    if (device.isPC && device.isSP) devices = 'isPCSP'

    return (
      <TimelineItem>
        <Link path="/career/" href={`/career/${path}`}>
          <Time>{timePeriod}</Time>
          <Circle className={devices} />
          <Description className="description">
            <h3>{job_title}</h3>
            <p>{role}</p>
          </Description>
        </Link>
      </TimelineItem>
    )
  }
}

class CareerItem extends Component {
  render({ list }) {
    return (
      <TimelineList>
        {list && list.map((item, i) => <ResumeItem key={i} {...item} />)}
      </TimelineList>
    )
  }
}

export default class Career extends Component {
  render(props) {
    return (
      <Wrapper name="career" id="career">
        <Heading2>{props.title}</Heading2>
        <Contents>
          {props.list &&
            props.list.map((item, i) => <CareerItem key={i} {...item} />)}
        </Contents>
      </Wrapper>
    )
  }
}

const Wrapper = styled.main`
  padding: 4rem 2rem;
  min-height: 100%;
  width: 100%;
  border-bottom: 1px solid #aaa;
  background: #f2f2f2;

  ${media.tablet`
    padding: 2rem 2rem;
  `};
`

const TimelineList = styled.ul`
  margin: 30px 0 0 0;
  padding: 0;
  list-style: none;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    content: '';
    width: 4px;
    background: #1ba1ff;
    left: 20%;
    margin-left: -6px;
  }

  ${media.tablet`
    &::before {
      display: none;
    }
  `};
`

const TimelineItem = styled.li`
  position: relative;

  & a {
    color: #000;
    transition: 0.2s all;

    &:hover > .description {
      filter: drop-shadow(0 0 3px #1ba1ff);
    }
  }
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 20%;
  width: 48px;
  height: 48px;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  background: #1ba1ff;
  border-radius: 50%;
  text-align: center;
  margin: 0 0 0 -28px;

  &.isPC::after {
    content: 'PC';
  }

  &.isSP::after {
    content: 'SP';
  }

  &.isPCSP::after {
    content: 'PC\\ASP';
    white-space: pre;
    line-height: 1;
  }

  ${media.tablet`
    position: relative;
    float: right;
    left: auto;
    margin: -55px 5px 0 0;
  `};
`

const Time = styled.time`
  display: block;
  width: 25%;
  padding-right: 100px;
  position: absolute;

  ${media.tablet`
    width: 100%;
    position: relative;
    padding: 0 0 20px 0;
  `};
`

const Description = styled.div`
  position: relative;
  margin: 0 0 15px 25%;
  border: 1px solid #888;
  background: #fff;
  padding: 2em;
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.4;
  border-radius: 5px;
  transition: 0.2s all;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    right: 100%;
    content: ' ';
    height: 0;
    width: 0;
    border: solid transparent;
    pointer-events: none;
  }

  &::after {
    top: 10px;
    border-color: rgba(255, 255, 255, 0);
    border-right-color: #fff;
    border-width: 10px;
  }

  &::before {
    top: 9px;
    border-color: rgba(136, 136, 136, 0);
    border-right-color: #888;
    border-width: 11px;
  }

  ${media.tablet`
    margin: 0 0 30px 0;
    padding: 1em;

    &::before,
    &::after {
      position: absolute;
      top: inherit;
      right: auto;
      bottom: 100%;
      left: 10%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      pointer-events: none;
    }

    &::before {
      border-color: rgba(136, 136, 136, 0);
      border-bottom-color: #888;
      border-width: 11px;
      margin-left: -11px;
    }

    &::after {
      border-color: rgba(255, 255, 255, 0);
      border-bottom-color: #fff;
      border-width: 10px;
      margin-left: -10px;
    }
  `} & h3 {
    margin-top: 0;
    padding: 0 0 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`
