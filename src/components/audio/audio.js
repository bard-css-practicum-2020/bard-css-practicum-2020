import React from "react"

const Audio = ({ src, vtt }) => (
  <audio controls src={src}>
    <track default srclang="en" kind="captions" src={vtt} />
    Sorry, your browser doesn't support embedded audio.
  </audio>
)

export default Audio
