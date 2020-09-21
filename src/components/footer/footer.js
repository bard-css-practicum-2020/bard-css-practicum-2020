import React from "react"
import { differenceInCalendarDays } from "date-fns"

/* Import Global Components */
import LiveDot from "~components/liveDot/liveDot"
import UnixTime from "~components/unixTime/unixTime"

/* Import Local Styles */
import styles from "./footer.module.css"

const Footer = ({ location }) => {
  const projects = [
    {
      link: "/projects/muheb-esmat",
    },
    {
      link: "/projects/julia-gardener",
    },
    {
      link: "/projects/brooke-nicholas",
    },
    {
      link: "/projects/maria-camila-montalvo-senior",
    },
    {
      link: "/projects/elizaveta-shneyderman",
    },
    {
      link: "/projects/rachel-steinberg",
    },
  ]

  const startDate = new Date(2020, 8, 21)
  const daysSinceStartDate = differenceInCalendarDays(startDate, new Date())
  const offsetIndex = Math.abs(daysSinceStartDate % projects.length)

  return (
    <footer className={styles.footer}>
      <div className={styles.isLive}>
        <p>
          <LiveDot />{" "}
          {location.pathname === "/" ? (
            <a href={projects[offsetIndex].link}>
              {projects[offsetIndex].link}
            </a>
          ) : (
            location.pathname
          )}
        </p>
      </div>
      <div className={styles.unix}>
        <UnixTime />
      </div>
    </footer>
  )
}

export default Footer
