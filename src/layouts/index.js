import React, { Fragment } from "react"

/* Import Global Components */
import SEO from "~components/seo/seo"

/* Import Local Styles */
import { layoutClassName } from "./index.module.css"

const Layout = ({ children, location }) => (
  <Fragment>
    <SEO pathname={location.pathname} defer={false} />
    <div className={layoutClassName}>{children}</div>
  </Fragment>
)

export default Layout
