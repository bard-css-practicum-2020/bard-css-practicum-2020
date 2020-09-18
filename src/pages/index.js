import React, { useState, useRef, useEffect } from "react"
import { Pace, OnChar, WindupChildren } from "windups"

import styles from "./index.module.css"

// TODO: Add Timer to Return to Follow, or Click on 'Live' Functionality

const Index = () => {
  // const [followText, setFollowText] = useState(true)
  let followText = useRef(true)

  useEffect(() => {
    // followText.current = true
    const handleScroll = () => {
      followText.current = false
    }
    // set up mouse and trackpad listeners
    window.addEventListener("mousewheel", handleScroll)
    window.addEventListener("DOMMouseScroll", handleScroll)
    // clean up mouse and trackpad listeners
    return () => {
      window.removeEventListener("mousewheel", handleScroll)
      window.removeEventListener("DOMMouseScroll", handleScroll)
    }
  }, [])

  return (
    <div className={styles.index}>
      <WindupChildren>
        <Pace ms={80}>
          <OnChar
            fn={() => {
              if (followText.current) {
                window.scrollTo(0, document.body.scrollHeight)
              }
            }}
          >
            <p>
              Radio, despite being the world’s most ubiquitous means of mass
              communication, exists as an unremarkable feature of everyday
              life—a product of its near-invisible infrastructure. It remains
              highly influential, however—a conduit for intimacy, renowned for
              its capacity to traverse space. Radio builds communities in the
              air, globally and locally; it provides a context and medium for
              international governance; and it elicits a shared sense of
              domesticity. In the present day, the bounds of “radio” and its
              transmission get even muddier: the introduction of universally
              shared time—infinite liveness via constant streaming—has broadened
              what it means to be on the air, or “in-time,” with one another.
            </p>
            <p>
              Radio, despite being the world’s most ubiquitous means of mass
              communication, exists as an unremarkable feature of everyday
              life—a product of its near-invisible infrastructure. It remains
              highly influential, however—a conduit for intimacy, renowned for
              its capacity to traverse space. Radio builds communities in the
              air, globally and locally; it provides a context and medium for
              international governance; and it elicits a shared sense of
              domesticity. In the present day, the bounds of “radio” and its
              transmission get even muddier: the introduction of universally
              shared time—infinite liveness via constant streaming—has broadened
              what it means to be on the air, or “in-time,” with one another.
            </p>
          </OnChar>
        </Pace>
      </WindupChildren>
    </div>
  )
}

export default Index
