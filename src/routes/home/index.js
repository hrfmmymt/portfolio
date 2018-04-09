import { h, Component } from 'preact'
import styled from 'styled-components'

import Header from '../../components/home/header'
import Profile from '../../components/home/profile'
import Career from '../../components/home/career'
// import Skills from '../../components/home/skills'
import Etc from '../../components/home/etc'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: require('../../assets/profile.json')
    }
  }

  render({}, { profile }) {
    return (
      <Wrapper
        itemScope
        itemProp="Person"
        itemType="https://schema.org/Person"
      >
        {profile.header && <Header {...profile.header} />}
        {profile.profile && <Profile {...profile.profile} />}
        {profile.career && <Career {...profile.career} />}
        {profile.etc && <Etc {...profile.etc} />}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
`
