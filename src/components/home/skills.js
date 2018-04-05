import { h, Component } from 'preact'
import styled from 'styled-components'
import styles from './skills.css'

const MapWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 3fr;
  grid-template-rows: 180px 100px 80px 120px auto;
  max-width: 100%;
  width: 100%;
`

const MapItem = styled.div`
  display: block;
`

class SkillMap extends Component {
  render({ label, value }) {
    const classes = 'value-' + value
    return (
      <MapItem className={classes}>
        {label} - {value}
      </MapItem>
    )
  }
}

export default class Skills extends Component {
  render(props) {
    return (
      <section className={styles.wrapper}>
        <h2>{props.title}</h2>
        <MapWrapper>
          {props.list &&
            props.list.map((data, i) => <SkillMap key={i} {...data} />)}
        </MapWrapper>
      </section>
    )
  }
}
