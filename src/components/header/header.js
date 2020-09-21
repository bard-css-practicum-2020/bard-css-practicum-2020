import React from "react"
import { Link } from "gatsby"

/* Import Global Components */
import LiveDot from "~components/liveDot/liveDot"

/* Import Local Styles*/
import styles from "./header.module.css"

/* Import Local Assets */
import MinusFourFlagSrc from "./resources/minus-four-flag.png"

const Header = () => {
  return (
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
      <div className={styles.flags}>
        {/* <img src={MinusFourFlagSrc} alt="Minus Four" /> */}
        {/* <p>-</p> */}
        <Link to="/about">
          <img src={MinusFourFlagSrc} alt="Minus Four" />
        </Link>
      </div>
    </header>
  )
}

export default Header
