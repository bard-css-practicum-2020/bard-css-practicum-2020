import React, { useContext } from "react"

import IsLiveContext from "~context/isLive"

import styles from "./timeline.module.css"

const Timeline = () => {
  const [isLive] = useContext(IsLiveContext)
  return <div className={`${styles.timeline} ${isLive ? styles.isLive : ""}`} />
}

export default Timeline
