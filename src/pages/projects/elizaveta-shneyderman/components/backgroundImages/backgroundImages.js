import React, { useState, useEffect, useRef } from "react"
import classnames from "classnames"

import SatelliteImageSrc from "../../assets/CC0-img-50.jpg"
import CoralImageSrc from "../../assets/CC0-img-89.jpg"

import styles from "./background-images.module.css"

const BackgroundImages = () => {
  const backgroundImageRef = useRef()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (backgroundImageRef && backgroundImageRef.current) {
      setIsLoaded(true)
    }
  }, [backgroundImageRef])

  return (
    <div
      className={classnames(styles.backgroundImages, {
        [styles.loaded]: isLoaded,
      })}
    >
      <img
        src={SatelliteImageSrc}
        alt={"Satellite Network"}
        ref={backgroundImageRef}
      />
      <img src={CoralImageSrc} alt={"Coral Network"} />
    </div>
  )
}

export default BackgroundImages
