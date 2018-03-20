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
    const {
      job_title,
      time,
      role,
      description
    } = this.state.career

    const timePeriod = formatTime({ ...time })

    return (
      <li>
        <Link
          path='/career/'
          href={`/career/${job_title}`}>
          <strong>{job_title}</strong>
          <p>{timePeriod}</p>
        </Link>
        <p>{role}</p>
      </li>
    )
  }
}

class CareerItem extends Component {
  render({ list }) {
    return (
      <ul>
        { list && 
          list.map(item => (
            <ResumeItem { ...item } />
          ))
        }
      </ul>
    )
  }
}

export default class Career extends Component {
  render(props) {
    return (
      <main className={styles.wrapper}>
        <div>
          <div>
            <h2>{ props.title }</h2>
          </div>
          { props.list &&
            props.list.map(item => (
              <CareerItem {...item} />
            ))
          }
        </div>
      </main>
    )
  }
}
