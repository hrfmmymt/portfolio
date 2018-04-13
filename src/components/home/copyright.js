import { h, Component } from 'preact'
import styled from 'styled-components'
import { media } from '../../style-utils'

export default class Copyright extends Component {
  render(props) {
    return (
      <Wrapper>
        © { new Date().getFullYear() }
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://hrfmmymt.github.io"
        >
          {' '}
          Hirofumi Miyamoto
        </a>. All rights reserved.
      </Wrapper>
    )
  }
}

const Wrapper = styled.p`
  text-align: center;

  ${media.phone`
    font-size: 90%;
  `}
`
