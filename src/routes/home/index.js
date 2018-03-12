import { h, Component } from 'preact'
import style from './style'
import Header from './header'

export default class Home extends Component {
  state = {
    profile: require('../../profile.json')
  }

  componentDidMount() {
    fetch('/profile.json')
      .then(response => response.json())
      .then(profile => this.setState({ profile }))
  }

  render({}, { profile }) {
    return (
      <div itemScope itemProp="Person" itemType="https://schema.org/Person">
        {profile.header && <Header {...profile.header} />}
      </div>
    )
  }
}
