import React from "react"

/* Import Global Containers */
import Project from "~containers/project/project"

/* Import Local Components */
import LanguageToggle from "./components/languageToggle/_languageToggle"
import Content from "./components/content/_content"

/* Import Local Styles */

const MariaCamilaMontalvoSeniorProject = () => {
  return (
    <Project
      title="Interview with SHE Collective"
      author="María Camila Montalvo Senior"
    >
      <LanguageToggle />
      <Content />
    </Project>
  )
}

export default MariaCamilaMontalvoSeniorProject
