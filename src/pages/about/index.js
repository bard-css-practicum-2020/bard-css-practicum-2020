import React from "react"
import { graphql } from "gatsby"
import format from "date-fns/format"

import UnixTime from "~components/unixTime/unixTime"
import LiveDot from "~components/liveDot/liveDot"
import Paragraph from "~components/paragraph/paragraph"

import TimezoneSrc from "../../components/header/resources/minus-four-flag.png"

import styles from "./about.module.css"

const About = ({ data }) => {
  return (
    <div className={styles.about}>
      <Paragraph>
        <a href="https://ccs.bard.edu/" target="_blank" rel="noreferrer">
          Center for Curatorial Studies and Hessel Museum
        </a>
        <br />
        42.0202897°, -73.9143773°
      </Paragraph>
      <Paragraph>
        <img
          src={TimezoneSrc}
          alt="Timezone UTC-4 Flag"
          style={{ height: "1.4rem" }}
        />
        UTC-4
      </Paragraph>
      <Paragraph>
        Streaming since 09.21.2020 00:00:00
        <br />
        Live for <UnixTime /> Seconds
      </Paragraph>
      <Paragraph>
        <LiveDot ignoreContext={true} initialState={true} /> Itlaunches.today is
        an online project developed by the second year students at the Center
        for Curatorial Studies at Bard College. This web-based platform hosts a
        series of essays, interviews, and commissioned works that grew out of
        discussions around technologies of remote transmission such as radio and
        other forms of broadcast. Essays and interviews explore experimental
        sound production, relationships between cable networks and streaming
        technologies, collaborative solidarity practices, and decentralized
        mobile networks. The commissioned works include a sound work and
        accompanying essay on the history of the jingle as well as a recorded
        live-broadcast performance reframing the five senses into experiences
        suited to remote communication.{" "}
        <LiveDot ignoreContext={true} initialState={true} /> Itlaunches.today is
        an online project developed by the second year students at the Center
        for Curatorial Studies at Bard College. This web-based platform hosts a
        series of essays, interviews, and commissioned works that grew out of
        discussions around technologies of remote transmission such as radio and
        other forms of broadcast. Essays and interviews explore experimental
        sound production, relationships between cable networks and streaming
        technologies, collaborative solidarity practices, and decentralized
        mobile networks. The commissioned works include a sound work and
        accompanying essay on the history of the jingle as well as a recorded
        live-broadcast performance reframing the five senses into experiences
        suited to remote communication.
      </Paragraph>
      <Paragraph>
        The design of <LiveDot ignoreContext={true} initialState={true} />{" "}
        Itlaunches.today was developed around the idea of “liveness” as it
        translates between different technological mediums, borrowing visual
        codes from common live-stream platforms. Simulating a broadcast in real
        time, the site presents one project “live” each day. The site rotates
        through the entire roster of projects over the course of a week, and
        each one can be accessed at any point through the archive. The passage
        of time in each live stream is measured in Unix time <UnixTime />,
        typically used in operating systems to show the temporal distance from a
        single point—which in this case is the launch of the site. Accruing in
        units of single seconds, it is designed to be read by another operating
        system, and is difficult to compute from the human perspective of
        relational time. In addition to the ticking timecode, the site also
        emphasizes paused moments through the appearance of dots that accrue
        over the course of elongated inaction.
      </Paragraph>
      <Paragraph>
        Last Updated{" "}
        <a
          href="https://github.com/bard-css-practicum-2020/bard-css-practicum-2020"
          target="_blank"
          rel="noreferrer"
        >
          {format(new Date(data.gitCommit.date), "MM.dd.yy")}
        </a>
        {/* <br /> */}
        {/* Commit *{data.gitCommit.hash.slice(-7)} */}
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
