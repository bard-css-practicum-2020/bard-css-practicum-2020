import React from "react"

import Paragraph from "~components/paragraph/paragraph"

import { bibliography } from "./bibliography.module.css"

const Bibliography = ({ children }) => (
  <div className={`bibliography ${bibliography}`}>
    <Paragraph>Bibliography</Paragraph>
    <ul>{children}</ul>
  </div>
)

export default Bibliography
