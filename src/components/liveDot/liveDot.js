import React, { useContext } from "react"

/* Import Global Context */
import IsLiveContext from "~context/isLive"

/* Import Local Styles */
import styles from "./live-dot.module.css"

const LiveDot = ({
  ignoreContext = false,
  initialState = true,
  blink = true,
}) => {
  const [isLive] = useContext(IsLiveContext)

  return ignoreContext ? (
    <span
      className={`live-dot ${styles.liveDot} ${
        initialState ? styles.isLive : null
      } ${blink ? null : styles.noBlink}`}
    >
      ●
    </span>
  ) : (
    <span
      className={`live-dot ${styles.liveDot} ${
        isLive ? styles.isLive : initialState
      }`}
    >
      ●
    </span>
  )
}

export default LiveDot
