import React from "react"
import classnames from "classnames"

import { title } from "./title.module.css"

const Title = ({ children }) => (
  <h1 className={classnames(title, "h2")}>{children}</h1>
)

export default Title
