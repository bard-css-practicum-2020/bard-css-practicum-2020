import React, { useState } from "react"

/* Import Global Containers */
import Project from "~containers/project/project"

/* Import Local Components */
import EnglishContent from "./components/englishContent"
import SpanishContent from "./components/spanishContent"

const MariaCamilaMontalvoSeniorProject = () => {
  const [language, setLanguage] = useState("EN")

  const handleClick = () => {
    if (language === "EN") {
      setLanguage("ES")
    } else {
      setLanguage("EN")
    }
  }

  return (
    <Project title="Project Title" author="María Camila Montalvo Senior">
      <button onClick={handleClick}>{language}</button>
      {language === "EN" && <EnglishContent />}
      {language === "ES" && <SpanishContent />}
    </Project>
  )
}

export default MariaCamilaMontalvoSeniorProject
