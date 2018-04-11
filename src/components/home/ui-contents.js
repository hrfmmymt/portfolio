import styled from 'styled-components'
import { media } from '../../style-utils'

const Contents = styled.div`
  width: 90%;
  max-width: 69rem;
  margin: 5rem auto;
  padding: 0 1rem 3rem 1rem;

  ${media.tablet`
    width: 100%;
    padding: 0;
  `};
`

export default Contents
