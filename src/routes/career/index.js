import { h, Component } from 'preact'
import style from './style.css'
import profile from '../../assets/profile.json'
import { formatDate } from '../../utils'
import reactStringReplace from 'react-string-replace'

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
    const time = thisJob[0].time

    const employmentPeriod = formatDate({ ...thisJob[0].time })
    console.log(employmentPeriod)

    const tagList = thisJob[0].topic_names.map((topicName, i) => (
      <li key={i} className={style.tagItem}>
        {topicName}
      </li>
    ))

    const imgList = thisJob[0].assets
      ? thisJob[0].assets.files.map((item, i) => (
          <figure key={i} className={style.figureItem}>
            {item}
            <img
              src={`${thisJob[0].assets.path}/${jobId}/${item.name}`}
              className={`${jobId}-${item.name}`}
              alt={item.alt}
              width={
                item.thumbnail_width !== '' ? item.thumbnail_width : '100%'
              }
              height={item.thumbnail_height}
            />
            <figcaption>
              <p>
                {item.caption &&
                  reactStringReplace(
                    item.caption,
                    /(https?:\/\/\S+)/g,
                    (match, i) => (
                      <a key={match + i} href={match}>
                        {match}
                      </a>
                    )
                  )}
              </p>
            </figcaption>
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
            <div className={style.time}>
              <time dateTime={employmentPeriod.from}>{time.from}</time>
              <span className={style.timeHyphen}>-</span>
              <time dateTime={employmentPeriod.to}>{time.to}</time>
            </div>
            <div className={style.description}>
              {thisJob[0].description.split('\n').map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
            <ul className={style.tagList}>{tagList}</ul>
            {imgList && (
              <div className={style.imgSection}>
                {imgList}
                <small>
                  画像はイメージです。
                  <br />
                  the image is an image. you know what i mean?
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
