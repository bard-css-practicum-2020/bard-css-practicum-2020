import React, { useState, useEffect } from "react"
import differenceInSeconds from "date-fns/differenceInSeconds"

// const getUnixTime = () => Math.floor(Date.now() / 1000)

const getStartingTime = () => {
  return differenceInSeconds(new Date(), new Date(2020, 8, 21))
}

const UnixTime = () => {
  const [unixTime, setUnixTime] = useState(getStartingTime())

  useEffect(() => {
    const increaseUnixTimeTimeout = window.setTimeout(() => {
      setUnixTime(unixTime => unixTime + 1)
    }, 1000)
    return () => {
      window.clearTimeout(increaseUnixTimeTimeout)
    }
  }, [unixTime])

  return <span>{unixTime}</span>
}

export default UnixTime
