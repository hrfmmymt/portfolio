import { h, Component } from 'preact'
import style from './profile.css'
import H2style from './h2.css'

export default class Profile extends Component {
  render(props) {
    let bioList = []

    if (props.bio && props.bio.list) {
      const bioLabels = props.bio.list.map(item => (
          <h4 key={item.label}>#### {item.label}</h4>
        )),
        bioValues = props.bio.list.map(item => (
          <p key={item.value}>{item.value}</p>
        ))

      bioList = bioLabels.reduce((list, item, i) => {
        list.push(item, bioValues[i])
        return list
      }, [])
    }

    const imgDir = '../../assets/profile'

    return (
      <section name="profile" id="profile" className={style.wrapper}>
        <h2 className={H2style.headingLevel2}>{props.title}</h2>
        <picture>
          <source
            type="image/webp"
            srcSet={`${imgDir}/profile_m_.webp 672w,
                     ${imgDir}/profile_l_.webp 997w`}
            sizes="100vw"
          />
          <source
            srcSet={`${imgDir}/profile_m_.jpg 672w,
                     ${imgDir}/profile_l_.jpg 997w`}
            sizes="100vw"
          />
          <img src={`${imgDir}/profile_m_.jpg`} alt="my pic" />
        </picture>
        <div className={style.contents}>
          <div className={style.content}>
            {props.about && <h3>{props.about.title}</h3>}
            {props.about && <p>{props.about.description}</p>}
          </div>
          {bioList.length && (
            <div className={style.content}>
              <h3>{props.bio.title}</h3>
              <div className={style.list}>{bioList}</div>
            </div>
          )}
        </div>
      </section>
    )
  }
}
