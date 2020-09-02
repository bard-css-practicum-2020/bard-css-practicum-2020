import React from "react"
import { Link } from "gatsby"

/* Import Local Styles */
import styles from "./project.module.css"

const Project = ({ link, title }) => (
  <Link to={link} className={styles.project}>
    <div className={styles.time}>
      <p>7:23 AM</p>
    </div>
    <div className={styles.information}>
      <p className={styles.title}>{title}</p>
    </div>
  </Link>
)

export default Project
