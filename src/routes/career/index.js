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
    const thisJob = this.state.career.filter(el => {
      return el.job_id === item.path
    })

    const jobId = thisJob[0].job_id

    const timePeriod = formatTime({ ...thisJob[0].time })

    const tagList = thisJob[0].topic_names.map((topicName, i) => (
      <li key={i} className={style.tagItem}>
        {topicName}
      </li>
    ))

    const imgList = thisJob[0].assets
      ? thisJob[0].assets.files.map((item, i) => (
        <figure key={i} className={style.imgItem}>
          <img
            src={`${thisJob[0].assets.path}/${jobId}/${item.name}.png`}
            className={`${jobId}-${item.name}`}
            alt={`'${thisJob[0].role}' - img no.${i + 1}`}
            style={{ width: item.thumbnail_width }}
          />
          <figcaption>{item.caption}</figcaption>
        </figure>
        ))
      : null

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
            <h3>{thisJob[0].role}</h3>
            <time className={style.time}>{timePeriod}</time>
            <div className={style.description}>
              {thisJob[0].description
                .split('\n')
                .map((text, i) => <p key={i}>{text}</p>)}
            </div>
            <ul className={style.tagList}>{tagList}</ul>
            {imgList && (
              <div className={style.imgWrapper}>
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
