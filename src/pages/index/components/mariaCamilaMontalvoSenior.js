import React from "react"
import { Pace, OnChar, WindupChildren } from "windups"

const MariaCamilaMontalvoSenior = ({ followText }) => (
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
        <div>content</div>
      </OnChar>
    </Pace>
  </WindupChildren>
)

export default MariaCamilaMontalvoSenior
