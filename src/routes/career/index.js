import { h, Component } from 'preact'
import style from './style.css'
import profile from '../../assets/profile.json'

function imagesLoaded(parentNode) {
  const imgElements = [...parentNode.querySelectorAll('img')]
  for (let i = 0; i < imgElements.length; i += 1) {
    const img = imgElements[i]
    if (!img.complete) {
      return false
    }
  }
  return true
}

class CareerDetailList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      career: profile.career.list,
      loading: true
    }
  }

  handleImageChange = () => {
    this.setState({
      loading: !imagesLoaded(this.galleryElement)
    })
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

    return (
      <main className={style.wrapper}>
        <article className={style.contents}>
          <header className={style.header}>
            <h1 className={style.title} itemProp="name">
              # hello world
            </h1>
          </header>
          <section ref={element => {
            this.galleryElement = element
          }}>
            <h2>{thisJob[0].job_title}</h2>
            <p>{thisJob[0].role}</p>
            <img
              src={`../../assets/careers/${thisJob[0].job_id}.png`}
              onLoad={this.handleImageChange}
              onError={this.handleImageChange}
              className={style.image}
              alt='meaningless image.'
            />
            <small>画像はイメージです。<br />the image is an image. you know what i mean?</small>
            <p>{thisJob[0].description}</p>
            <ul className={style.tagList}>{tagList}</ul>
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
