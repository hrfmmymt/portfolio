import { h, Component } from 'preact'
import Contents from './ui-contents'
import styled from 'styled-components'

class EtcItem extends Component {
  render({ label, link, className }) {
    return (
      <li>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {label}
        </Link>
      </li>
    )
  }
}

export default class Etc extends Component {
  render(props) {
    return (
      <Wrapper>
        <h2>{props.title}</h2>
        <Contents>
          <ul>
            {props.list &&
              props.list.map((item, i) => <EtcItem key={i} {...item} />)}
          </ul>
        </Contents>
      </Wrapper>
    )
  }
}

const Wrapper = styled.footer`
  padding: 0 2rem;
  min-height: 100%;
  width: 100%;
  margin-bottom: 4rem;
`

const Link = styled.a``
