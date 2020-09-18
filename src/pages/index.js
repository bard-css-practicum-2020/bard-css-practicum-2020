import React from "react"
import Typewriter from "typewriter-effect"
import styles from "./index.module.css"

const Index = () => (
  <div className={styles.index}>
    <Typewriter
      options={{
        strings: [
          `Radio, despite being the world’s most ubiquitous means of mass
          communication, exists as an unremarkable feature of everyday life—a
          product of its near-invisible infrastructure. It remains highly
          influential, however—a conduit for intimacy, renowned for its capacity
          to traverse space. Radio builds communities in the air, globally and
          locally; it provides a context and medium for international
          governance; and it elicits a shared sense of domesticity. In the
          present day, the bounds of “radio” and its transmission get even
          muddier: the introduction of universally shared time—infinite liveness
          via constant streaming—has broadened what it means to be on the air,
          or “in-time,” with one another.`,
          `I spoke with media scholar Tung-Hui Hu about radio and its oscillatory
          function in media history. We spoke about the territorial logic of
          radio, as well as more broadly on decentralized and mobile networks.
          Meandering from technical accounts of radio, to transgressive
          interference, to what it means to foster a public built on/emerging
          from a “what’s in the air” model of accidental discovery, we discussed
          radio as a continuously evolving set of agencies, renegotiating its
          stake as a medium of mass communication. As our conversation shows,
          radio exists less as a distinct entity or category, and instead on a
          continuous spectrum of an evolving broadcast history.`,
        ],
        autoStart: true,
        loop: true,
        cursor: "",
        delay: 10,
      }}
    />
  </div>
)

export default Index
