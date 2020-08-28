import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from "query-string"
import classnames from "classnames"

/* Import Global Containers */
import Project from "~containers/project/project"

/* Import Local Components */
import EnglishContent from "./components/englishContent"
import SpanishContent from "./components/spanishContent"

/* Import Local Styles */
import styles from "./maria-camila-montalvo-senior.module.css"

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
      navigate(`?language=${language}`)
    }
  }, [language])

  return (
    <Project
      title="Interview with SHE Collective"
      author="María Camila Montalvo Senior"
    >
      <br />
      <div>
        <button
          className={classnames(styles.languageSelector, {
            [styles.active]: language === "en",
          })}
          onClick={() => {
            setLanguage("en")
          }}
        >
          EN
        </button>
        <span>/</span>
        <button
          className={classnames(styles.languageSelector, {
            [styles.active]: language === "es",
          })}
          onClick={() => {
            setLanguage("es")
          }}
        >
          ES
        </button>
      </div>
      <br />
      {language === "en" && <EnglishContent />}
      {language === "es" && <SpanishContent />}
    </Project>
  )
}

export default MariaCamilaMontalvoSeniorProject
