import styled from 'styled-components'
import { media } from '../../style-utils'

const Contents = styled.div`
  width: 90%;
  max-width: 69em;
  margin: 0 auto;
  padding: 0 1.875em 3.125em 1.875em;

  ${media.tablet`
    width: 100%;
    padding: 0;
  `};
`

export default Contents
