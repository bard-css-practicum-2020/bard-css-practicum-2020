import React, { useState } from "react"
import { useLocation } from "@reach/router"
import queryString from "query-string"

/* Import Local Contexts */
import LanguageContext from "../context/_language"

const setInitialLanguage = location => {
  // get language from query string
  const languageFromQueryString = queryString.parse(location.search).language
  // if language is not `en` or `es`, default to english
  const initialLanguage =
    languageFromQueryString === "en" || languageFromQueryString === "es"
      ? languageFromQueryString
      : "en"
  return initialLanguage
}

const LanguageProvider = ({ children }) => {
  const location = useLocation()
  const [language, setLanguage] = useState(setInitialLanguage(location))

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
