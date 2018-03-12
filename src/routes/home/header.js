import { h, Component } from 'preact'

export default class Header extends Component {
  constructor(props) {
    super()
  }

  render(props) {
    return (
      <header className="header">
        <h1 className="title" itemProp="name">
          {props.title}
        </h1>
      </header>
    )
  }
}
