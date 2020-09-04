import React from "react"

/* Import Global Containers */
import Project from "~containers/project/project"

/* Import Local Providers */
import LanguageProvider from "./providers/language"

/* Import Local Components */
import LanguageToggle from "./components/languageToggle/languageToggle"
import Content from "./components/content/content"

/* Import Local Styles */

const MariaCamilaMontalvoSeniorProject = () => {
  return (
    <Project
      title="Interview with SHE Collective"
      author="María Camila Montalvo Senior"
    >
      <LanguageProvider>
        <LanguageToggle />
        <Content />
      </LanguageProvider>
    </Project>
  )
}

export default MariaCamilaMontalvoSeniorProject
