import React, { useState, useEffect } from "react"

const getUnixTime = () => Math.floor(Date.now() / 1000)

const UnixTime = () => {
  const [unixTime, setUnixTime] = useState(getUnixTime())

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
