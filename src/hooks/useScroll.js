import { useState, useEffect } from "react"
import throttle from "lodash.throttle"

const getInitialX = () => {
  if (typeof document !== `undefined`) {
    return document.body.getBoundingClientRect().left
  }
}

const getInitialY = () => {
  if (typeof document !== `undefined`) {
    return document.body.getBoundingClientRect().top
  }
}

export default () => {
  // Set a single object `{ x: ..., y: ..., direction: ... }` once on init
  const [scroll, setScroll] = useState({
    x: getInitialX(),
    y: getInitialY(),
    direction: "",
  })

  const listener = e => {
    if (typeof document !== `undefined`) {
      // `prev` provides us the previous state: https://reactjs.org/docs/hooks-reference.html#functional-updates
      setScroll(prev => ({
        x: document.body.getBoundingClientRect().left,
        y: -document.body.getBoundingClientRect().top,
        // Here we’re comparing the previous state to the current state to get the scroll direction
        direction:
          prev.y > -document.body.getBoundingClientRect().top ? "up" : "down",
      }))
    }
  }

  useEffect(() => {
    const throttleWrapper = throttle(listener, 10)
    window.addEventListener("scroll", throttleWrapper)
    return () => {
      window.removeEventListener("scroll", throttleWrapper)
    }
  }, [])

  return scroll
}
