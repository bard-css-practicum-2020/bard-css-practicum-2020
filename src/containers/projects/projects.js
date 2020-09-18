import React from "react"

/* Import Local Components */
import Project from "./components/project"

/* Import Local Styles */
import styles from "./projects.module.css"

/* note: alphabetical order */

const Projects = () => (
  <ul className={styles.projects}>
    <li>
      <Project
        link="/projects/muheb-esmat"
        title="Generation Livestream and Virtual Afghan Sphere"
        author="Muheb Esmat"
      />
    </li>
    <li>
      <Project
        link="/projects/julia-gardener"
        title="PRES Interview – Magdalena Moskalewicz and Daniel Muzyczuk"
        author="Julia Gardener"
      />
    </li>
    <li>
      <Project
        link="/projects/brooke-nicholas"
        title="Jingling the Night Away"
        author="Brooke Nicholas"
      />
    </li>
    <li>
      <Project
        link="/projects/maria-camila-montalvo-senior"
        title="Interview with SHE Collective"
        author="María Camila Montalvo Senior"
      />
    </li>
    <li>
      <Project
        link="/projects/elizaveta-shneyderman"
        title="Tung-Hui Hu Interview"
        author="Elizaveta Shneyderman"
      />
    </li>
    <li>
      <Project
        link="/projects/rachel-steinberg"
        title="Project Title"
        author="Rachel Steinberg"
      />
    </li>
  </ul>
)

export default Projects
