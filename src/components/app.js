import { h, Component } from 'preact'
import { Router, Route } from 'preact-router'

import Home from '../routes/home'
import CareerDetail from '../routes/career'
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event   "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <CareerDetail path="/career/:job_title" />
        </Router>
      </div>
    )
  }
}
