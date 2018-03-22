import { h, Component } from 'preact'
import styles from './home'
import Header from '../../components/home/header'
import Profile from '../../components/home/profile'
import Career from '../../components/home/career'
import Skills from '../../components/home/skills'
import Footer from '../../components/home/footer'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // profile: []
      profile: require('../../assets/profile.json')
    }
  }
  // state = {
  //   profile: require('../../assets/profile.json')
  //   // profile: []
  // }

  // componentDidMount() {
  //   fetch('./assets/profile.json')
  //   .then(response => response.json())
  //   .catch(error => console.error(error))
  //   .then(profile => this.setState({ profile }))
  // }

  render({}, { profile }) {
    return (
      <div itemScope itemProp="Person" itemType="https://schema.org/Person" className={styles.wrapper}>
        {profile.header && <Header {...profile.header} />}
        {profile.profile && <Profile {...profile.profile} />}
        {profile.career && <Career {...profile.career} />}
        {profile.skills && <Skills {...profile.skills} />}
        {profile.contact && <Footer {...profile.contact} />}
      </div>
    )
  }
}
