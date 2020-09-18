import React from "react"
import { Link } from "gatsby"

/* Import Global Components */
import LiveDot from "~components/liveDot/liveDot"

/* Import Local Styles*/
import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <ul>
      <li>
        <Link to="/">
          <LiveDot ignoreContext={true} /> Live
        </Link>
      </li>
      <li>
        <Link to="/projects">Archive</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </header>
)

export default Header
