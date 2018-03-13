import { h, Component } from 'preact'
import styles from './skills.css'

class SkillItem extends Component {
  render({ label, value }) {
    const starsFull = Array(value).fill(),
      starsEmpty = Array(5 - value).fill()

    return (
      <div>
        <div>
          <div>
            <p>{label}</p>
          </div>
          <div>
            {starsFull}
            {starsEmpty}
          </div>
        </div>
      </div>
    )
  }
}

export default class Skills extends Component {
  render(props) {
    return (
      <section className={styles.wrapper}>
        <div>
          <div>
            <h3>{props.title}</h3>
          </div>
          {props.list && props.list.map(item => <SkillItem {...item} />)}
        </div>
      </section>
    )
  }
}
