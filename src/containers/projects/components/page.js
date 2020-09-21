import React from "react"
import { Link } from "gatsby"

/* Import Local Styles */
import styles from "./project.module.css"

const Project = ({ link, title }) => {
  return (
    <Link to={link} className={styles.project}>
      <div className={styles.time}>
        <p>_</p>
      </div>
      <div className={styles.information}>
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  )
}

export default Project
