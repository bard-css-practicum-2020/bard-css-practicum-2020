import React, { Fragment } from "react"

/* Import Global Components */
import SEO from "~components/seo/seo"

/* Import Global Normalize*/
import "normalize.css"

/* Import Global Reset */
import "./reset.css"

/* Import Global Styles */
import "./index.css"

/* Import Local Styles */
import { layoutClassName } from "./index.module.css"

const Layout = ({ children, location }) => (
  <Fragment>
    <SEO pathname={location.pathname} defer={false} />
    <div className={layoutClassName}>{children}</div>
  </Fragment>
)

export default Layout
