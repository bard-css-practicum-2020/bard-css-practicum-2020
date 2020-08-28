import React from "react"
import classnames from "classnames"

import { subTitle } from "./sub-title.module.css"

const SubTitle = ({ children }) => (
  <h2 className={classnames(subTitle, "h3")}>{children}</h2>
)

export default SubTitle
