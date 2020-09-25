import React, { useState, useEffect } from "react"

/* Import Global Hooks */
import useScroll from "~hooks/useScroll"

/* Import Local Styles */
import styles from "./image-swap.module.css"

const ImageSwap = ({ image, swap }) => {
  const scrollInfo = useScroll()
  const [percentageSwapped, setPercentageSwapped] = useState(50)

  useEffect(() => {
    console.log(scrollInfo)
  }, [scrollInfo])

  console.log(scrollInfo)

  return (
    <div className={styles.imageSwap}>
      <div>
        <img src={image} alt={"Planet"} />
      </div>
      <div
        style={{
          bottom: `${100 - percentageSwapped}%`,
          backgroundImage: `url(${swap})`,
        }}
      ></div>
    </div>
  )
}

export default ImageSwap
