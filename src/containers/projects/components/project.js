import React from "react"
import { Link } from "gatsby"

/* Import Local Styles */
import styles from "./project.module.css"

const Project = ({ link, title, author }) => (
  <Link to={link} className={styles.project}>
    <div className={styles.time}>
      <p>09.18</p>
    </div>
    <div className={styles.information}>
      <p className={styles.title}>{title}</p>
      <p className={styles.author}>by {author}</p>
    </div>
  </Link>
)

export default Project
