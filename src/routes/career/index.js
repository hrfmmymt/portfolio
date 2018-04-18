import { h, Component } from 'preact'
import style from './style.css'
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
      return el.path === item.path
    })

    return (
      <main className={style.wrapper}>
        <article className={style.contents}>
          <header className={style.header}>
            <h1 className={style.title} itemProp="name"># hello world</h1>
          </header>
          <section>
            <h2>{thisJob[0].job_title}</h2>
            <p>{thisJob[0].description}</p>
            <p>{thisJob[0].role}</p>
          </section>
          <button type="button" onClick={() => history.back()}>go back</button>
        </article>
      </main>
    )
  }
}

export default class CareerDetail extends Component {
  render(props) {
    const path = props.path

    return <CareerDetailList path={path} />
  }
}
