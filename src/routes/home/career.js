import { h, Component } from 'preact'
import styles from './career.css'

export const formatTime = ({ from, to }) =>
  [from, to].filter(val => val).join(' - ')

class ResumeItem extends Component {
  render({ job_title, time, role, description }) {
    const timePeriod = formatTime({ ...time })

    return (
      <div>
        <div>
          <strong>{job_title}</strong>
          <p>{timePeriod}</p>
        </div>
        <div>
          <strong>{role}</strong>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

class CareerItem extends Component {
  render({ list }) {
    return <div>{list && list.map(item => <ResumeItem {...item} />)}</div>
  }
}

export default class Career extends Component {
  render(props) {
    return (
      <main className={styles.wrapper}>
        <div>
          <div>
            <h2>{props.title}</h2>
          </div>
          {props.list &&
            props.list.map(item => (
              <div>
                <CareerItem {...item} />
              </div>
            ))}
        </div>
      </main>
    )
  }
}
