import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import styles from './style'
import profile from '../../assets/profile.json'

class CareerDetailList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      career: profile.career.list
    }
  }

  render(item) {
    const thisJob = this.state.career[0].list.filter(el => {
      return el.job_title === item.job_title
    })

    return (
      <main className={styles.overlay}>
        <section className={styles.contents}>
          <h2>{thisJob[0].job_title}</h2>
          <p>{thisJob[0].description}</p>
          <p>{thisJob[0].role}</p>
          <Link href="/">閉じる</Link>
        </section>
      </main>
    )
  }
}

export default class CareerDetail extends Component {
  render(props) {
    const job_title = props.job_title

    return (
      <CareerDetailList job_title={ job_title } />
    )
  }
}
