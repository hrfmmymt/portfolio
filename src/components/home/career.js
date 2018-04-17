import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './career.css'
import H2style from './h2.css'

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
      <li className={style.timelineItem}>
        <Link path="/career/" href={`/career/${path}`}>
          <time className={style.time}>{timePeriod}</time>
          <div className={`${style.circle} ${style[devices]}`} />
          <div className={style.description}>
            <h3>{job_title}</h3>
            <p>{role}</p>
          </div>
        </Link>
      </li>
    )
  }
}

class CareerItem extends Component {
  render({ list }) {
    return (
      <ul className={style.timelineList}>
        {list && list.map((item, i) => <ResumeItem key={i} {...item} />)}
      </ul>
    )
  }
}

export default class Career extends Component {
  render(props) {
    return (
      <main name="career" id="career" className={style.wrapper}>
        <h2 className={H2style.headingLevel2}>{props.title}</h2>
        <div className={style.contents}>
          {props.list &&
            props.list.map((item, i) => <CareerItem key={i} {...item} />)}
        </div>
      </main>
    )
  }
}
