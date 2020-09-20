import React, { useState, useEffect, useContext } from "react"
import classnames from "classnames"

import IsLiveContext from "~context/isLive"

import styles from "./screensaver.module.css"

const Screensaver = () => {
  const [isLive] = useContext(IsLiveContext)
  const [showScreensaver, setShowScreensaver] = useState(false)
  const [timeInactive, setTimeInactive] = useState(0)

  useEffect(() => {
    if (timeInactive > 10 && !isLive) {
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
    window.addEventListener("click", handleEvent)
    window.addEventListener("mousemove", handleEvent)
    window.addEventListener("mousewheel", handleEvent)
    window.addEventListener("DOMMouseScroll", handleEvent)
    // Clear timeout if the component is unmounted
    return () => {
      clearTimeout(timer)
      window.addEventListener("click", handleEvent)
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
      <div
        className={classnames(styles.circlesContainer, {
          [styles.isLive]: isLive,
        })}
      >
        <div className={styles.circle} style={{ top: 140, left: 192 }} />
        <div className={styles.circle} style={{ top: -50, left: 700 }} />
        <div className={styles.circle} style={{ top: 370, left: 300 }} />
        <div className={styles.circle} style={{ top: 950, left: 15 }} />
        <div className={styles.circle} style={{ top: 1240, left: 768 }} />
      </div>
    </div>
  )
}
export default Screensaver
