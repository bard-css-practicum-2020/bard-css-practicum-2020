import React, { useState, useEffect } from "react"

import styles from "./progress-bar.module.css"

const ProgressBar = ({ seconds }) => {
  const [secondsPassed, setSecondsPassed] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (secondsPassed < seconds) {
        setSecondsPassed(secondsPassed => secondsPassed + 1)
      }
    }, 1000)
    return () => {
      window.clearTimeout(timeout)
    }
  }, [seconds, secondsPassed])

  useEffect(() => {
    setProgress((secondsPassed / seconds) * 100)
  }, [seconds, secondsPassed])

  return (
    <div className={styles.outerProgressBar}>
      <div
        className={styles.innerProgressBar}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ProgressBar
