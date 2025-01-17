"use client";

import { Events, Link } from "react-scroll";
import styles from "../styles/Index.module.css";

const focusTargetElement = () => {
  Events.scrollEvent.register("end", (_, element) => {
    element.setAttribute("tabindex", "-1");
    element.focus();
  });
};

export function ScrollArrow() {
  return (
    <Link
      aria-label="Scroll to profile"
      className={styles.arrowScroll}
      duration={200}
      href="#profile"
      smooth={true}
      to="profile"
      onClick={() => focusTargetElement()}
    >
      <div aria-label="down arrow" className={styles.arrowCircle} role="img">
        <div className={styles.arrow} />
      </div>
    </Link>
  );
}
