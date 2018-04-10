import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import Contents from './ui-contents'
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
    const { job_title, time, device, role } = this.state.career

    const timePeriod = formatTime({ ...time })

    let devices
    if (device.isPC) devices = 'isPC'
    if (device.isSP) devices = 'isSP'
    if (device.isPC && device.isSP) devices = 'isPCSP'

    return (
      <TimelineItem>
        <Link path="/career/" href={`/career/${job_title}`}>
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
      <Wrapper>
        <h2>{props.title}</h2>
        <Contents>
          {props.list &&
            props.list.map((item, i) => <CareerItem key={i} {...item} />)}
        </Contents>
      </Wrapper>
    )
  }
}

const Wrapper = styled.main`
  padding: 0 2rem;
  min-height: 100%;
  width: 100%;
  margin-bottom: 4rem;
`

const TimelineList = styled.ul`
  margin: 30px 0 0 0;
  padding: 0;
  list-style: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10px;
    background: #000;
    left: 20%;
    margin-left: -10px;
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
    text-decoration: none;
    color: #000;
    transition: 0.2s all;

    &:hover > .description {
      filter: drop-shadow(0 0 3px #222);
    }
  }

  &:nth-child(odd) .description {
    background-color: #d0d0d0;
  }

  &:nth-child(odd) .description::after {
    border-right-color: #d0d0d0;
  }

  ${media.tablet`
    &:nth-child(odd) .description::after {
      border-right-color: transparent;
      border-bottom-color: #d0d0d0;
    }
  `};
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  color: #fff;
  background: #000;
  border-radius: 50%;
  box-shadow: 0 0 0 8px #666;
  text-align: center;
  left: 20%;
  top: 0;
  margin: 0 0 0 -25px;

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
  margin: 0 0 15px 25%;
  background: #eaeaea;
  padding: 2em;
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.4;
  position: relative;
  border-radius: 5px;
  transition: 0.2s all;

  &::after {
    right: 100%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-right-color: #eaeaea;
    border-width: 10px;
    top: 10px;
  }

  ${media.tablet`
    margin: 0 0 30px 0;
    padding: 1em;

    &::after {
      right: auto;
      left: 20px;
      border-right-color: transparent;
      border-bottom-color: #efefef;
      top: -20px;
    }
  `} & h3 {
    margin-top: 0;
    padding: 0 0 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`
