import React, { useState, useRef, useEffect, useContext } from "react"
import { Pace, OnChar, WindupChildren } from "windups"

import IsLiveContext from "~context/isLive"

import styles from "./index.module.css"

// TODO: Add Timer to Return to Follow, or Click on 'Live' Functionality

const Index = () => {
  const [, setIsLive] = useContext(IsLiveContext)
  let [timeInactive, setTimeInactive] = useState(0)
  let followText = useRef(true)

  // if no interaction for more than 10 seonds,
  // begin following text again
  useEffect(() => {
    if (timeInactive > 10) {
      setIsLive(true)
      followText.current = true
    }
    const handleScroll = () => {
      setTimeInactive(0)
    }
    const timer = window.setTimeout(() => {
      setTimeInactive(timeInactive => timeInactive + 1)
    }, 1000)
    // set up mouse and trackpad listeners
    window.addEventListener("mousewheel", handleScroll)
    window.addEventListener("DOMMouseScroll", handleScroll)
    // Clear timeout if the component is unmounted
    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousewheel", handleScroll)
      window.removeEventListener("DOMMouseScroll", handleScroll)
    }
  }, [timeInactive, setIsLive])

  useEffect(() => {
    // followText.current = true
    const handleScroll = () => {
      setIsLive(false)
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
  }, [setIsLive])

  return (
    <div className={styles.index}>
      <WindupChildren>
        <Pace ms={80}>
          <OnChar
            fn={() => {
              if (followText.current) {
                window.scrollTo({
                  left: 0,
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
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
