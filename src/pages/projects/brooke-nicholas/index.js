import React from "react"

/* Import Global Containers */
import Project from "~containers/project/project"

/* Import Global Components */
import Paragraph from "~components/paragraph/paragraph"
import Audio from "~components/audio/audio"

/* Import Local Assets */
import TheJingleSrc from "./assets/the-jingle-mix-1.mp3"
import TheJingleVtt from "file-loader!./assets/the-jingle.vtt"

/* Import Local Styles */
import styles from "./brooke-nicholas.module.css"

const BrookeNicholasProject = () => (
  <Project
    title="Jingling the Night Away"
    author="Brooke Nicholas"
    className={styles.project}
  >
    <Paragraph>
      The jingle is a form of advertising that remains relevant, persistent, and
      effective despite the significant changes in media technology since its
      inception. The jingle is a piece of music written for an advertisement
      that exploits the use of repetition in music to propagate a brand. It
      hinges on the creation of an “earworm,” a term coined by University of
      Cincinnati marketing professor James Kellaris describing the experience of
      replaying a repetitive song inside one’s head. This is to say, jingles
      force the listener to reproduce the advertisement on their own by creating
      something catchy and infectious. It is the primary goal of musical
      advertising and jingles specifically to implant an earworm into a
      listener.
    </Paragraph>
    <Audio src={TheJingleSrc} vtt={TheJingleVtt} />
  </Project>
)

export default BrookeNicholasProject
