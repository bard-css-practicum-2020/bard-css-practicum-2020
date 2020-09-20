import React, { useState, useEffect } from "react"
import classnames from "classnames"

import styles from "./screensaver.module.css"

const Screensaver = ({ location }) => {
  const [showScreensaver, setShowScreensaver] = useState(false)
  let [timeInactive, setTimeInactive] = useState(0)

  useEffect(() => {
    console.log(timeInactive)
    if (timeInactive > 10) {
      setShowScreensaver(true)
    }

    const handleEvent = () => {
      setTimeInactive(0)
      if (showScreensaver) {
        setShowScreensaver(false)
      }
    }
    const timer = window.setTimeout(() => {
      setTimeInactive(timeInactive => timeInactive + 1)
    }, 1000)
    // set up mouse and trackpad listeners
    window.addEventListener("mousemove", handleEvent)
    window.addEventListener("mousewheel", handleEvent)
    window.addEventListener("DOMMouseScroll", handleEvent)
    // Clear timeout if the component is unmounted
    return () => {
      clearTimeout(timer)
      window.addEventListener("mousemove", handleEvent)
      window.removeEventListener("mousewheel", handleEvent)
      window.removeEventListener("DOMMouseScroll", handleEvent)
    }
  }, [timeInactive, setTimeInactive])

  return (
    <div
      className={classnames(styles.screensaver, {
        [styles.showScreensaver]: showScreensaver,
      })}
    >
      <div className={styles.circle}></div>
      <div className={styles.blurCircle}></div>
    </div>
  )
}
export default Screensaver
