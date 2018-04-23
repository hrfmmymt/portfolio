import { h, Component } from 'preact'
import style from './profile.css'
import H2style from './h2.css'

export default class Profile extends Component {
  render(props) {
    let bioList = []

    if (props.bio && props.bio.list) {
      const bioLabels = props.bio.list.map(item => (
          <dt key={item.label}>
            <h4>#### {item.label}</h4>
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
      <section name="profile" id="profile" className={style.wrapper}>
        <h2 className={H2style.headingLevel2}>{props.title}</h2>
        <picture>
          <source
            srcSet="//placeimg.com/1280/480/any"
            media="(min-width: 997px)"
            sizes="100vw"
          />
          <source
            srcSet="//placeimg.com/800/480/any"
            media="(min-width: 672px)"
            sizes="100vw"
          />
          <source
            srcSet="//placeimg.com/640/480/any"
            media="(min-width: 0px)"
            sizes="100vw"
          />
          <img src="//placeimg.com/1280/480/any" alt="my pic" />
        </picture>
        <div className={style.contents}>
          <div className={style.content}>
            {props.about && <h3>{props.about.title}</h3>}
            {props.about && <p>{props.about.description}</p>}
          </div>
          {bioList.length && (
            <div className={style.content}>
              <h3>{props.bio.title}</h3>
              <dl>{bioList}</dl>
            </div>
          )}
        </div>
      </section>
    )
  }
}
