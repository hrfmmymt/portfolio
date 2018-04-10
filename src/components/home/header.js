import { h, Component } from 'preact'
import styled from 'styled-components'

export default class Header extends Component {
  constructor() {
    super()
  }

  render(props) {
    return (
      <Wrapper>
        <h1 className="title" itemProp="name">
          {props.title}
        </h1>
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
  background: #1ba1ff;
  color: #fff;
  width: 100%;
  margin-bottom: 4rem;
  padding: 2rem;
`
