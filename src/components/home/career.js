import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import styles from './career.css'

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

  render(items) {
    const { job_title, time, role, description } = this.state.career

    const timePeriod = formatTime({ ...time })

    return (
      <li className={styles.timelineItem}>
        <Link path="/career/" href={`/career/${job_title}`}>
          <time className={styles.time}>{timePeriod}</time>
          <div className={styles.circle} />
          <div className={styles.description}>
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
      <ul className={styles.timelineList}>
        {list && list.map(item => <ResumeItem {...item} />)}
      </ul>
    )
  }
}

export default class Career extends Component {
  render(props) {
    return (
      <main className={styles.wrapper}>
        <h2>{props.title}</h2>
        <div className={styles.contents}>
          {props.list && props.list.map(item => <CareerItem {...item} />)}
        </div>
      </main>
    )
  }
}
