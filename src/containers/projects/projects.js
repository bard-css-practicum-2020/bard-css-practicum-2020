import React from "react"

/* Import Local Components */
import Project from "./components/project"

/* Import Local Styles */
import styles from "./projects.module.css"

/* note: alphabetical order */

const Projects = () => (
  <div>
    <p>Projects</p>
    <ul className={styles.projects}>
      <li>
        <Project
          link="./muheb-esmat"
          title="Generation Livestream and Virtual Afghan Sphere"
          author="Muheb Esmat"
        />
      </li>
      <li>
        <Project
          link="./julia-gardener"
          title="PRES Interview – Magdalena Moskalewicz and Daniel Muzyczuk"
          author="Julia Gardener"
        />
      </li>
      <li>
        <Project
          link="./brooke-nicholas"
          title="Project Title"
          author="Brooke Nicholas"
        />
      </li>
      <li>
        <Project
          link="./maria-camila-montalvo-senior"
          title="Project Title"
          author="María Camila Montalvo Senior"
        />
      </li>
      <li>
        <Project
          link="./elizaveta-schneyderman"
          title="Tung-Hui Hu Interview"
          author="Elizaveta Schneyderman"
        />
      </li>
      <li>
        <Project
          link="./rachel-steinberg"
          title="Project Title"
          author="Rachel Steinberg"
        />
      </li>
    </ul>
  </div>
)

export default Projects
