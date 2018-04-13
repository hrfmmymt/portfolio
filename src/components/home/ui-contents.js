import styled from 'styled-components'
import { media } from '../../style-utils'

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

export default Contents
