import React from "react"

import { bibliographyItem } from "./bibliography-item.module.css"

const BibliographyItem = ({ children, id, href }) =>
  href ? (
    <li className={bibliographyItem} id={id ? id : null}>
      <a href={href}>{children}</a>
    </li>
  ) : (
    <li className={bibliographyItem} id={id ? id : null}>
      {children}
    </li>
  )

export default BibliographyItem
