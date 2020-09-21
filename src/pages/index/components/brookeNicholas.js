import React from "react"
import { Pace, OnChar, WindupChildren } from "windups"

/* Import Global Components */
import Paragraph from "~components/paragraph/paragraph"
import Audio from "~components/audio/audio"
import Footnote from "~components/footnote/footnote"
import Bibliography from "~components/bibliography/bibliography"
import BibliographyItem from "~components/bibliography/bibliographyItem"

/* Import Assets */
import TheJingleSrc from "../../projects/brooke-nicholas/assets/the-jingle-mix-1.mp3"
import TheJingleVtt from "file-loader!../../projects/brooke-nicholas/assets/the-jingle.vtt"

const BrookeNicholas = ({ followText }) => (
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
        <Audio src={TheJingleSrc} vtt={TheJingleVtt} />
        <br />

        <Paragraph>
          The jingle is a form of advertising that remains relevant, persistent,
          and effective despite the significant changes in media technology
          since its inception. The jingle is a piece of music written for an
          advertisement that exploits the use of repetition in music to
          propagate a brand. It hinges on the creation of an “earworm,” a term
          coined by University of Cincinnati marketing professor James Kellaris
          describing the experience of replaying a repetitive song inside one’s
          head.
          <Footnote number={1} href="#reference-1" /> This is to say, jingles
          force the listener to reproduce the advertisement on their own by
          creating something catchy and infectious. It is the primary goal of
          musical advertising and jingles specifically to implant an earworm
          into a listener.
        </Paragraph>
        <Paragraph>
          In his commissioned work, <i>The Jingle</i>, musician and composer
          Evan Backer recreates the earworm effect by rapidly introducing
          material from different eras of jingle history through distracting
          compound sounds and quick cuts between sections. His source material
          included the first ever jingle, General Mills’ 1926 “Try Wheaties,”
          <Footnote number={2} href="#reference-2" /> Alka-Seltzer’s 1976 “Plop,
          Plop, Fizz, Fizz,”
          <Footnote number={3} href="#reference-3" /> Coca-Cola’s infamous 1971
          “Hilltop” commercial
          <Footnote number={4} href="#reference-4" />, and a song created by the
          San Diego used car dealership Mossy Nissan for their local 1998
          commercial.
          <Footnote number={5} href="#reference-5" />
          These sounds are condensed and brought together in The Jingle, where
          Backer creates a rhythmic propulsion in which all spaces are filled
          with information, giving the listener little room to rest or think. In
          The Jingle, repetition extends to the lyrics with the use of an
          anagram for JINGLE in “Section C.” During the refrain at the end, the
          earworm consumes itself, dissolving into its own repetition. Backer
          creates a mild capitalistic hypnosis that can only occur with the
          right amount of information overload and rapid-fire nonsense.
        </Paragraph>
        <Paragraph>
          The first second of Evan Backer’s jingle, the lyrics of which were
          co-written with sculptor Juliana Wisdom, begins with a misleading
          cascade of cartoonish synthetic noises. This ends abruptly—crumbling,
          melting into a dystopic jaunt through the musical history of the
          jingle. So begins the self-aware “Section A” titled, “The Ear Worm,”
          where the song reveals how horrified it is by its own ambition. The
          lyrics ask, “What’s the tune that gets stuck in your ear? Letting you
          know that there’s something to buy here . . .” borrowing from the
          child-like vocals and wonderment of “Pop, Pop, Fizz, Fizz.” In a nod
          to the directness of “Try Wheaties” and its use of barbershop quartet,
          “Section B: The Salesmen” responds to itself with renewed
          self-assurance, answering, “We’re selling! We’re selling! Nobody’s
          buying . . . But we’re selling! We’re selling!” The song dips into
          despair and picks itself up again, doubling back in an attempt to sell
          jingles as commodities in and of themselves. “Section C: The Anagram”
          literally spells out J-I-N-G-L-E through its lyrics: “Jingle In the
          Night Get Lost Everyday. (In the world of commerce.) . . . Jingling
          the night away.” Following the cue of the Coca-Cola Hilltop ad’s
          famous co-opting of hippie culture/aesthetic, this section mimics the
          notion that jingles must reflect the cultural register of the world
          outside advertising. Also tucked into “$ection C” is a ripping
          electric guitar lead inspired by the Mossy Nissan advertisement. It
          was placed here to obscure the vocal line “In the world of commerce,”
          referencing the use of subliminal messaging and hidden cues that
          occurs when artistic pursuits and advertising are brought together.
          The lyrics trail off at the end in order to infect the listener with
          the “<i>tune that gets stuck in your ear . . .</i>” With the song,
          Backer proves his point that jingles remain effective despite being
          one of the oldest formats of modern advertising. Overall one can sense{" "}
          <i>The Jingle</i> tripping over itself, its motives, its history, and
          the possible worry of having been outmoded in the era of the laptop
          and smartphone. In the end, the work successfully reproduces the
          affective mode of the jingle through literal and subliminal musical
          forms, focusing on the medium’s reliance on catchiness. A good jingle
          reminds the audience of a product or service, while a great jingle
          forces the listener to reproduce the advertisement on their own
          outside its original context on radio or television.
        </Paragraph>
        <Paragraph>
          The first recognized jingle was created by General Mills in 1926. The
          creepy tune, “Try Wheaties,” promised a long shelf life and crispy
          crunch of Wheaties cereal, communicating solely through a haunting
          barbershop quartet with no backing instrumentals. The song was
          inspired by fifteenth- and sixteenth-century London street criers and
          food vendors, who also publicized their wares through song and without
          instrumentation.
          <Footnote number={6} href="#reference-6" />
          Executives at General Mills were planning to discontinue the Wheaties
          product until they noticed a spike in the cereal’s popularity in
          Minneapolis, the first and only location where the jingle aired. As a
          test, the company aired the jingle nationally, whereafter sales of
          Wheaties tripled. Thus the market persistence of Wheaties was
          sustained through the clever use of jingle advertising, although it is
          shocking that the pure sex appeal of shredded wheat could not cut it
          by itself. Advertising was not permitted during prime-time radio
          programming in the 1920s and ’30s. Jingles, however, circumvented this
          regulation by linking entertainment with advertising. This created a
          loophole that allowed them to be played at any time of day. They were
          slotted into the beginning or end of radio programs and became
          associated with entertainment rather than strictly advertising.
          Jingles could mention a company or product's name without explicitly
          shilling that product. For example, the introduction to
          <i>The Adventures of the Jenkins Family</i> program began with a
          sing-songy, "Oh, my! It's Eskimo Pie!" as the pleasantly melodic,
          easy-to-remember hook that has the attributes of a typical jingle.
        </Paragraph>
        <Paragraph>
          Larry Compeau, a marketing professor at Clarkson University and
          executive officer of the Society for Consumer Psychology states
          plainly that, “The jingles aim to dazzle and transport us to the realm
          of mindless consumption. Musical memory has been shown to be one of
          the most powerful forms of memory. The jingle is a natural solution
          for advertising, as music is perhaps the most socially acceptable form
          of incessant repetition. By deploying an invasive ear worm that a
          listener is forced to internalize a commercial’s messaging.”
        </Paragraph>
        <Paragraph>
          The jingle’s success as a medium can be traced alongside technological
          developments. It first cropped up with radio, like “Try Wheaties,”
          then made the jump to television commercials. The jingle format
          escalates in complexity and mixed messaging when paired with visuals.
          The iconic 1971
          <a
            href="https://www.youtube.com/watch?v=1VM2eLhvsSM"
            target="_blank"
            rel="noreferrer"
          >
            Coca-Cola “Hilltop”
          </a>{" "}
          commercial embodies this transition, conflating images of world peace
          alongside the experience of opening a fresh coke. Interpassivity, the
          displacement of an emotional feeling onto something else through a set
          of signifiers.
        </Paragraph>
        <Paragraph>
          While the jingle may feel obsolete, even the most casual of market
          participants can conjure an example. For Millennials, likely examples
          might be Kit Kat’s “Break me off a piece of that Kit Kat Bar!” or “ba
          da ba ba ba, I’m lovin’ it” from McDonald’s radio and television
          commercials. These two examples also stretch the terrain from slogan
          to jingle, as well as detach the jingle from radio and move into the
          imagery of television.
        </Paragraph>
        <Paragraph>
          There is a self-aware nostalgia embedded in contemporary use of the
          jingle register. This nostalgia is not only for musical aesthetics,
          but brings a simpler time to mind. There is a sense across
          contemporary examples that the jingle is desperately trying to cling
          to its own dissolving and shape-shifting identity in an American
          economy that is currently largely frozen. Thus in Backer’s conception
          of a jingle that epitomized the jingle itself, he sought to recreate
          the feeling of a machine on the verge of breaking down. Like the
          economy itself, The Jingle seems to be perpetuated only by artificial
          stimuli and memory.
        </Paragraph>
        <Paragraph>
          <span style={{ paddingLeft: "1rem" }}>Biography</span>
        </Paragraph>
        <Paragraph>
          Evan Backer is a Los Angeles–based musician and composer. His musical
          practice flits between darkness and levity, usually landing on a kind
          of humor that exists between the two. As a CalArts-trained
          percussionist, Backer often begins his compositions with rhythm.
          Sounds in The Jingle were created using drums, lip pops, cowbell,
          hi-hat, programmed harp and glockenspiel, Model D synthesizer,
          electric bass, electric guitar, Effectron II. The Jingle was produced
          in Backer’s home as he sheltered in place for COVID-19 in March 2020.
        </Paragraph>
        <Paragraph>
          <span style={{ paddingLeft: "1rem" }}>The Jingle</span>
        </Paragraph>
        <Paragraph>
          Lyrics by Evan Backer and Juliana Wisdom
          <br />
          Music by Evan Backer <br />
        </Paragraph>
        <Paragraph>
          $ection A: “The Ear Worm” <br />
          What’s the tune that gets stuck in your ear? Letting you know that
          there’s something to buy here <br />
          $ection B: “The Salesmen” <br />
          We’re selling! We’re selling! Nobody’s buying. But we’re selling!{" "}
          <br />
          $ection C: “The Anagram” <br />
          Jingle In the Night Get Lost Everyday (In the world of commerce){" "}
          <br />
          Jingling the night away <br />
          $ection A’’: “The Refrain” <br />
          What’s the tune that gets stuck in your ear? x ∞ <br />
          Form: <br />
          Intro - A - B - A’ - B - C - A’’ <br />
        </Paragraph>
        <Paragraph>
          <span style={{ paddingLeft: "1rem" }}>Instrumentation</span>
        </Paragraph>
        <Paragraph>
          Voices Percussion: drums, lip pops, cowbell, hi-hat, programmed harp
          and glockenspiel, Model D synthesizer, electric bass, electric guitar,
          Effectron II
        </Paragraph>
        <Bibliography>
          <br />
          <BibliographyItem id="reference-1">
            <a href="http://www.nbcnews.com/id/3226796/ns/technology_and_science-science/t/professor-studies-playlist-hell/#.XrMZkhNKhR0">
              Professor Studies 'playlist from hell'
            </a>
            <Footnote number={1} href="#footnote-1" />
          </BibliographyItem>
          <BibliographyItem id="reference-2">
            <a href="https://www.youtube.com/watch?v=GLy5tANvXhY">
              Try Wheaties
            </a>
            <Footnote number={2} href="#footnote-2" />
          </BibliographyItem>
          <BibliographyItem id="reference-3">
            <a href="https://www.youtube.com/watch?v=iENQXIQ8wH0">
              Plop Plop, Fizz Fizz (1976)
            </a>
            <Footnote number={3} href="#footnote-3" />
          </BibliographyItem>
          <BibliographyItem id="reference-4">
            <a href="https://www.youtube.com/watch?v=1VM2eLhvsSM">
              Coca-Cola, 1971 - 'Hilltop' | "I'd like to buy the world a Coke"
            </a>
            <Footnote number={4} href="#footnote-4" />
          </BibliographyItem>
          <BibliographyItem id="reference-5">
            <a href="https://www.youtube.com/watch?v=i6frHvPCVlM">
              1988 Mossy Nissan Commercial
            </a>
            <Footnote number={5} href="#footnote-5" />
          </BibliographyItem>
          <BibliographyItem id="reference-6">
            <a href="https://www.youtube.com/watch?v=6CLpxmPA05g">
              The Street Cries Of Old London (1931)
            </a>
            <Footnote number={6} href="#footnote-6" />
          </BibliographyItem>
        </Bibliography>
      </OnChar>
    </Pace>
  </WindupChildren>
)

export default BrookeNicholas
