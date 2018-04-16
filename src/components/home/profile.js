import { h, Component } from 'preact'
import Heading2 from './ui-h2'
import styled from 'styled-components'
import { media } from '../../style-utils'

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
      <Wrapper name="profile" id="profile">
        <Heading2>{props.title}</Heading2>
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
        <Contents>
          <Content>
            {props.about && <h3>{props.about.title}</h3>}
            {props.about && <p>{props.about.description}</p>}
          </Content>
          {bioList.length && (
            <Content>
              <h3>{props.bio.title}</h3>
              <dl>{bioList}</dl>
            </Content>
          )}
        </Contents>
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  padding: 4rem 2rem;
  min-height: 100%;
  width: 100%;
  border-bottom: 1px solid #aaa;

  & img {
    width: 100%;
  }

  ${media.tablet`
    padding: 2rem 2rem;
  `};
`

const Contents = styled.div`
  width: 90%;
  max-width: 69rem;
  margin: 5rem auto 0;
  padding: 0 1rem 3rem 1rem;

  ${media.tablet`
    width: 100%;
    padding: 0;
    margin-top: 2rem;
  `};
`

const Content = styled.div`
  margin-bottom: 4rem;
`
