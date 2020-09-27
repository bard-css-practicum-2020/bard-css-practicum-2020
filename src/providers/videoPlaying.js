import React, { useState } from "react"

// Import Global Context(s)
import VideoPlayingContext from "~context/videoPlaying"

const VideoPlayingProvider = ({ children }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <VideoPlayingContext.Provider value={[isVideoPlaying, setIsVideoPlaying]}>
      {children}
    </VideoPlayingContext.Provider>
  )
}

export default VideoPlayingProvider
