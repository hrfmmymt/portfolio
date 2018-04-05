import { h, Component } from 'preact'
import styles from './profile.css'

export default class Profile extends Component {
  render(props) {
    let bioList = []

    if (props.bio && props.bio.list) {
      const bioLabels = props.bio.list.map(item => (
          <dt key={item.label}>
            <strong>{item.label}</strong>
          </dt>
        )),
        bioValues = props.bio.list.map(item => (
          <dd key={item.value}>{item.value}</dd>
        ))

      bioList = bioLabels.reduce((list, item, i) => {
        list.push(item, bioValues[i])
        return list
      }, [])
    }

    return (
      <section className={styles.wrapper}>
        <div>
          <h2>{props.title}</h2>
        </div>
        <picture>
          <source
            srcSet="https://placeimg.com/1280/480/any"
            media="(min-width: 997px)"
            sizes="100vw"
          />
          <source
            srcSet="https://placeimg.com/800/480/any"
            media="(min-width: 672px)"
            sizes="100vw"
          />
          <source
            srcSet="https://placeimg.com/640/480/any"
            media="(min-width: 0px)"
            sizes="100vw"
          />
          <img src="https://placeimg.com/1280/480/any" alt="my pic" />
        </picture>
        <div>
          {props.about && <h3>{props.about.title}</h3>}
          {props.about && <p>{props.about.description}</p>}
        </div>
        {bioList.length && (
          <div>
            <h3>{props.bio.title}</h3>
            <dl>{bioList}</dl>
          </div>
        )}
      </section>
    )
  }
}