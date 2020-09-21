import React, { useState, useEffect, useRef } from "react"

/* Import Global Components*/
import LiveDot from "~components/liveDot/liveDot"

/* Import Local Styles */
import styles from "./audio.module.css"

const Audio = ({ src, vtt }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioElementRef = useRef()

  useEffect(() => {
    if (audioElementRef && audioElementRef.current) {
      // set listeners
      audioElementRef.current.addEventListener("canplay", handleCanPlay)
      audioElementRef.current.addEventListener("play", handlePlay)
      audioElementRef.current.addEventListener("paused", handlePause)
      audioElementRef.current.addEventListener("pause", handlePause)
      audioElementRef.current.addEventListener("ended", handleEnded)
      audioElementRef.current.addEventListener("durationchange", handleDuration)
      audioElementRef.current.addEventListener("timeupdate", handleTimeUpdate)
    }
  }, [audioElementRef])

  const handleCanPlay = () => {
    console.log("canplay")
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  const handleDuration = () => {
    if (audioElementRef && audioElementRef.current) {
      setDuration(audioElementRef.current.duration)
    }
  }

  const handleTimeUpdate = () => {
    if (audioElementRef && audioElementRef.current) {
      setCurrentTime(audioElementRef.current.currentTime)
    }
  }

  const play = () => {
    if (audioElementRef && audioElementRef.current) {
      audioElementRef.current.play()
    }
  }

  const pause = () => {
    if (audioElementRef && audioElementRef.current) {
      audioElementRef.current.pause()
    }
  }

  return (
    <div className={styles.audio}>
      <audio src={src} ref={audioElementRef}>
        <track default srcLang="en" kind="captions" src={vtt} />
        Sorry, your browser doesn't support embedded audio.
      </audio>
      <div className={styles.song}>
        <p className={styles.title}>Jingling the Night Away</p>
        <p>by Evan Backer</p>
      </div>
      <p></p>
      <div className={styles.player}>
        {isPlaying ? (
          <button onClick={pause}>Pause</button>
        ) : (
          <button onClick={play}>Play</button>
        )}
        <p className={styles.text}>
          <span>
            {isPlaying ? (
              <LiveDot ignoreContext={true} initialState={true} />
            ) : (
              <LiveDot ignoreContext={true} initialState={false} />
            )}{" "}
          </span>{" "}
          {Math.round(currentTime)} / {Math.round(duration)}
        </p>
      </div>
    </div>
  )
}

export default Audio
