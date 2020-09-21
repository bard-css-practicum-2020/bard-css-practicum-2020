import React from "react"
import { graphql } from "gatsby"

import Paragraph from "~components/paragraph/paragraph"

import PlanetSrc from "./assets/planet.png"

import styles from "./about.module.css"

const About = ({ data }) => {
  return (
    <div className={styles.about}>
      <img src={PlanetSrc} alt="planet" style={{ maxWidth: "300px" }} />
      <br />
      <Paragraph>
        <a href="https://ccs.bard.edu/" target="_blank" rel="noreferrer">
          Center for Curatorial Studies and Hessel Museum
        </a>
        <br />
        42.0202897°, -73.9143773°
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
      <Paragraph>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </Paragraph>
      <Paragraph>
        Last Updated {data.gitCommit.date}
        <br />
        Commit *{data.gitCommit.hash.slice(-7)}
      </Paragraph>
    </div>
  )
}

export default About

export const query = graphql`
  query AboutPageQuery {
    gitCommit(latest: { eq: true }) {
      hash
      date
    }
  }
`
