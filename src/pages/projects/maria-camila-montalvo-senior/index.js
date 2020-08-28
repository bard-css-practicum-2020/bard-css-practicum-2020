import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from "query-string"

/* Import Global Containers */
import Project from "~containers/project/project"

/* Import Local Components */
import EnglishContent from "./components/englishContent"
import SpanishContent from "./components/spanishContent"

const MariaCamilaMontalvoSeniorProject = () => {
  const location = useLocation()
  // get language from query string
  const languageFromQueryString = queryString.parse(location.search).language
  // if language is not `en` or `es`, default to english
  const initialLanguage =
    languageFromQueryString === "en" || languageFromQueryString === "es"
      ? languageFromQueryString
      : "en"
  const [language, setLanguage] = useState(initialLanguage)

  useEffect(() => {
    if (language) {
      // update url params
      navigate(`?language=${language}`)
    }
  }, [language])

  return (
    <Project title="Project Title" author="María Camila Montalvo Senior">
      <button
        onClick={() => {
          setLanguage("en")
        }}
      >
        EN
      </button>
      <span>/</span>
      <button
        onClick={() => {
          setLanguage("es")
        }}
      >
        ES
      </button>
      {language === "en" && <EnglishContent />}
      {language === "es" && <SpanishContent />}
    </Project>
  )
}

export default MariaCamilaMontalvoSeniorProject
