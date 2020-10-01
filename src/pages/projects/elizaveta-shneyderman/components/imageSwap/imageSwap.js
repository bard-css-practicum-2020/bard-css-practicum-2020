/* how to save html5 canvas as local image from canvas /*
/* https://weworkweplay.com/play/saving-html5-canvas-as-image/ */

/* css masking tutorial /*
/* https://web.dev/css-masking/ */

import React, { useState, useEffect, useRef } from "react"
import random from "lodash.random"
import classnames from "classnames"

/* Import Local Styles */
import styles from "./image-swap.module.css"

const generateCircle = () => {
  const xPosition = Math.random()
  const yPosition = Math.random()
  return { xPosition, yPosition }
}

const generateCircles = () => {
  console.log("generating circles")
  const numberOfCirclesToGenerate = random(9, 12)
  const circles = []
  for (let i = 0; i < numberOfCirclesToGenerate; i++) {
    circles.push(generateCircle())
  }
  return circles
}

const ImageSwap = ({ image, swap, style = {} }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef()
  const canvasRef = useRef()
  const canvasContext = useRef()
  const [circles] = useState(generateCircles())
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    // initialize canvas
    if (canvasRef && canvasRef.current) {
      canvasContext.current = canvasRef.current.getContext("2d")
    }
  }, [canvasRef])

  useEffect(() => {
    if (
      imageRef &&
      imageRef.current &&
      imageRef.current.offsetWidth > 0 &&
      imageRef.current.offsetHeight > 0 &&
      canvasRef &&
      canvasRef.current
    ) {
      // size canvas based on image size
      canvasRef.current.height = imageRef.current.offsetHeight
      canvasRef.current.width = imageRef.current.offsetWidth
    }
  }, [imageRef, canvasRef])

  useEffect(() => {
    if (
      canvasRef &&
      canvasRef.current &&
      canvasContext &&
      canvasContext.current &&
      imageRef &&
      imageRef.current &&
      circles.length > 0
    ) {
      const circleWidth =
        window.innerWidth < 768
          ? window.innerWidth * 0.15
          : window.innerWidth / 10 / 2
      const canvasWidth = canvasRef.current.width
      const canvasHeight = canvasRef.current.height

      // draw circles
      if (circles) {
        canvasContext.current.clearRect(0, 0, canvasWidth, canvasHeight)
        circles.forEach(circle => {
          canvasContext.current.fillStyle = "white"
          canvasContext.current.beginPath()
          canvasContext.current.arc(
            circle.xPosition * canvasWidth,
            circle.yPosition * canvasHeight,
            circleWidth,
            0,
            2 * Math.PI,
            false
          )
          canvasContext.current.fill()
        })
      }

      const dataURL = canvasRef.current.toDataURL("image/png")
      console.log(dataURL)
      setImageUrl(dataURL)
    }
  }, [canvasRef, canvasContext, imageRef, circles])

  useEffect(() => {
    if (imageRef && imageRef.current && imageUrl) {
      imageRef.current.style.maskImage = `url(${imageUrl})`
      setIsLoaded(true)
    }
  }, [imageRef, imageUrl, setIsLoaded])

  return (
    <div
      className={classnames(styles.imageSwap, { [styles.loaded]: isLoaded })}
      style={style}
    >
      <div>
        <img src={image} alt={"Planet"} />
      </div>
      <div
        style={{
          backgroundImage: `url(${swap})`,
        }}
        ref={imageRef}
      ></div>
      <canvas style={{ width: "100%", height: "100%" }} ref={canvasRef} />
    </div>
  )
}

export default ImageSwap
