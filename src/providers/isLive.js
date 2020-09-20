import React, { useState, useEffect } from "react"

// Import Global Context(s)
import IsLiveContext from "~context/isLive"

const IsLiveProvider = ({ children, location }) => {
  const [isLive, setIsLive] = useState(true)

  useEffect(() => {
    if (location && location.pathname) {
      // if not on index, 'not live'
      if (location.pathname === "/") {
        setIsLive(true)
      }
      if (location.pathname !== "/") {
        setIsLive(false)
      }
    }
  }, [location])

  return (
    <IsLiveContext.Provider value={[isLive, setIsLive]}>
      {children}
    </IsLiveContext.Provider>
  )
}

export default IsLiveProvider
