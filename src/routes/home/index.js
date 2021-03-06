import { h, Component } from 'preact'

import Header from '../../components/home/header'
import Profile from '../../components/home/profile'
import Career from '../../components/home/career'
import Skills from '../../components/home/skills'
import Etc from '../../components/home/etc'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: require('../../assets/profile.json')
    }
  }

  componentDidMount() {
    document.body.className = ''
  }

  render({}, { profile }) {
    return (
      <div itemScope itemProp="Person" itemType="https://schema.org/Person">
        {profile.header && <Header {...profile} />}
        {profile.profile && <Profile {...profile.profile} />}
        {profile.career && <Career {...profile.career} />}
        {profile.skills && <Skills {...profile.skills} />}
        {profile.etc && <Etc {...profile.etc} />}
      </div>
    )
  }
}
