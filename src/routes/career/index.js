import { h, Component } from 'preact'
import style from './style.css'
import profile from '../../assets/profile.json'
import { formatTime } from '../../utils'

class CareerDetailList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      career: profile.career.list
    }
  }

  goBack = e => {
    e.preventDefault()
    history.back()
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(item) {
    const thisJob = this.state.career[0].list.filter(el => {
      return el.job_id === item.path
    })

    const tagList = thisJob[0].topic_names.map((topicName, i) => (
      <li key={i} className={style.tagItem}>
        {topicName}
      </li>
    ))

    let imgList
    if (thisJob[0].asset_names) {
      imgList = thisJob[0].asset_names.map((name, i) => (
        <img
          key={i}
          src={`../../assets/careers/${thisJob[0].job_id}/${name}.png`}
          className={`${style.image} ${thisJob[0].job_id}-${name}`}
          alt="meaningless image."
        />
      ))
    }

    const timePeriod = formatTime({ ...thisJob[0].time })

    return (
      <main className={style.wrapper}>
        <article className={style.contents}>
          <header className={style.header}>
            <h1 className={style.title} itemProp="name">
              # hello world
            </h1>
          </header>
          <section
            ref={element => {
              this.galleryElement = element
            }}
          >
            <h2>{thisJob[0].job_title}</h2>
            <p>{thisJob[0].role}</p>
            <time className={style.time}>{timePeriod}</time>
            <p>{thisJob[0].description}</p>
            <ul className={style.tagList}>{tagList}</ul>
            {thisJob[0].asset_names && (
              <div>
                {imgList}
                <small>
                  画像はイメージです。<br />the image is an image. you know what
                  i mean?
                </small>
              </div>
            )}
          </section>
          <a className={style.backButton} onClick={this.goBack} href="">
            go back
          </a>
        </article>
      </main>
    )
  }
}

export default class CareerDetail extends Component {
  render(props) {
    const path = props.job_id

    return <CareerDetailList path={path} />
  }
}
