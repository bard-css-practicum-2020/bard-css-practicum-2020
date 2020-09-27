import React, { useState, useEffect, useContext } from "react"
import classnames from "classnames"
import random from "lodash.random"
import shortid from "shortid"

import VideoPlayingContext from "~context/videoPlaying"
import IsLiveContext from "~context/isLive"

import styles from "./screensaver.module.css"

const Screensaver = () => {
  const [circles, setCircles] = useState([])
  const [videoPlaying] = useContext(VideoPlayingContext)
  const [isLive] = useContext(IsLiveContext)
  const [showScreensaver, setShowScreensaver] = useState(false)
  const [timeInactive, setTimeInactive] = useState(0)

  // increase timer every second
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setTimeInactive(timeInactive => timeInactive + 1)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [timeInactive])

  // set screensaver visibility
  useEffect(() => {
    if (timeInactive >= 9 && !isLive && !videoPlaying) {
      setShowScreensaver(true)
    } else {
      setShowScreensaver(false)
    }
  }, [timeInactive, isLive])

  // add circles
  useEffect(() => {
    if (showScreensaver) {
      const generateCircle = () => {
        const randomX = random(-50, window.innerWidth - 25)
        const randomY = random(-50, window.innerHeight - 25)
        return (
          <div
            className={styles.circle}
            style={{ top: randomY, left: randomX }}
            key={shortid.generate()}
          />
        )
      }
      setCircles(circles => circles.concat(generateCircle()))
    } else {
      window.setTimeout(() => {
        setCircles([])
      }, 1000)
    }
  }, [showScreensaver, timeInactive, setCircles])

  // set up event listeners
  useEffect(() => {
    const handleEvent = () => {
      setTimeInactive(0)
      if (showScreensaver) {
        setShowScreensaver(false)
      }
    }
    // set up mouse and trackpad listeners
    window.addEventListener("click", handleEvent)
    window.addEventListener("mousemove", handleEvent)
    window.addEventListener("mousewheel", handleEvent)
    window.addEventListener("scroll", handleEvent)
    window.addEventListener("DOMMouseScroll", handleEvent)
    // Clear timeout if the component is unmounted
    return () => {
      window.addEventListener("click", handleEvent)
      window.addEventListener("mousemove", handleEvent)
      window.removeEventListener("mousewheel", handleEvent)
      window.addEventListener("scroll", handleEvent)
      window.removeEventListener("DOMMouseScroll", handleEvent)
    }
  }, [showScreensaver, setTimeInactive])

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
        {circles}
      </div>
    </div>
  )
}
export default Screensaver
