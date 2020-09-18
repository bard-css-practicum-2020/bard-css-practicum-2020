import React from "react"
import { graphql } from "gatsby"

const About = ({ data }) => (
  <div>
    <p>About the Project</p>
    <p>Commit: {data.gitCommit.hash}</p>
  </div>
)

export default About

export const query = graphql`
  query AboutPageQuery {
    gitCommit(latest: { eq: true }) {
      hash
    }
  }
`
