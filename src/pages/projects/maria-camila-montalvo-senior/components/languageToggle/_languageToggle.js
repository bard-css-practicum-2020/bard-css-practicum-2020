import React, { useContext } from "react"
import classnames from "classnames"

/* Import Local Context */
import LanguageContext from "~context/language"

/* Import Local Styles */
import styles from "./language-toggle.module.css"

const LanguageToggle = () => {
  const [language, setLanguage] = useContext(LanguageContext)
  return (
    <div className={styles.languageToggles}>
      <button
        className={classnames(styles.languageToggle, {
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
        className={classnames(styles.languageToggle, {
          [styles.active]: language === "es",
        })}
        onClick={() => {
          setLanguage("es")
        }}
      >
        ES
      </button>
    </div>
  )
}

export default LanguageToggle
