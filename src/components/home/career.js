import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './career.css'
import H2style from './h2.css'
import { formatDate } from '../../utils'

class CareerItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      career: props
    }
  }

  render() {
    const {
      job_title,
      time,
      device,
      job_id,
      role,
      topic_names
    } = this.state.career

    const employmentPeriod = formatDate({ ...time })

    let devices
    if (device.isPC) devices = 'isPC'
    if (device.isSP) devices = 'isSP'
    if (device.isPC && device.isSP) devices = 'isPCSP'

    const tagList = topic_names.map((topicName, i) => (
      <li key={i} className={style.tagItem}>
        {topicName}
      </li>
    ))

    return (
      <li className={style.timelineItem}>
        <Link path="/career/" href={`/career/${job_id}`}>
          <div className={style.time}>
            <time dateTime={employmentPeriod.from}>{time.from}</time>
            <span className={style.timeHyphen}>-</span>
            <time dateTime={employmentPeriod.to}>{time.to}</time>
          </div>
          <div className={`${style.circle} ${style[devices]}`} />
          <div className={style.description}>
            <h3 className={style.jobTitle}>{job_title}</h3>
            <small className={style.role}>{role}</small>
            <ul className={style.tagList}>{tagList}</ul>
          </div>
        </Link>
      </li>
    )
  }
}

export default class Career extends Component {
  render(props) {
    return (
      <main name="career" id="career" className={style.wrapper}>
        <h2 className={H2style.headingLevel2}>{props.title}</h2>
        <div className={style.contents}>
          <ul className={style.timelineList}>
            {props.list &&
              props.list.map((item, i) => <CareerItem key={i} {...item} />)}
          </ul>
        </div>
      </main>
    )
  }
}
