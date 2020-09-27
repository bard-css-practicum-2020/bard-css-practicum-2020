import React from "react"

/* Import Global Providers */
import IsLiveProvider from "~providers/isLive"
import VideoPlayingProvider from "~providers/videoPlaying"

/* Import Global Components */
import SEO from "~components/seo/seo"
import Background from "~components/background/background"
import Screensaver from "~components/screensaver/screensaver"
import LoadingOverlay from "~components/loadingOverlay/loadingOverlay"
import Header from "~components/header/header"
import Footer from "~components/footer/footer"
import Timeline from "~components/timeline/timeline"

/* Import Global Normalize*/
import "normalize.css"

/* Import Global Reset */
import "./reset.css"

/* Import Fonts */
import "~assets/fonts/authentic-sans/authentic-sans.css"

/* Import https://www.gridlover.net settings */
import "./gridlover.css"

/* Import Global Styles */
import "./index.css"

/* Import Local Styles */
import styles from "./index.module.css"

const Layout = ({ children, location }) => (
  <IsLiveProvider location={location}>
    <VideoPlayingProvider>
      <SEO pathname={location.pathname} defer={false} />
      <LoadingOverlay />
      <Background />
      <Screensaver />
      <Timeline />
      <div className={styles.layoutWrapper}>
        <Header />
        <main className={styles.layout}>{children}</main>
        <Footer location={location} />
      </div>
    </VideoPlayingProvider>
  </IsLiveProvider>
)

export default Layout
