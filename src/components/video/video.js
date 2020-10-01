import React, { useState, useEffect, useContext } from "react"
import ReactPlayer from "react-player"

import VideoPlayingContext from "~context/videoPlaying"

import LiveDot from "~components/liveDot/liveDot"

/* Import Local Styles */
import styles from "./video.module.css"

const Video = ({ url, muted = false, autoplay = false }) => {
  const [, setIsVideoPlaying] = useContext(VideoPlayingContext)
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [isMuted, setIsMuted] = useState(muted)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const handlePlayPause = () => {
    setIsPlaying(isPlaying => !isPlaying)
  }

  const handleToggleMuted = () => {
    setIsMuted(isMuted => !isMuted)
  }

  const handleProgress = progress => {
    // console.log(progress)
    setProgress(progress.playedSeconds)
  }

  const handleDuration = duration => {
    setDuration(duration)
  }

  useEffect(() => {
    setIsVideoPlaying(isPlaying)
  }, [isPlaying, setIsVideoPlaying])

  return (
    <div className={styles.video}>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          url={url}
          className={styles.reactPlayer}
          width="100%"
          height="100%"
          playing={isPlaying}
          muted={isMuted}
          onProgress={handleProgress}
          onDuration={handleDuration}
          playsinline={true}
        />
      </div>
      <div className={styles.controls}>
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleToggleMuted}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <p>
          {isPlaying ? (
            <LiveDot ignoreContext={true} initialState={true} />
          ) : (
            <LiveDot ignoreContext={true} initialState={false} />
          )}{" "}
          {Math.round(progress)} / {Math.round(duration)}
        </p>
      </div>
    </div>
  )
}

export default Video
