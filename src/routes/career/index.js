import { h, Component } from 'preact'
import style from './style'


class CareerDetailList extends Component {
  render({ list }) {
    // console.log(list)
    return (
      <ul>
        <li>
        { list && 
          list.map(item => (
            { ...item }
          ))
        }
        </li>
      </ul>
    )
  }
}

export default class CareerDetail extends Component {
  render(props) {
    const arr = []
    arr.push(this.props.location)
    console.log(arr)
    return (
      <main>
      { arr && 
        arr.map(item => (
          <CareerDetailList { ...item } />
        ))
      }
      </main>
    )
  }
}
