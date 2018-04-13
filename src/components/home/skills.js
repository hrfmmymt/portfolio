import { h, Component } from 'preact'
import Heading2 from './ui-h2'
import styled from 'styled-components'
import { media } from '../../style-utils'

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
    switch(value) {
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
      <MapItem
        className={classes}
        aria-label={labelDesc}>
        {label}
      </MapItem>
    )
  }
}

export default class Skills extends Component {
  render(props) {
    const shuffledLists = shuffleArray(props.list)

    return (
      <Wrapper>
        <Heading2>{props.title}</Heading2>
        <MapWrapper>
          {props.list &&
            shuffledLists.map((data, i) => <SkillMap key={i} {...data} />)}
        </MapWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  padding: 4rem 2rem;
  min-height: 100%;
  width: 100%;

  ${media.tablet`
    padding: 2rem 2rem;
  `};
`

const MapWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  width: 90%;
  max-width: 39rem;
  margin: 5rem auto 0;
  padding: 0 1rem 3rem 1rem;

  ${media.tablet`
    width: 100%;
    padding: 0;
    margin-top: 2rem;
  `};
`

const MapItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e4e4e4;
  margin: .5rem;
  padding: 1rem;
  cursor: default;

  &.😩 {
    font-size: 10px;
    height: 3vh;
  }

  &.😀 {
    font-size: 100%;
    height: 5vh;
  }

  &.😇 {
    font-size: 140%;
    height: 10vh;
  }
`
