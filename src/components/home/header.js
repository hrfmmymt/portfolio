import { h, Component } from 'preact'
import styled from 'styled-components'

export default class Header extends Component {
  constructor() {
    super()
  }

  render(props) {
    return (
      <Wrapper>
        <Heading className="title" itemProp="name">
          {props.title}
        </Heading>
        <p className="subtitle" itemProp="jobTitle">
          {props.subtitle}
        </p>
      </Wrapper>
    )
  }
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
  height: 100vh;
  background-color: #1ba1ff;
  color: #fff;
  width: 100%;
  margin-bottom: 4rem;
  padding: 2rem;
`

const Heading = styled.h1`
  font-family: 'Give You Glory', cursive;
`
