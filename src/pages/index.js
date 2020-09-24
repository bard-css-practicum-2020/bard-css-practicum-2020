import React, { useState, useRef, useEffect, useContext } from "react"
import { differenceInCalendarDays } from "date-fns"

import IsLiveContext from "~context/isLive"

import MuhebEsmat from "./index/components/muhebEsmat"
import MariaCamilaMontalvoSenior from "./index/components/mariaCamilaMontalvoSenior"
import ElizavetaShneyderman from "./index/components/elizavetaShneyderman"
import BrookeNicholas from "./index/components/brookeNicholas"
import RachelSteinberg from "./index/components/rachelSteinberg"
import JuliaGardener from "./index/components/juliaGardener"

import styles from "./index.module.css"

const Index = () => {
  const [, setIsLive] = useContext(IsLiveContext)
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

  // if no interaction for more than 10 seonds,
  // begin following text again
  useEffect(() => {
    if (timeInactive >= 9) {
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

  //
  useEffect(() => {
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

  // if you touch the bottom of the page, set live
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 10
      ) {
        setIsLive(true)
        followText.current = true
      }
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
    <div className={`index ${styles.index}`}>
      <Content followText={followText} />
    </div>
  )
}

export default Index
