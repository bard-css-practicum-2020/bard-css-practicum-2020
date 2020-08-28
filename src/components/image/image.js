import React from "react"

import { image } from "./image.module.css"

const Image = ({ src, alt }) => (
  <img className={image} src={src} alt={alt ? alt : ""} />
)

export default Image
