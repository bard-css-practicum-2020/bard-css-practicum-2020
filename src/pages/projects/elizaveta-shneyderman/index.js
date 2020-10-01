import React from "react"

/* Import Global Containers */
import Project from "~containers/project/project"

/* Import Global Components */
import Paragraph from "~components/paragraph/paragraph"
import InterviewAnswer from "~components/interviewAnswer/interviewAnswer"
import InterviewQuestion from "~components/interviewQuestion/interviewQuestion"

/* Import Local Components */
import ImageSwap from "./components/imageSwap/imageSwap"

/* Import Local Assets */
import ImageA from "./assets/elizaveta-03/a-alternate.jpg"
import ImageB from "./assets/elizaveta-03/b.jpg"

/* Import Local Styles */
import styles from "./elizaveta-shneyderman.module.css"

const ElizavtaShneydermanProject = () => (
  <Project
    title="On Air: In Conversation with Tung-Hui Hu"
    author="Elizaveta Shneyderman"
    className={styles.project}
  >
    <div className={styles.content}>
      <div style={{ maxWidth: "100%" }}>
        <ImageSwap image={ImageB} swap={ImageA} />
        <Paragraph>
          Radio, despite being the world’s most ubiquitous means of mass
          communication, exists as an unremarkable feature of everyday life—a
          product of its near-invisible infrastructure. It remains highly
          influential, however—a conduit for intimacy, renowned for its capacity
          to traverse space. Radio builds communities in the air, globally and
          locally; it provides a context and medium for international
          governance; and it elicits a shared sense of domesticity. In the
          present day, the bounds of “radio” and its transmission get even
          muddier: the introduction of universally shared time—infinite liveness
          via constant streaming—has broadened what it means to be on the air,
          or “in-time,” with one another.
        </Paragraph>

        <Paragraph>
          I spoke with media scholar Tung-Hui Hu about radio and its oscillatory
          function in media history. We spoke about the territorial logic of
          radio, as well as more broadly on decentralized and mobile networks.
          Meandering from technical accounts of radio, to transgressive
          interference, to what it means to foster a public built on/emerging
          from a “what’s in the air” model of accidental discovery, we discussed
          radio as a continuously evolving set of agencies, renegotiating its
          stake as a medium of mass communication. As our conversation shows,
          radio exists less as a distinct entity or category, and instead on a
          continuous spectrum of an evolving broadcast history.
        </Paragraph>
        <InterviewQuestion interviewer="Elizaveta Shneyderman (ES)​">
          I​ want to start by thinking about the territorial logic of radio — of
          the “inside and outside” of its zones of logic. As a medium that has
          the capacity to disseminate/transmit and dematerialize to an
          unprecedented degree, it also marks a geographic specificity. The
          radio is a landscape that maps communities and their needs (rural
          tractor supply vs ads for personal injury lawyers), churches/holy
          sites, local languages spoken—even, perhaps, homogenous pop-song
          preferences. It’s caught somewhere in between being wide-reaching and
          profoundly marking the local, though. There is an invisible boundary,
          as one can traverse a lot of distance beyond their specific locality,
          but not necessarily trespass into the bounds of the state or national
          territory (or transmission). Do you have any thoughts on this, the
          territory of radio and its triangulation of global/local;
          bounds/no-bounds; territory/territory-less? Or more broadly, radio and
          its transmission protocol as emblematic of power relations?
        </InterviewQuestion>
        <InterviewAnswer subject="Tung-Hui Hu (THH)">
          I am no historian of radio, but one of the phrases that I like from
          its early days is “DX fishing,” which is the sport of making contact
          with a distant radio broadcaster (DX is shorthand for distant). As
          Jeffrey Sconce writes in his book <i>​Haunted Media​</i>, radio’s
          wireless spectrum around the early twentieth-century was mostly empty,
          and so DX fishing imagined the ether as a vast sea from which signals
          could be “fished” out. I love the idea of hooking and plucking a
          single voice out of the ocean that’s still live, thrashing. Because
          there were so few broadcasters, you had to go very far to find someone
          else, leading, as Sconce tells us, even Francophobic Americans to
          suddenly appreciate the transmissive potential of the Eiffel Tower.
          When the air eventually began to fill up with radio signals—when
          signals began to collide with each other—you had moments of
          interference and eventually government regulation. There’s a famous
          example of interference during the last hours of the <i>​Titanic​</i>,
          when its radio operator radioed back to a neighboring ship warning
          them of ice: “Keep out! Shut up! I am working.” The two spark gap
          transmitters on the nearby ships couldn’t broadcast simultaneously
          without interfering with each other. Or, as you put it, trespass on
          each other. For as the spectrum becomes crowded, it becomes regulated
          by the state. And so some of the interesting developments in radio
          and, eventually, broadcast history come out of attempting to test the
          boundaries between local and distant: the pirate television station
          Lanesville TV, [founded] by the Videofreex [collective], which
          broadcasted hyper-local video content from a small town in the
          Catskills, including a mockumentary about a UFO landing. Or the guy
          behind the pirate radio station Radio Essex that took over and
          broadcasted from an abandoned military platform in the North Sea,
          claiming to be outside of UK territorial waters; his family eventually
          turned it into a self-proclaimed kingdom, then a data haven.
        </InterviewAnswer>
        <InterviewAnswer>
          I have made the argument before that much of the conflict and even
          violence over the future of the Internet is due to our imagination of
          it as a global, universal phenomenon. What might it mean, as an
          exercise, to imagine the Internet as a series of local occurrences?
          Not even the Chinese Internet vs the Western Internet, but the
          Internet of “rural tractor supply vs ads for personal injury lawyers .
          . . churches/holy sites, local languages spoken . . . homogenous
          pop-song preferences” . . .?
        </InterviewAnswer>
        <InterviewQuestion interviewer="ES">
          ES:​ ​I love that notion—like a model of progression through space
          that’s predicated on a mismatch, two operating languages on the same
          switchboard.
        </InterviewQuestion>
        <InterviewQuestion>
          It’s interesting, too, how so much rhetoric about “The Internet” is
          staged as universal. I guess if we purge the particulars of one
          specific user’s interaction with the Internet, we can begin to see all
          the ways in which it is constructed to hide its synthetic-ness, that
          is, as a model of merely one kind of navigability/progression through
          space.
        </InterviewQuestion>
        <InterviewQuestion>
          I wonder how the shift from simultaneous broadcasting to
          interference—“Keep out! Shut up! I am working”—to government
          regulation has profoundly shaped our understanding of the radical
          visibility/invisibility of these newer vectors of communication. Like
          now, amidst global crisis (COVID-19), I long for a very specific kind
          of navigability: the accidentality normally available to me in daily
          encounters. A hallway encounter or a parking spot altercation is very
          different from the “accident” possibilities that virtuality offers (as
          a more “deliberate” form of navigation, in my mind).
        </InterviewQuestion>
        <InterviewAnswer subject="THH">
          We’ve been taking walks through nearby neighborhoods as we wait out
          our stay-at-home period, and it’s fascinating to see how different
          street life is in some front-facing neighborhoods (where everyone
          hangs out on the porch, etc.) vs back-facing neighborhoods (where
          everyone is in their backyards). I’ve had a bunch of delightful
          accidents meeting neighbors I’d never normally encounter. At the same
          time, the way those neighborhoods are designed (in some cases
          originally to maximize casual encounters, or to offer spaces for the
          “betterment” of working-class people) makes me realize that many
          accidents or separations in real life are designed, too. Parks in St.
          Louis, for example, were designed to informally segregate poor
          neighborhoods from rich ones. Similarly, it’s interesting how the
          algorithms that feed users suggestions design “accident” into the
          equation, for they’ve realized that we would get a little creeped out
          if we knew exactly what the marketing algorithms “know” about us.
        </InterviewAnswer>
        <InterviewAnswer>
          As for the visibility and invisibility of communication, we typically
          assume that technologies go from visible to invisible over time.
          But—and this speaks a bit to your next question below, about media
          forms coming in and out of visibility—what’s interesting about the
          COVID-19 crisis is that this equation might have been reversed: like
          many others, I’ve spent a few hours researching toilet paper
          restocking and other mundane stations from within the Internet’s
          supply chain. I’m tempted by the thought that this is more than the
          common “when things break, then you notice” theory. Thinking about
          slowdowns on the Internet due to a surge in use, or potholes in a
          road, or even the now-ubiquitous masks to prevent the spread of
          communicable diseases, I’m wondering if there’s something about this
          moment that has made infrastructure and communication visible again.
          Two years ago, I was in Cape Town, when the city was a few weeks away
          from running out of water (“day zero”). Everyone, and I mean everyone
          in that city of almost four million, had water pipes and reservoirs on
          their mind, whether because they were taking one-minute showers or
          because neighbors were hoarding water or because the water pressure
          simply was cut for parts of the day. Other cities—São Paulo, Mexico
          City—are close to running out of water, too. Maybe we are coming upon
          an era of scarcity, where some of the usual sleights of hand to make
          technologies invisible will feel like a twentieth-century phenomenon.
        </InterviewAnswer>
        <InterviewQuestion interviewer="ES">
          I think you’re onto something important with this notion of coming
          in/out of visibility of technologies. Especially in our present
          moment, with visuality being continually refashioned around
          televisuality, reminding one of the distant pleasure of making eye
          contact (another kind of technology.)
        </InterviewQuestion>
        <InterviewQuestion>
          I’m also thinking about this in the context of analog/digital media
          more broadly—the retroactive nature of media forms coming in and out
          of visuality (that is, the materiality of an analog form is not felt
          until the emergence of its digital replacement)—but also in terms of
          actually embracing the possibilities of true diminished significance
          of media forms. The difference between obsolescence and a vanishing
          mediator.
        </InterviewQuestion>
        <InterviewAnswer subject="THH">
          What you’re pointing out is that visuality is itself a technology:
          imagine teenagers teaching each other on how to flirt—how to make eye
          contact, then look away; imagine the job coach instructing a jobseeker
          how to use eye contact with an interviewer. And, like any other
          technology, visuality has changed over time. That’s the other half of
          media change, which typically just describes how a medium becomes
          invisible (or hypervisible) when it ages. We also need to pay
          attention to how we look and what we can see in each historical
          period.
        </InterviewAnswer>
        <InterviewAnswer>
          In response to a question on obsolescence, the artist Tacita Dean once
          wrote: “Everything that excites me no longer functions in its own time
          . . . I court anachronism—things that were once futuristic but are now
          out of date.” The same principle is what makes media history exciting
          to me. Bracket the literal workings of technology, which is easy to do
          when something becomes obsolete, and you get the social formations
          that underpin them—the utopian (or dystopian) futurism, the hopes and
          attachments that the public projects onto a form. For example, we get,
          in the name of networking technology Ethernet, the alchemist’s fantasy
          of a universal medium (“ether”) that supports all communications.
          Embracing anachronism allows for a different and stranger set of terms
          than just new/old, history/present.
        </InterviewAnswer>
        <InterviewAnswer>
          Ether, by the way, still sometimes gets used to describe TV and radio
          transmissions, which are sent, metaphorically, “through the ether
          waves.” And that imagination of us all surrounded by an invisible
          ocean of ether can be dystopian, as in the conspiracy theorists that
          are blowing up 5G cell towers because they think that those radio
          masts transmit the COVID-19 virus. But it can be strangely comforting,
          too. When I was a kid, I used to imagine early radio broadcasts from
          the turn of the twentieth-century propagating out into space, mingling
          with each other. Someone on the other side of the ether listening to
          Handel’s aria “Largo,” which, I’ve just discovered, was the first song
          ever broadcast.
        </InterviewAnswer>
        <InterviewQuestion interviewer="ES">
          Radio is a format in which it remains possible to tune in by accident.
          It is underwritten by a faith in, or at least a hope for, the
          potential of public experience.
        </InterviewQuestion>
        <InterviewQuestion>
          What do you make of this accidentality and the public experiences it
          makes possible? I can think of few forms of sociality that have this
          same relation to time and intentionality (the opposite of this is the
          premeditated podcast, which one can elect to listen to). I’m also
          thinking about Laura Mulvey’s suggestion that the ability to control
          (specifically to pause with precision) both the image and story
          afforded by newer media technologies, such as DVD players,
          fundamentally transformed our experience of film. Does direct control
          over the previously linear viewership that digital technologies make
          possible pose a challenge to more ludic temporalities?
        </InterviewQuestion>
        <InterviewAnswer subject="THH">
          Yes, radio as an accident: I have fond memories of going on road trips
          in foreign countries, and stumbling across radio stations that I’d
          never expect, or talk radio in languages I’d never comprehend. At the
          same time, I am realistic in that most radio stations (in the US, at
          least) are controlled by conglomerates, meaning that, for example,
          91percent of talk radio is politically conservative—the same stuff
          syndicated over and over. And just as digital video has a peculiar
          temporality, radio has its own temporality, too, that also involves
          control: the “breaking news” that spurs the feel of an event
          unfolding; the thirty-second advertising spot; the codes of address,
          such as the fireside chat, that evolved to make you feel like you are
          part of a public. Perhaps radio feels just old enough as a medium that
          we no longer feel compelled to follow those formerly rigid ideological
          codes, or perhaps it is just ambient and non-interactive enough that
          it can be placed in the background and now, as Finn Brunton puts it in
          his book on spam, does not “demand a look but waits” for its listener
          to find it.
        </InterviewAnswer>
        <InterviewAnswer>
          Scientists and artists have spent a lot of time thinking of ways to
          promote a similarly ludic experience of discovery with digital media.
          At NC State, in Raleigh, their main library is completely automated:
          the stacks are sealed behind a glass wall, and acrobatic robots
          retrieve your material for you. Their way of giving you a sense of
          browsing in the stacks is a program called Virtual Shelf that allows
          you to see the books next to your call number. It’s not ideal, but
          it’s better than nothing—and of course we’re corresponding right now
          when physical libraries are closed, so sometimes there’s no other
          option.
        </InterviewAnswer>
        <InterviewAnswer>
          But I’d also like to think more about your idea that radio is
          “underwritten by a faith in, or at least hope for, the potential of
          public experience.” I like the hopefulness of that idea: a faith that
          someone is out there listening. I was browsing some old web pages from
          the late 1990s and early 2000s recently and they have that
          characteristic, too; they are almost delightfully amateur, naively
          confessional but in a way that predates the confessional genre of the
          online essay of today. Elisa Giardina Papa’s artwork “need
          ideas!?!PLZ!!” (2011) collects similarly amateur YouTube vloggers who
          ask a largely imaginary audience to give them ideas for vlogs. We
          believe in a public, even if the idea of the public has changed to the
          point of unrecognizability.
        </InterviewAnswer>
        <InterviewAnswer>
          So the larger question is what we mean by public today, and what the
          temporal codes are that signify publicness. If it’s not copresence or
          simultaneity, and if we are skeptical of the ways that digital
          capitalism attempts to substitute a demographic marketing category for
          a public, what else is it? One idea is to return to the ambient model
          that radio hints at: the public is “what is in the air,” for better or
          for worse, an affect that occasionally coalesces as accidental
          discovery.
        </InterviewAnswer>
        <InterviewQuestion interviewer="ES">
          The “what’s in the air” version/model of a public seems to come with
          the possibility of its overwhelming vanishing into omnipresence, so
          much so that it becomes impossible to see anymore—public as the ground
          for everything else to unfold. I wonder what these additional
          “ambient” models of a public could be. I like the idea of a public
          “hidden in plain sight,” like-minded and spread across small footholds
          on the air. Of course, there’s a spooky aspect to that, too; I’m
          thinking about the rise of fringe political groups, the far-right
          ethnic nationalist politics that are bound to talk radio as a
          platform.
        </InterviewQuestion>
        <InterviewQuestion>
          Maybe we can broaden this to the role of distribution more generally,
          and the supposed liberty it offers. It’s no accident that these
          ideological footholds have taken residence on a platform predicated on
          commuting, that is, consumed on the way to and from work or home. What
          are your thoughts on building community as specifically linked to
          these dematerialized and mobile networks?
        </InterviewQuestion>
        <InterviewAnswer subject="THH">
          I am troubled by the rise of the far right, but they are, of course, a
          community too. Critics typically put forth community as an antidote to
          the social problems of today, but what they really mean is that they
          want the “good” form of community. Rather than sticking blindly to
          that term, we might begin to recognize that community can be as
          oppressive (or as beneficial) as any other concept of the collective,
          such as “social”; such words simultaneously marginalize some groups
          (for example, labelling queers as “anti-social”) even as they speak to
          what binds people together. Community, for me, is implicitly opposed
          to the public; community is “a group of people with common interests”
          (as the dictionary puts it) and a public is a group of people with no
          particular, or even competing, interests. Indeed, Jean-Luc Nancy
          points out that community is often driven by nostalgia for a past:
          "the natural family, the first Christian community, corporations,
          brotherhood . . ." and by extension the Paris Commune (for the left),
          Make America Great Again (for the right), etc.
        </InterviewAnswer>
        <InterviewAnswer>
          What about the role of distribution? I think one of the bitter facts
          to realize about the Internet is that one of the great hopes of the
          counterculture of the 1960s and 1970s—that by changing the design of
          the network (for instance by creating a two-way “feedback” network for
          citizens), you would change the design of politics—is only partially
          true. We see power concentrated more than ever, and often this is
          accompanied by calls to decentralize the network even further and, by
          implication, to weight individuals over the center. There’s a
          resurgence of interest in blockchain/crypto-powered “smart contracts”
          that might decentralize government and automate freedom, thus building
          the network that the Internet never was. But as David Golumbia points
          out in a recent book,
          <i>​The Politics of Bitcoin​</i>, these ideals are not only
          fundamentally libertarian, but even right-wing. What is lost in all
          these maps and theories is that the public (or the much-maligned
          “center”) is an old-fashioned, boring, even monolithic thing:
          highways, sewers, virus testing . . . It is the ground on which
          community can then be built.
        </InterviewAnswer>
        <InterviewAnswer>
          You asked about mobile networks, and I haven’t answered your question
          directly. I see something interesting in the idea of a commute as
          something that explicitly takes you out of your (literal) residential
          community—granted, probably to another corporate community/office
          park, but it’s the temporary journey in between that counts.
          Corporations know this already; this “drive time,” in the radio
          industry, is the most profitable part of the day. The question is if
          there are ways of getting to know the temporary community that happens
          on the road (or subway or train). Perhaps we could take inspiration
          from CB radio, which gives you a sense of who’s near you on the
          freeway, but, due to limited bandwidth on its shared channels, only
          lets one person talk at a time. CB is useful in a specific place and a
          specific moment. Maybe it’s the limitations of CB radio, rather than
          the plenitude of smartphone radios, that makes and made it unique.
        </InterviewAnswer>
        <InterviewQuestion interviewer="ES">
          I just read an article by scholar Art M. Blake about CB radio as a
          form of technologically mediated community, specifically with regard
          to black CB radio in the postwar period and the development of a
          shared, audible racial identity. It was a good reminder that
          “community” need not be moored in direct contact, that the creation of
          a cultural identity can happen in an aural sphere—in this case, a
          preexisting black aural-oral sphere rooted in black-interest radio,
          jive talk, and jazz.
        </InterviewQuestion>
        <InterviewQuestion>
          I was interested in this way that CB radio was developed to counteract
          the immobilities produced by the racist and segregated status quo,
          drowning out the noise. The shift from sound to noise as Michel Serres
          points out: “Noise destroys and horrifies. But order and flat
          repetition are in the vicinity of death. Noise nourishes a new order.”
        </InterviewQuestion>
        <InterviewQuestion>
          I am cautiously optimistic about our new order, this proverbial
          “noise.” On the one hand, these self-sufficient and community-building
          models rail against that old-fashioned sense of
          public-via-infrastructure. Noise which eludes capture and control . .
          .
        </InterviewQuestion>
        <InterviewAnswer subject="THH">
          I worry that noise doesn’t always evade capture; big data, for
          instance, is very good at sniffing out patterns from the noise that we
          throw off. What’s interesting about noise is that it’s rarely
          recorded—it’s much easier to throw it out—so the question for me is
          how one writes a history of noise, as Blake has done. This is where
          imagination comes in and where noise can be recuperative: where, to
          think of that amazing book of poetry <i>​Zong​</i>, M. NourbeSe Philip
          uses a moment when her printer jammed and overprinted lines of verse
          on top of itself as the book’s last chapter, much like the forcibly
          suppressed sounds of those who were murdered on the ship <i>Zong</i>{" "}
          m​ight have echoed and resounded through the ocean.
        </InterviewAnswer>
        <InterviewAnswer>
          The question of shared space makes me think about how we so often have
          models of being together that take place in opposition to something
          larger, something normative: subculture vs normative culture,
          counterpublics vs publics. This is how noise maps so readily onto a
          model of community: punk, techno, etc. But what happens in a moment of
          COVID-19, where many of us teachers, artists, writers, etc., are
          trying to build solidarity, not just in opposition to something, but
          in all the everyday, ordinary, even mass-market spaces, such as a
          classroom or an exhibition or a blog? What becomes “shared” when these
          disembodied spaces widen exponentially and we have less and less in
          common? How do we still inflect virtual spaces with markers of
          presence? This is where radio might continue to teach us. I think of
          that scene in the postapocalyptic novel/film <i>​On the Beach</i>,​
          where the Morse code transmission of a distant survivor from across
          the ocean is revealed to be simply a telegraph machine connected to an
          open window shade blowing in the wind: noise is (mis)read as signal,
          and accordingly, as hope.
        </InterviewAnswer>
        <InterviewQuestion interviewer="ES">
          One of the latent themes of this conversation has been the
          transformative potential of misreadings, of misregistration (“Keep
          out! Shut up! I am working”), of jamming, of interference. So, the
          role of contingency.
        </InterviewQuestion>
        <InterviewQuestion>
          The theological origin/meaning of “contingency” accounts for anything
          that depends upon something else for its existence—that is, which
          relies upon its point of contact to be supported, to exist, and to be
          seen. I am thinking about this in relation to the production of new
          forms of solidarity, which, as we’ve discussed, often gesture to the
          retroactively conceived, falsified, and mutely signifying conventions
          underwriting them—or as you put it, a solidarity that is not born out
          of being in opposition to something.
        </InterviewQuestion>
        <InterviewQuestion>A lot left to learn indeed!</InterviewQuestion>
      </div>
    </div>
  </Project>
)

export default ElizavtaShneydermanProject
