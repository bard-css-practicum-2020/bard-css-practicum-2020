/* how to save html5 canvas as local image from canvas /*
/* https://weworkweplay.com/play/saving-html5-canvas-as-image/ */

/* css masking tutorial /*
/* https://web.dev/css-masking/ */

import React from "react"
import sample from "lodash.sample"
import classnames from "classnames"

/* Import Local Styles */
import styles from "./image-swap.module.css"

const ImageSwap = ({ images, style }) => {
  return (
    <div className={styles.imageSwap} style={style}>
      <div>
        <img src={sample(images)} alt={"Radio"} />
      </div>
    </div>
  )
}

export default ImageSwap
