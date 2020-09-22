import React, { useState, useContext } from "react"
import classnames from "classnames"
import random from "lodash.random"
import shortid from "shortid"

import IsLiveContext from "~context/isLive"

import styles from "./background.module.css"

const generateCircle = () => {
  if (typeof window !== `undefined`) {
    const randomX = random(-50, window.innerWidth - 50)
    const randomY = random(-50, window.innerHeight - 50)
    return (
      <div
        className={styles.circle}
        style={{ top: randomY, left: randomX }}
        key={shortid.generate()}
      />
    )
  }
}

const generateCircles = () => {
  const circles = []
  for (let i = 0; i < 5; i++) {
    circles.push(generateCircle())
  }
  return circles
}

const Background = () => {
  const [circles] = useState(generateCircles())
  const [isLive] = useContext(IsLiveContext)

  return (
    <div className={styles.background}>
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
export default Background
