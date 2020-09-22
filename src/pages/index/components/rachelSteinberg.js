import React from "react"
import { Pace, Pause, OnChar, WindupChildren } from "windups"

/* Import Global Components */
import LiveDot from "~components/liveDot/liveDot"
import Paragraph from "~components/paragraph/paragraph"
import Image from "~components/image/image"
import Video from "~components/video/video"
import ProgressBar from "~components/progressBar/progressBar"

/* Import Assets */
import ObjectsImageSrc from "../../projects/rachel-steinberg/resources/Objects.jpg"

const RachelSteinberg = ({ followText }) => (
  <WindupChildren>
    <Pace ms={80}>
      <OnChar
        fn={() => {
          if (followText.current) {
            window.scrollTo({
              left: 0,
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        }}
      >
        <Image
          src={ObjectsImageSrc}
          style={{
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        />
        <div
          style={{
            maxWidth: "60ch",
            marginTop: "-1.4rem",
            marginBottom: "1rem",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
            overflow: "hidden",
          }}
        >
          <ProgressBar seconds={10} />
        </div>
        <Paragraph>
          <i>Unidentified Persons Object</i>
          <br />
          A video performance by Victoria Keddie
          <br />
          Featuring a live movement collaboration by Mariangela Lopez
          <br />
        </Paragraph>
        <Pause ms={7000} />
        <Paragraph>
          Livestream performance: <br />
          <LiveDot ignoreContext={true} initialState={false} /> September 17,
          2020
          <br />
          8PM EST
        </Paragraph>
        <br />
        <div style={{ maxWidth: "60ch" }}>
          <Video
            url={"https://vimeo.com/459080749/130fa3c105"}
            muted={true}
            autoplay={true}
          />
        </div>
        <Pause ms={992000} />
        <Paragraph>
          <i>Unidentified Persons Object is</i> a commissioned live-broadcast
          video-performance by artist Victoria Keddie featuring a live movement
          collaboration with Mariangela Lopez. The live-mixed performance was
          transmitted through the website kino.earth as a one time event on
          September 17, 2020 at 8PM EST and will be archived on{" "}
          <LiveDot ignoreContext={true} initialState={true} />
          itlaunches.today as a video document.
        </Paragraph>
        <Paragraph>
          In relation to the new adjustments to remote interactions with one
          another, Keddie posits a set of gestures as an alternative to the five
          senses. Taste, sight, smell, hearing, and touch become touch, signify,
          suffer, play, and prepare through performed interactions with a set of
          associated objects. A pen stands in for a past sense of <i>touch</i>,
          activated through memory and recollection. The now-commonplace medical
          mask is a surrogate for <i>signify</i>, allowing for a renewed
          engagement with surrounding environments. The exercise mat becomes 
          <i>suffering</i>, picking up on the superficiality of mindfulness and
          self-care practices in the face of a public health emergency, and the
          inability of these practices to truly make up for a lack of intimacy.
          A stone embodies a timeless symbol of <i>play</i>. Coin currency--a
          physical form of capitalist exchange—enacts <i>prepare</i> through its
          fraught potential for action and mobility.
        </Paragraph>
        <Paragraph>
          The performer, Mariangela Lopez, stands in as <i>the living body</i>{" "}
          to activate each of the sense-objects. She performs remotely,
          unearthing each gestural object and moving in relationship to her own
          mirrored image that is reflected back to her through live-mixed
          transmissions. Keddie splices forensic images and animations of
          skeletal remains into the live transmissions, merging Lopez’s live,
          secluded body with the material remnants of a simulated post-life
          figure. Crucially, <i>Unidentified Persons Object</i> presents no new
          object forms, but accounts for the semiotic attachments that the
          objects already carry. The performance/video underscores the temporal
          relationships that are increasingly prevalent in live, remote
          interactions, consciously re-mixing associations between intuitive
          senses, meaning, and movement.
        </Paragraph>
      </OnChar>
    </Pace>
  </WindupChildren>
)

export default RachelSteinberg
