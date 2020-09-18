import React from "react"

/* Import Global Components */
import LiveDot from "~components/liveDot/liveDot"
import UnixTime from "~components/unixTime/unixTime"

/* Import Local Styles */
import styles from "./footer.module.css"

// const pathnameToProjectMap = {
//   "/": {
//     title: "PRES Interview – Magdalena Moskalewicz and Daniel Muzyczuk",
//   },
//   "/projects/julia-gardener/": {
//     title: "PRES Interview – Magdalena Moskalewicz and Daniel Muzyczuk",
//     author: "Julia Gardener",
//   },
// }

const Footer = ({ location }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.isLive}>
        <p>
          <LiveDot /> {location.pathname}
        </p>
      </div>
      <div className={styles.unix}>
        <UnixTime />
      </div>
    </footer>
  )
}

export default Footer
