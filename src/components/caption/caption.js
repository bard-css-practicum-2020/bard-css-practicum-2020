import React from "react"

import { caption } from "./caption.module.css"

const Caption = ({ children }) => (
  <figcaption className={caption}>{children}</figcaption>
)

export default Caption
