import React, { useState, useEffect } from "react"
import classnames from "classnames"

import styles from "./loading-overlay.module.css"

const LoadingOverlay = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true)
    }, 3000)
    return () => {
      window.clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      className={classnames(styles.loadingOverlay, {
        [styles.loaded]: isLoaded,
      })}
    >
      <p>•</p>
      <p>•</p>
      <p>•</p>
      <p>•</p>
      <p>•</p>
      <p>•</p>
      <p>•</p>
      <p>•</p>
      <p>•</p>
    </div>
  )
}
export default LoadingOverlay
