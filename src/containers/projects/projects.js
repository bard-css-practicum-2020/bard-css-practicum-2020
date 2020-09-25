import React from "react"
import { addDays, differenceInCalendarDays } from "date-fns"

/* Import Local Components */
import Project from "./components/project"

/* Import Local Styles */
import styles from "./projects.module.css"

const Projects = () => {
  const projects = [
    {
      link: "/projects/muheb-esmat",
      title: "Generation Livestream and Virtual Afghan Sphere",
      author: "Muheb Esmat",
    },
    {
      link: "/projects/julia-gardener",
      title: "PRES Interview – Magdalena Moskalewicz and Daniel Muzyczuk",
      author: "Julia Gardener",
    },
    {
      link: "/projects/brooke-nicholas",
      title: "Jingling the Night Away",
      author: "Brooke Nicholas",
    },
    {
      link: "/projects/maria-camila-montalvo-senior",
      title: "Interview with SHE Collective",
      author: "María Camila Montalvo Senior",
    },
    {
      link: "/projects/elizaveta-shneyderman",
      title: "On Air: In Conversation with Tung-Hui Hu",
      author: "Elizaveta Shneyderman",
    },
    {
      link: "/projects/rachel-steinberg",
      title: "Victoria Keddie: Unidentified Persons Object",
      author: "Rachel Vera Steinberg",
    },
  ]

  const startDate = new Date(2020, 8, 21)
  const daysSinceStartDate = differenceInCalendarDays(startDate, new Date())
  const dayOffset = Math.abs(daysSinceStartDate % projects.length)
  return (
    <ul className={styles.projects}>
      {projects.map(({ link, title, author }, index) => {
        let offsetIndex = (index - dayOffset) % projects.length
        if (offsetIndex < 0) {
          offsetIndex = projects.length - Math.abs(offsetIndex)
        }
        return (
          <li key={index}>
            <Project
              date={addDays(new Date(), offsetIndex)}
              link={link}
              title={title}
              author={author}
              live={offsetIndex === 0}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Projects
