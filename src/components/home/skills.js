import { h, Component } from 'preact'
import style from './skills.css'
import H2style from './h2.css'

const shuffleArray = array => {
  let i = array.length - 1
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

class SkillMap extends Component {
  render({ label, value }) {
    let classes, labelDesc
    switch (value) {
      case 1:
        classes = '😩'
        labelDesc = 'During study'
        break
      case 2:
        classes = '😀'
        labelDesc = 'OK'
        break
      case 3:
        classes = '😇'
        labelDesc = 'Love'
        break
    }

    return (
      <div
        className={`${style.mapItem} ${style[classes]}`}
        aria-label={labelDesc}
      >
        {label}
      </div>
    )
  }
}

export default class Skills extends Component {
  render(props) {
    const shuffledLists = shuffleArray(props.list)

    return (
      <section name="skills" id="skills" className={style.wrapper}>
        <h2 className={H2style.headingLevel2}>{props.title}</h2>
        <div className={style.mapWrapper}>
          {props.list &&
            shuffledLists.map((data, i) => <SkillMap key={i} {...data} />)}
        </div>
      </section>
    )
  }
}
