import { h, Component } from 'preact'
import style from './style.css'
import profile from '../../assets/profile.json'
import { formatTime, nl2p } from '../../utils'

class CareerDetailList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      career: profile.career
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
    const thisJob = this.state.career.list.filter(el => {
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
          <figure key={i} className={style.figureItem}>
            <img
              src={`${thisJob[0].assets.path}/${jobId}/${item.name}`}
              className={`${jobId}-${item.name}`}
              alt={item.alt}
              style={{ width: item.thumbnail_width }}
            />
            <figcaption>{item.caption && nl2p(item.caption)}</figcaption>
          </figure>
        ))
      : null

    return (
      <main className={style.wrapper}>
        <header className={style.header}>
          <a className={style.backButton} onClick={this.goBack} href="">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M20 11H7.414l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a.996.996 0 0 0 1.414 0 1 1 0 0 0 0-1.414L7.414 13H20a1 1 0 1 0 0-2z" />
              </g>
            </svg>
          </a>
          <h1 className={style.title} itemProp="name">
            career
          </h1>
        </header>
        <article className={style.contents}>
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
              <div className={style.imgSection}>
                {imgList}
                <small>
                  画像はイメージです。<br />the image is an image. you know what
                  i mean?
                </small>
              </div>
            )}
          </section>
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
