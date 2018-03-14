import { h, Component } from 'preact'
import style from './style'

class Wei extends Component {
  render({ list }) {

    // console.log(list)

    return (
      <main>
      </main>
    )
  }
}

export default class CareerDetail extends Component {
  // Note: `user` comes from the URL, courtesy of our router
  render({ job_title, data }, { time, role, description }) {
    // console.log(data.list)
    return <div>{data.list && data.list.map(item => <Wei {...item} />)}</div>
  }
}
