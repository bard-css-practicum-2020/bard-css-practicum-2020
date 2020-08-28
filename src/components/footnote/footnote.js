import React from "react"

import { footnote } from "./footnote.module.css"

const Footnote = ({ number, href }) => (
  <sup className={footnote}>
    <a href={href} id={`footnote-${number}`}>
      {number}
    </a>
  </sup>
)

export default Footnote
