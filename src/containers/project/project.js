import React from "react"
import classnames from "classnames"

import styles from "./project.module.css"

const Project = ({ title, author, children }) => (
  <div className={styles.project}>
    <h1 className={classnames(styles.title, "p")}>{title}</h1>
    <h1 className={classnames(styles.author, "p")}>by {author}</h1>
    <div className={styles.content}>{children}</div>
  </div>
)

export default Project
