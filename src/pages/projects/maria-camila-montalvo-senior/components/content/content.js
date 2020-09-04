import React, { useContext } from "react"

/* Import Local Contexts */
import LanguageContext from "../../context/language"

/* Import Local Components */
import EnglishContent from "./englishContent"
import SpanishContent from "./spanishContent"

const Content = () => {
  const [language] = useContext(LanguageContext)

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
      <EnglishContent active={language === "en"} />
      <SpanishContent active={language === "es"} />
    </div>
  )
}

export default Content
