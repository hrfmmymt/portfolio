import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import styled from 'styled-components'
import profile from '../../assets/profile.json'

class CareerDetailList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      career: profile.career.list
    }
  }

  render(item) {
    const thisJob = this.state.career[0].list.filter(el => {
      return el.path === item.path
    })

    return (
      <Overlay>
        <Contents>
          <h2>{thisJob[0].job_title}</h2>
          <p>{thisJob[0].description}</p>
          <p>{thisJob[0].role}</p>
          <Link href="/">閉じる</Link>
        </Contents>
      </Overlay>
    )
  }
}

export default class CareerDetail extends Component {
  render(props) {
    const path = props.path

    return <CareerDetailList path={path} />
  }
}

const Overlay = styled.main`
  position: relative;
  widows: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`

const Contents = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 3%;
  width: 100vw;
  height: 100vh;
  animation-name: animateRight;
  animation-duration: 0.4s;

  @keyframes animateRight {
    from {
      right: -300px;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }
`
