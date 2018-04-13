import { h, Component } from 'preact'
import Heading2 from './ui-h2'
import Copyright from './copyright'
import styled from 'styled-components'
import { media } from '../../style-utils'

class EtcItem extends Component {
  render({ label, link, className }) {
    return (
      <ListItem>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          <img src={`../../assets/etc/${className}.svg`} alt={label} />
          {label}
        </Link>
      </ListItem>
    )
  }
}

export default class Etc extends Component {
  render(props) {
    return (
      <Wrapper>
        <Heading2>{props.title}</Heading2>
        <Contents>
          <List>
            {props.list &&
              props.list.map((item, i) => <EtcItem key={i} {...item} />)}
          </List>
          <Copyright name={props.name} />
        </Contents>
      </Wrapper>
    )
  }
}

const Wrapper = styled.footer`
  padding: 2rem 2rem 4rem;
  min-height: 100%;
  width: 100%;
  background-color: #b7e1ff;
`

const Contents = styled.div`
  width: 90%;
  max-width: 69rem;
  margin: 4rem auto 0;
  padding: 0 1rem;

  ${media.tablet`
    width: 100%;
    padding: 0;
  `}

  ${media.phone`
    margin-top: 2rem;
  `}

  & a {
    color: #0057a7;

    &:hover {
      text-decoration: underline;
    }
  }
`

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0 2rem;
  margin-bottom: 6rem;

  ${media.phone`
    flex-flow: column;
    margin-bottom: 4rem;
  `};
`

const ListItem = styled.li`
  ${media.phone`
    padding: 1rem 0;
    border-bottom: 1px solid #0057a7;
  `};
`

const Link = styled.a`
  display: block;

  & img {
    width: 1.6rem;
    vertical-align: middle;
    margin-right: 0.5em;
  }
`
