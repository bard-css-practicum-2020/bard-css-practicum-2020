/* how to save html5 canvas as local image from canvas /*
/* https://weworkweplay.com/play/saving-html5-canvas-as-image/ */

/* css masking tutorial /*
/* https://web.dev/css-masking/ */

import React, { useState, useEffect, useRef } from "react"
import random from "lodash.random"

/* Import Local Styles */
import styles from "./image-swap.module.css"

const ImageSwap = ({ image, swap }) => {
  const imageRef = useRef()
  const canvasRef = useRef()
  const canvasContext = useRef()
  // const [isDrawing, setIsDrawing] = useState([])
  const [circles, setCircles] = useState([])
  const [imageUrl, setImageUrl] = useState()

  const generateCircle = () => {
    const xPosition = Math.random()
    const yPosition = Math.random()
    return { xPosition, yPosition }
  }

  // useEffect(() => {
  //   console.log("circles", circles)
  //   const timer = window.setTimeout(() => {
  //     setCircles(circles => {
  //       return circles.concat([generateCircle()])
  //     })
  //   }, 1000)
  //   return () => {
  //     window.clearTimeout(timer)
  //   }
  // }, [circles])

  useEffect(() => {
    const numberOfCirclesToGenerate = random(6, 12)
    const initialCircles = []
    for (let i = 0; i < numberOfCirclesToGenerate; i++) {
      initialCircles.push(generateCircle())
    }
    setCircles(initialCircles)
  }, [setCircles])

  useEffect(() => {
    if (imageRef && imageRef.current && canvasRef && canvasRef.current) {
      // size canvas
      canvasRef.current.height = imageRef.current.offsetHeight
      canvasRef.current.width = imageRef.current.offsetWidth
    }
  }, [imageRef, canvasRef])

  useEffect(() => {
    // initialize canvas
    if (canvasRef && canvasRef.current) {
      canvasContext.current = canvasRef.current.getContext("2d")
    }
  }, [canvasRef])

  useEffect(() => {
    if (
      canvasRef &&
      canvasRef.current &&
      canvasContext &&
      canvasContext.current
    ) {
      // calculate 10vw to match background circles
      const circleWidth = window.innerWidth / 10 / 2
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
  }, [circles, imageRef, canvasRef, canvasContext])

  useEffect(() => {
    if (imageRef && imageRef.current && imageUrl) {
      imageRef.current.style.maskImage = `url(${imageUrl})`
    }
  }, [imageRef, imageUrl])

  return (
    <div className={styles.imageSwap}>
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
