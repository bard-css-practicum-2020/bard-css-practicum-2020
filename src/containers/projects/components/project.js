import React from "react"
import { Link } from "gatsby"
import format from "date-fns/format"

/* Import Global Components */
import LiveDot from "~components/liveDot/liveDot"

/* Import Local Styles */
import styles from "./project.module.css"

const Project = ({ date, link, title, author, live = false }) => (
  <Link to={link} className={styles.project}>
    <div className={styles.time}>
      <p>
        <span>
          <LiveDot ignoreContext={true} initialState={live} />
        </span>{" "}
        {format(date, "MM.dd")}
      </p>
    </div>
    <div className={styles.information}>
      <p className={styles.title}>{title}</p>
      <p className={styles.author}>by {author}</p>
    </div>
  </Link>
)

export default Project
