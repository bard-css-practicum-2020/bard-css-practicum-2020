import React, { useState, useEffect } from "react"
import classnames from "classnames"

import styles from "./loading-overlay.module.css"

const LoadingOverlay = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoadingoverlay, setShowLoadingOverlay] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true)
    }, 1)
    return () => {
      window.clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoadingOverlay(false)
    }, 2500)
    return () => {
      window.clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      className={classnames(styles.loadingOverlay, {
        [styles.loaded]: !showLoadingoverlay,
      })}
    >
      <div
        className={classnames(styles.circle, {
          [styles.loaded]: isLoaded,
        })}
      ></div>
      <div
        className={classnames(styles.blurCircle, {
          [styles.loaded]: isLoaded,
        })}
      ></div>
    </div>
  )
}
export default LoadingOverlay
