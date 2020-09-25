import React, { useState, useRef, useEffect, useContext } from "react"
import { differenceInCalendarDays } from "date-fns"

/* Import Global Hooks */
import useScroll from "~hooks/useScroll"

import IsLiveContext from "~context/isLive"

import MuhebEsmat from "./index/components/muhebEsmat"
import MariaCamilaMontalvoSenior from "./index/components/mariaCamilaMontalvoSenior"
import ElizavetaShneyderman from "./index/components/elizavetaShneyderman"
import BrookeNicholas from "./index/components/brookeNicholas"
import RachelSteinberg from "./index/components/rachelSteinberg"
import JuliaGardener from "./index/components/juliaGardener"

import styles from "./index.module.css"

const Index = () => {
  const scrollInfo = useScroll()
  const [isLive, setIsLive] = useContext(IsLiveContext)
  let [timeInactive, setTimeInactive] = useState(0)
  let followText = useRef(true)

  const projects = [
    {
      link: "/projects/muheb-esmat",
      title: "Generation Livestream and Virtual Afghan Sphere",
      author: "Muheb Esmat",
      content: MuhebEsmat,
    },
    {
      link: "/projects/julia-gardener",
      title: "PRES Interview – Magdalena Moskalewicz and Daniel Muzyczuk",
      author: "Julia Gardener",
      content: JuliaGardener,
    },
    {
      link: "/projects/brooke-nicholas",
      title: "Jingling the Night Away",
      author: "Brooke Nicholas",
      content: BrookeNicholas,
    },
    {
      link: "/projects/maria-camila-montalvo-senior",
      title: "Interview with SHE Collective",
      author: "María Camila Montalvo Senior",
      content: MariaCamilaMontalvoSenior,
    },
    {
      link: "/projects/elizaveta-shneyderman",
      title: "Tung-Hui Hu Interview",
      author: "Elizaveta Shneyderman",
      content: ElizavetaShneyderman,
    },
    {
      link: "/projects/rachel-steinberg",
      title: "Unidentified Persons Object",
      author: "Rachel Steinberg",
      content: RachelSteinberg,
    },
  ]

  const startDate = new Date(2020, 8, 21)
  const daysSinceStartDate = differenceInCalendarDays(startDate, new Date())
  const offsetIndex = Math.abs(daysSinceStartDate % projects.length)

  const Content = projects[offsetIndex].content

  useEffect(() => {
    console.log("isLive", isLive)
  }, [isLive])

  // scrolling up deactivates scroll tracking
  useEffect(() => {
    console.log("scrollInfo", scrollInfo)
    if (scrollInfo.direction === "up") {
      setIsLive(false)
    }
  }, [scrollInfo, setIsLive])

  // scrolling up resets time inactive
  useEffect(() => {
    if (scrollInfo.direction === "up") {
      setTimeInactive(0)
    }
  }, [scrollInfo, setTimeInactive])

  // programmatic scrolling down resets time inactive
  useEffect(() => {
    const handleScroll = () => {
      setTimeInactive(0)
    }
    // set up mouse and trackpad listeners
    window.addEventListener("mousewheel", handleScroll)
    window.addEventListener("DOMMouseScroll", handleScroll)
    // Clear timeout if the component is unmounted
    return () => {
      window.removeEventListener("mousewheel", handleScroll)
      window.removeEventListener("DOMMouseScroll", handleScroll)
    }
  }, [setTimeInactive])

  // set up timer
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setTimeInactive(timeInactive => timeInactive + 1)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [timeInactive, setTimeInactive])

  // if timer value is over 9, go live
  useEffect(() => {
    if (timeInactive >= 9) {
      setIsLive(true)
    }
  }, [timeInactive, setIsLive])

  useEffect(() => {
    followText.current = isLive
  }, [isLive])

  // if you touch the bottom of the page, set live
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 10
      ) {
        setIsLive(true)
      }
    }
    // set up mouse and trackpad listeners
    if (window.outerWidth > 768) {
      window.addEventListener("mousewheel", handleScroll)
      window.addEventListener("DOMMouseScroll", handleScroll)
    } else {
      window.addEventListener("touchmove", handleScroll)
    }

    // clean up mouse and trackpad listeners
    return () => {
      window.removeEventListener("touchmove", handleScroll)
      window.removeEventListener("mousewheel", handleScroll)
      window.removeEventListener("DOMMouseScroll", handleScroll)
    }
  }, [setIsLive])

  return (
    <div className={`index ${styles.index}`}>
      <Content followText={followText} />
    </div>
  )
}

export default Index
