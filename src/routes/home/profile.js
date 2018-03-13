import { h, Component } from 'preact'
import styles from './profile.css'

export default class Profile extends Component {
  render(props) {
    let bioList = []

    if (props.bio && props.bio.list) {
      const bioLabels = props.bio.list.map(item => (
          <li key={item.label}>
            <strong>{item.label}</strong>
          </li>
        )),
        bioValues = props.bio.list.map(item => (
          <li key={item.value}>{item.value}</li>
        ))

      bioList = bioLabels.reduce((list, item, i) => {
        list.push(item, bioValues[i])
        return list
      }, [])
    }

    return (
      <section className={styles.wrapper}>
        <div>
          <div>
            <h2>{props.title}</h2>
          </div>
          <div>
            {props.about && <h5>{props.about.title}</h5>}
            {props.about && <p>{props.about.description}</p>}
          </div>
          {bioList.length && (
            <div>
              <h5>{props.bio.title}</h5>
              <ul>{bioList}</ul>
            </div>
          )}
        </div>
      </section>
    )
  }
}
