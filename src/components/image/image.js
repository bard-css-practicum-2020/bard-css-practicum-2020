import React from "react"

import { image } from "./image.module.css"

const Image = ({ src, alt, style = {} }) => (
  <img className={image} src={src} alt={alt ? alt : ""} style={style} />
)

export default Image
