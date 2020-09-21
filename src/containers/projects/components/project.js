import React from "react"
import { Link } from "gatsby"
import format from "date-fns/format"

/* Import Local Styles */
import styles from "./project.module.css"

const Project = ({ date, link, title, author }) => (
  <Link to={link} className={styles.project}>
    <div className={styles.time}>
      <p>{format(date, "MM.dd")}</p>
    </div>
    <div className={styles.information}>
      <p className={styles.title}>{title}</p>
      <p className={styles.author}>by {author}</p>
    </div>
  </Link>
)

export default Project
