import { h, Component } from "preact";
import PropTypes from "prop-types";

import style from "./header.css";

import Nav from "./nav";
import Scroll from "react-scroll";
const Link = Scroll.Link;

import { focusTargetElement, nl2p } from "../../utils";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.header
    };
  }

  render(props) {
    return (
      <header className={style.header} title={this.state.header.image_title}>
        <div className={style.videoWrapper}>
          <div className={style.videoOverlay} />
          <video poster="../../assets/header/header_bg.jpg" muted autoplay loop>
            <source src="../../assets/header/header_bg.mp4" type="video/mp4" />
            <source
              src="../../assets/header/header_bg.webm"
              type="video/webm"
            />
            <p>video要素がサポートされていないブラウザでご覧になっています。</p>
          </video>
        </div>
        <Nav props={props} />
        <h1>{this.state.header.title}</h1>
        <div itemProp="jobTitle" className={style.subTitle}>
          {this.state.header.subtitle && nl2p(this.state.header.subtitle)}
        </div>
        <Link
          to="profile"
          smooth={true}
          duration={300}
          href="#profile"
          className={style.arrowScroll}
          aria-label="Scroll to profile"
          onClick={focusTargetElement()}
        >
          <div className={style.arrowCircle} role="img" aria-label="down arrow">
            <div className={style.arrow} />
          </div>
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  header: PropTypes.object.isRequired
};
