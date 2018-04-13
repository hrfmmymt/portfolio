import styled from 'styled-components'
import { media } from '../../style-utils'

const Heading2 = styled.h2`
  margin: 0 0 5rem;
  padding: 0;

  ${media.tablet`
    margin-bottom: 2rem;
  `};
`

export default Heading2
