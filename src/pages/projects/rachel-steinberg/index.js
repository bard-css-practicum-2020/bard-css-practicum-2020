import React from "react"

/* Import Global Containers */
import Project from "~containers/project/project"

/* Import Local Styles */
import styles from "./rachel-steinberg.module.css"

const RachelSteinbergProject = () => (
  <Project
    title="Project Title"
    author="Rachel Steinberg"
    className={styles.project}
  >
    <p>Rachel Steinberg Project</p>
  </Project>
)

export default RachelSteinbergProject
