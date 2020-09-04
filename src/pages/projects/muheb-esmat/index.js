import React from "react"

/* Import Global Containers */
import Project from "~containers/project/project"

/* Import Global Components */
import Paragraph from "~components/paragraph/paragraph"
import SubTitle from "~components/subTitle/subTitle"
import Footnote from "~components/footnote/footnote"
import Figure from "~components/figure/figure"
import Image from "~components/image/image"
import Caption from "~components/caption/caption"
import Bibliography from "~components/bibliography/bibliography"
import BibliographyItem from "~components/bibliography/bibliographyItem"

/* Import Local Assets */
import GeneralMiaAndMariamSrc from "./assets/General-Mia-and-Mariam.jpg"
import Maryam3Src from "./assets/maryam-3.jpg"

/* Import Local Styles */
import styles from "./muheb-esmat.module.css"

const MuhebEsmatProject = () => (
  <Project
    title="Generation Livestream and Virtual Afghan Sphere"
    author="Muheb Esmat"
    className={styles.project}
  >
    <Paragraph>
      In Irvine, California, Wana Miskinyar presents{" "}
      <i>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=ihkcbOUi16s&t=175s"
        >
          Wana's Show
        </a>
      </i>{" "}
      from the colorful green-screen studio of Ariana Afghanistan International
      Television. Founded in 1989, the privately-owned television channel has
      been a source of news and entertainment for the Afghan diaspora in the
      United States and Europe for decades. It is one of many television
      channels that served as a tool for cultural education and community
      building in the Afghan diaspora before the prominence of social media.
      Wana's guest today is Mariam, famously known as Raees Mariam (which
      literally translates to <i>boss</i>) by her followers on Facebook and
      Instagram. In a twist of fate, the star of the old screen meets the star
      of the new. Wana sits in an imagined green-screen studio, which adheres to
      the media formalities of production and presentation that give her
      credibility and status. On the other hand, Mariam presents her livestreams
      from the comfort of her own home, with no formalities beyond the mundane
      setting of everyday life. And yet, with the help of social media, she has
      effectively played a major role in the formulation of a new cultural
      moment in recent Afghan history. A moment in which livestreams have not
      only become a space for connection across physical and cultural barriers,
      but also the source for creating the ultimate form of reality television
      in the age of the internet.
    </Paragraph>
    <Paragraph>
      The interview is unsettlingly condescending, as a mix of generational and
      social differences, and the patriarchal culture prevalent across Afghan
      communities both in and out of the country underlies most of the
      questions. Wana starts by asking Mariam about her living arrangements—if
      she lives alone, if she has any children, what her marital status is—
      before getting to discussing her presence and contribution to a growing
      cultural space built through livestreams. Beginning very soon after
      Facebook introduced Live in 2016, many Afghans in and out of the country
      have used the platform to transcend boundaries in real-time and form what
      I believe has become a dominant part of the Afghan virtual cultural
      sphere. Responding to Wana’s question about how she became famous on
      Facebook, Mariam humbly professes to not knowing how and is unable to
      point out to a singular reason. She claims that it is her realness and
      persistence in not compromising her beliefs in the face of societal
      pressure towards women that draws people. Whatever the cause might be,
      what is true is that Mariam and her peers have ushered in a new era of
      communication and media production that has slowly taken over the
      spotlight from traditional media like the one that Wana built her career
      through.
    </Paragraph>
    <SubTitle>Facebook as the Internet</SubTitle>
    <Paragraph>
      Before going further into Mariam’s case, it would be beneficial to
      consider the recent history of the internet in Afghanistan. In parallel
      with the continuously changing social and political state of the nation
      for more than four decades now, the introduction and development of the
      internet takes a singular path, even in comparison to neighboring nations.
      In July 2001, the Taliban government banned the internet upon the grounds
      of it being used as a tool for broadcasting “obscene and immoral material,
      and material on the internet that is against Islam.”
      <Footnote number={1} href="#reference-1" />
      Although that ban was an extreme measure on the surface, an important fact
      to remember is that even before the decree there was very little public
      access to the internet. As a consequence of a war that had lasted more
      than two decades at the time, the telecommunication infrastructures were
      in an extremely debilitated state. Besides some foreign agencies and
      select wealthy Afghans that might have had access, it is reported that at
      the time it was “practically impossible to connect to the internet using
      Afghanistan's country code.”
      <Footnote number={2} href="#reference-1" />
    </Paragraph>
    <Paragraph>
      The initial steps towards public access to the internet in the country
      date back to 2003. As international sanctions were lifted in 2001 and
      borders opened to imports, the local culture fast become a den of
      consumerism, including that of new communication technologies. The liminal
      difference between public access to the internet in Afghanistan in
      comparison to other countries also means that the history, adoption, and
      role of the internet takes a varied path from the historical trajectory
      familiar in peaceful and technologically advanced countries. With the
      gradual public access to electricity, smartphones that are more economical
      and functional than computers that require high rates of literacy, and
      mobile data that includes social media packages, the Afghan community
      inside the country slowly found a new space to connect and build on the
      internet, with social media at the epicenter of it all.
    </Paragraph>
    <Paragraph>
      The history of the internet in Afghanistan and the larger Afghan online
      sphere not bound to the geography of the nation-state is heavily rooted in
      social media. An expansive list of experiences that exist across a
      multiplicity of domains abroad have been consolidated to a handful of
      social media and video-sharing platforms. The popularity of Facebook,
      Instagram, Twitter, and more recently TikTok and YouTube among Afghans has
      grown immensely in recent years. It is to the point that even the most
      radical opponents of the internet, the Taliban and the religious clergy,
      have come to widely use social media platforms as effective grounds for
      promoting their ideologies. While each one of these platforms has its
      distinct place and importance, Facebook has been a revelation in its
      reframing and expansion of community networks across conflicting lines.
      While it is hard to pinpoint a singular reason for its popularity, I
      believe some of the biggest draws of Facebook have been its ability to
      allow users to upload any kind of media on the platform, and its diverse
      uses beyond social networking.
    </Paragraph>
    <Paragraph>
      For more than four decades now, millions of Afghans have fled the country
      because of war and sought refuge across the world, ranging from
      neighboring countries of Pakistan and Iran to Europe, the United States,
      and Australia. For the Afghan living abroad, the platform “brings together
      aspects of an extended self usually separated in space and time,”
      <Footnote number={3} href="#reference-2" /> such as images, news, and
      family connection. Through this virtual sphere, a new Afghan nation has
      risen, one in which citizenship is available to all that have a social
      media account, no matter how geographically and culturally far away they
      might be situated.
    </Paragraph>
    <Paragraph>
      I speculate that Facebook’s popularity as a primary space for virtual
      interaction also stems from its availability in local languages, the
      platform’s ability to allow new users to comfortably be acquainted with
      the unfamiliar world of the internet in the company of their friends, and
      more importantly, the fact that it is free to use Facebook, while you have
      to pay for domains on the World Wide Web. From government institutions to
      local news media, foreign NGOs and embassies, politicians, writers,
      activists, opposition leaders, to ordinary citizens, all have come to
      occupy the same space. A fate that is almost impossible to envision in
      real life, considering the recent history of conflicts in the country.
      Facebook has simultaneously become an important archive of the nation’s
      recent past and the continuing present. Considering that “Facebook both
      amplifies and complicates the possibilities of exchange and display,
      cultural production, and self-shaping,”
      <Footnote number={4} href="#reference-2" /> it is important to emphasize
      that these analyses are by no means a glorification of a corporation that
      is widely known for its abuse of power and lack of transparency. My
      analysis only covers a small part of a much larger phenomenon in an
      attempt at understanding its role in contemporary Afghanistan, without
      delving into the debate surrounding Facebook’s problems as a corporation
      built on commodifying our virtual presence and data.{" "}
    </Paragraph>
    <Paragraph>
      This vast virtual sphere is in no way exempt from the rules and
      expectations of every day Afghan life, as it is heavily marked by the
      hierarchies of gender, religion, language, ethnicity, and class prevalent
      across Afghan society. Facebook serves as a site for the purposeful
      activity of social networking, but exists under a great deal of moral
      scrutiny. The country predominantly remains “a world divided into public
      and private realms, with the public world belonging almost entirely to men
      and with women still living mostly within compound walls sequestered from
      the eyes of strangers.”
      <Footnote number={5} href="#reference-3" /> Therefore, there is the desire
      to mask one’s identity online for many reasons, in particular for women
      living inside the country, as their public presence is subject to an array
      of cultural, religious, and political boundaries. On the other hand, these
      multiplicities of characters adopted in the public and private realm
      become less prevalent for Afghans like Mariam that live abroad, where
      their presence online can then both attract and irritate others according
      to their beliefs and desires.{" "}
    </Paragraph>
    <SubTitle>Connection across Boundaries</SubTitle>
    <Figure>
      <Image src={GeneralMiaAndMariamSrc} alt="alt" />
      <Caption>
        <a
          href="https://www.youtube.com/watch?v=pVDP9fqWrEY"
          target="_blank"
          rel="noreferrer"
        >
          Fig. 1. Screenshot of conversation between Raees Mariam and General
          Mia, uploaded to YouTube by funny video.
        </a>
      </Caption>
    </Figure>
    <br />
    <Paragraph>
      Mariam grew up in Kabul before seeking refuge in the United States, where
      she began going live on Facebook. The relative distance between these two
      societies allows her the security to live a life that stretches beyond the
      boundaries set for the public presence of women in Afghan culture.
      Simultaneously, this alienating distance serves as a motivation to live
      online. As she says early on in the interview, her sole motivation to go
      live began with her desire to get to know people more and build
      connections with Afghans across the world. In his seminal essay on exile,
      Edward Said discusses how exile creates a sense of alienation and “while
      it is true that literature and history contain heroic, romantic, glorious,
      even triumphant episodes in an exile’s life, these are no more than
      efforts meant to overcome the crippling sorrow of estrangement.”
      <Footnote number={6} href="#reference-4" /> In Mariam’s case, the virtual
      sphere allows her to mediate this estrangement that comes with being
      physically distanced from the culture and place she used to call home and
      find an alternative space through which to connect to it. Through the
      years Mariam has come to use her platform to advocate for her rights as a
      woman and everyone’s right to choose the life they want to live and fight
      against the strict religious and traditional structures that do not allow
      for those choices in Afghan culture. This courageous act has made her the
      direct target of both men and women, who bombard her with sexist and
      misogynist comments, from calling her vulgar insults such as “whore” and
      “infidel,” to death threats.{" "}
    </Paragraph>
    <Paragraph>
      Stepping beyond Mariam’s beliefs, desires, and willingness to blur the
      lines between what is seen as private and public in Afghan culture, which
      has effectively earned her celebrity status through social media, it is in
      the mobilization of livestream that a crucial moment in contemporary
      Afghan history lies. Besides Mariam, there are many others, mostly living
      abroad, that have utilized livestreams as a space to connect and gather in
      the face of physical and traditional borders that make such spaces
      impossible to exist otherwise. Common to many attempts at the
      documentation of cultural history in Afghanistan, this generation’s
      actions are often criticized and looked down upon without any proper
      critique and consideration of their ingenuity in their utilization of the
      internet. The ingrained classism in the production and documentation of
      cultural histories and the misguided worship of a singular Western
      modernity have added to lines drawn across moral and political biases;
      this has often led to the exclusion of cultures produced outside the
      prevalent norms as worthy of attention and credit. Despite their efforts
      not being recognized as progression in new forms of communication and
      cultural production, through Facebook and Instagram Live, Mariam and her
      peers have continuously influenced and shaped both virtual and physical
      Afghan culture and ought to be taken seriously.
    </Paragraph>
    <Paragraph>
      A typical livestream by Mariam is often conducted through Facebook and
      Instagram from the comfort of her home, a private space that then becomes
      public with a touch of the screen. She has amassed a large following of
      fans and critics that turn up to not only watch, but also engage with her
      through comments that she spends considerable time reading and reacting
      to. Besides being in an indirect conversation with hundreds of fans, she
      often hosts other livestreamers or invites fans to join the video call.
      Their conversations range from the discussion around everyday life to
      religion, politics, sex, etc., and this structure is true to how most
      livestreams are conducted. By conversing openly about what is often deemed
      culturally inappropriate or vulgar, they have created a shared theme and
      bond around breaking boundaries. What those boundaries consist of and how
      they are defined are different for each one of these Live personalities
      that have come to fame since Mariam.
    </Paragraph>
    <Paragraph>
      At a basic level, livestreams facilitated by Facebook/Instagram and the
      internet present a communication tool that allows Afghans from Kabul to
      New York, Toronto, Hamburg, Sydney, and other widespread geographies to
      come together and create a virtual community. As a medium, these
      livestreams make visible the negotiations of intimacy and exchange that
      are shadowed by abandonment, withdrawal, and insecurity both inside
      Afghanistan and among its growing diaspora. This serves as an integral
      tool in linking together a fragmented community born out of a war that has
      now lasted for more than four decades. To some Afghans residing abroad,
      the virtual community provides what their local foreign environment lacks,
      where a big part of one’s identity is relegated to small communities of
      Afghan family and friends. Simultaneously, to some Afghans inside the
      country, the virtual sphere provides them with an Afghan society that
      often cannot be found inside the country, due to the strict cultural and
      religious codes that heavily emphasize a divide between private and
      public. Naturally, some see these rebellions and blurring of traditional
      boundaries and norms as a stain on their proud patriarchal culture, while
      others celebrate it as a form of resistance.{" "}
    </Paragraph>
    <Paragraph>
      Social media and the internet in general have been a revelation in the
      framing and expansion of community networks and the Afghan virtual state
      that extends beyond geographical and cultural boundaries. Despite the
      existence of this virtual space before the introduction of Facebook and
      Instagram Live, this new addition that can transport one's physical image
      across the world in real time has been immensely popular in the Afghan
      community. Its ability to not limit the user’s voice to typed words,
      emojis, and digital reactions both makes one’s appearance more real and
      also narrows down the number of people who will then occupy that space.
      While it may seem easy to an outsider, it takes much more courage to
      publicly face people on livestream than in a chat room. In a way, the
      addition of livestreams has created a space within the larger social media
      space. While globally, livestreams have become ever more present during
      the recent pandemic that has forced everyone into self-exile, for
      societies like Afghanistan this estrangement and exile have been common
      for decades. Hence the appetite for and prevalence of livestreams in
      Afghanistan before the pandemic are no longer so difficult to grasp.{" "}
    </Paragraph>
    <SubTitle>Reality Television</SubTitle>
    <Figure>
      <Image
        src={Maryam3Src}
        alt="Mariam's livestream on YouTube channel Funny 420"
      />
      <Caption>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=a6fZfs_30sg&t=80s"
        >
          Fig. 2. Screenshot of Mariam's livestream on YouTube channel Funny
          420.
        </a>
      </Caption>
    </Figure>
    <br />
    <Paragraph>
      Beyond facilitating connections across borders and boundaries, livestreams
      have ushered in a new era of media production, which I believe to be the
      ultimate form of reality television. Traditionally, television has been a
      dominant player in the production and dispersal of media in Afghanistan
      since its rebirth after the fall of the Taliban. Mariam and her peer’s
      livestreams enter a second life once that “end” button is pushed on the
      screen. Recorded by fans and some of the online personalities themselves,
      these conversations are then reuploaded to a growing number of Facebook,
      Instagram, and YouTube pages. It is in this transition from their personal
      social media account to YouTube that these livestreams are then spread far
      and wide, garnering from thousands to even millions of views and in the
      process becoming part of a new wave of media production that is taking
      place on YouTube.{" "}
    </Paragraph>
    <Paragraph>
      For years now, Mariam’s livestreams have been relentlessly intimate and
      vulnerably real about her life in the past and present. From her happiest
      moments in the company of friends to her contemplation of suicide,
      abortion, break up, love, and everything else in between, all takes place
      in front of a camera. Since Mariam’s early days as one of the pioneers of
      this new phenomenon, the cult of personalities joining the movement has
      grown to include Hania Mazari (famously known as Shoy Shar), General Mya,
      Mahfouz, Qomandan Robika, Najeeb, Natasha, Najeeb-e-Borot, and many more.
      In YouTube, they have not only found an informal archive, but also an
      informal channel to produce an updated form of reality television. Taking
      the medium of livestreams as the overarching show, these characters
      constitute the cast of a reality show built around the drama of their
      connections and clash of their personalities online.
    </Paragraph>
    <Paragraph>
      In recent decades, reality TV has occupied an important place globally in
      contemporary television culture. In their book,{" "}
      <i>Understanding Reality Television</i>, Su Holmes and Deborah Jermyn
      write that some “early attempts to define reality TV emphasized the
      importance of a focus on ‘real-life’ and ‘real people’ as the crucial
      criteria, as well as the technological forms through which the subject
      matter was mediated (such as the video camcorder).”
      <Footnote number={7} href="#reference-5" /> The genre has expanded
      drastically in recent decades and includes a wide range of examples that
      go from talk shows to talent and game shows, courtrooms, reality soap
      operas, and confined dramatization of a search for love. Because of the
      category’s fluid and expandable boundaries, it is both able to absorb new
      forms and also avoid being bound to a particular definition. An important
      factor in the genre's appeal and success is the ideology of the “real”
      that serves as an anchor to all forms that have evolved from it. In the
      past two decades, Afghan television viewers have been witness to several
      reality-based shows that include: <i>Afghan Star</i> (a talent show based
      on American Idol), a local adaptation of <i>The Voice</i>,{" "}
      <i>Who Wants to Be a Millionaire</i>, <i>Khanda Bazar</i> (similar to
      <i>Afghan Star</i> but solely for comedians), and cop shows that mix real
      footage with reenacted scenes and many more.{" "}
    </Paragraph>
    <Paragraph>
      Coming back to the interview on <i>Wana’s Show</i>, Wana asks Mariam
      whether her online self is her real character or if she acts this way for
      publicity, to which Mariam responds “how I appear on livestreams is my
      real personality.” She further explains that she sees no need to play a
      role and to appear in a different character in the eyes of the people
      watching her online. The claim of Mariam and her peers to the “real” is
      also supported by the fact that they were regular citizens and not actors
      before their eventual social media stardom. The rhetoric of “real” is
      further solidified with the “Live” stamp at the top left corner and the
      visual structure of split screens that we have come to associate with
      livestreams in general. In their eventual existence on YouTube, mostly
      consisting of mere screen grabs, the viewer is still presented with these
      signifiers of the livestream, even if it is no longer live, but a
      recording. Livestreams here constitute the simulated structure that hosts
      reality TV, in the same way that fabricated environments have come to
      define the setting of most reality TV programing.{" "}
    </Paragraph>
    <Paragraph>
      Simultaneously, these recordings also expand the spectacle to include not
      only Mariam and her guests, but also the comments, reactions, and the
      viewer counts as they took place when they were live. This effectively
      expands the show to a much wider spectacle that centers around more than
      just the two main participants that share the screens. Without a script,
      the participants and the audience produce moments of total exposition with
      semi-foreigners and actual foreigners. Just like traditional reality TV
      programming that heavily relies on the show's ability to generate gossip
      and comments as an indicator of its success, because of their ability to
      simultaneously be attractive and repulsive, the success of these
      livestreams is driven by their shock value in the face of strict social
      and cultural orders. From the many hours of actual livestreams, the most
      shocking moments (considering that this shocking moment could vary
      according to the taste of the person that then acts as the producer) are
      cherry-picked and uploaded to YouTube by a growing list of accounts that
      are rapidly sharing new and recycled media for virtual consumption.{" "}
    </Paragraph>
    <Paragraph>
      Beyond these similarities to traditional forms of reality TV, Mariam and
      her peers have prevailed over the need for official networks, producers,
      and lavish sets to effectively reinvent the genre. The general public’s
      fascination with the “real,” which has been a global phenomenon in recent
      media history, has been transferred from the traditional medium of
      structurally produced television to a more democratic medium in social
      media. Of course, this claim to democracy is in comparison to television
      and cinema, which are highly hierarchical, and it does not refute the
      inherent restrictions and shortcomings that come with the internet and
      social media itself. Despite the grand claim of reality TV to realness
      interwoven with the rhetoric of liveness, traditional television viewers
      in actuality do not see the live coverage. These shows and moments of
      liveness that we experience as viewers are the product of seamless editing
      that maneuvers viewers into accepting that what is in front of them is
      happening in real time, famously used by shows based on contests and
      prizes. In this new formation of livestreams, the audience not only gets
      to see these real personalities intimately close on their screens, but
      also has the opportunity to directly engage with them if they wish to,
      which is often the case with fans that join the livestreams through the
      comment sections or direct video chat. This interactive experience allows
      the audience to effectively become part of the show and personally verify
      its “realness.”
    </Paragraph>
    <Paragraph>
      The same audience that enjoys an intimate acquaintance with Mariam also
      knowingly and unknowingly become producers and directors of the eventual
      reality TV media on YouTube. With no regard for Mariam and her
      participant’s rights, some of the viewers record parts of her livestream
      and upload it to YouTube. Their selections are clearly driven by the basic
      formula of what will create a buzz and earn them views, an informal
      currency in the world of spectacle media viewership. These viewers turned
      producers are the “the omnipresent yet invisible cameramen”
      <Footnote number={8} href="#reference-6" /> that also foreground their
      moral imperatives about Mariam and other personalities characters through
      their selection. In essence, this whole process, which starts with Mariam
      going Live and ends on YouTube channels with hundreds of thousands of
      views, travels through a list of complex social and political forces that
      leave their distinct mark in each step. The reality shows that have been
      taking shape surrounding livestreams in Afghan society teach us lessons
      about virtual connections and also reflect a new era of Afghan media
      production. Mariam and her peers have ushered in a new era of community
      building across social and physical borders through the virtual sphere.
      Such communities do not replace the necessity of the real sphere of
      in-person communication, but rather indicate the expansion, through
      livestreams, of the fields of communication and community building in the
      face of exile and physical and cultural boundaries.
    </Paragraph>
    <Paragraph>
      I write this essay in consideration of our growing reliance upon
      livestreams as a means for mediating our self-exile in the world outside
      of Afghanistan. Today, the proliferation of livestreaming could be seen as
      a by-product of the global pandemic, but in reality, dating such practices
      differs across geographies and cultures. As histories of the current
      moment will come to be written, we should consider the fact that certain
      geographies, in this case Afghanistan, as a consequence of their
      sociopolitical state, have had to bear the consequences of exile before
      the pandemic. While it has now become common in the Western context to use
      livestreams as a means for education, community building, and
      entertainment, Mariam and her peers have utilized the medium as an
      effective form of communication for years.
    </Paragraph>
    <Paragraph>
      Through the medium of livestreams, Mariam and her peers have knowingly or
      unknowingly contributed to the creation of a new online space for
      dialogue, conversation, and community that in-person could only exist
      underground or otherwise risk extreme consequences in Afghan communities
      in and out of the country. The online personalities of this new generation
      have become cultural icons (in some sense they could be termed their own
      counterculture), whose images and videos are reused, parodied, and
      ironically consumed, which in no way diminishes the fact that they are
      cultural producers with real impact. Mariam’s use of livestream and her
      role in contemporary Afghan society need further evaluation beyond the
      axiological approach that is often cast upon her and other Live
      personalities. Beyond facilitating a particular belonging, these
      livestreams have ushered in a new era of visual culture that is slowly
      bringing the internet and social media on par, if not above, traditional
      television as sources of entertainment and media production among Afghans.{" "}
    </Paragraph>
    <Paragraph>
      Whether this moment will come to be accepted as a true development in a
      new form of reality TV production is contingent on many factors, including
      further in-depth study of the phenomenon and also a general move towards
      documenting and understanding Afghan culture beyond the singular
      definition that it often is forced into. What is undeniably true is that
      this a real moment of ingenuity formed through the collision of technology
      and culture; culture, which said technology often neglects to take into
      consideration because of its Silicon Valley origins invested in Western
      contemporaneity. Reality TV or not, Mariam and her peers have ushered in a
      new era of media production that has and continues to leave a mark in
      contemporary Afghan culture and is growing to be a major source of
      entertainment and cultural production.{" "}
    </Paragraph>
    <Bibliography>
      <BibliographyItem id="reference-3">
        Ansary, Tamim.{" "}
        <i>Games without Rules: The Often-Interrupted History of Afghanistan</i>
        . New York: Public Affairs, 2014.
        <Footnote number={5} href="#footnote-5" />
      </BibliographyItem>
      <BibliographyItem id="reference-5">
        Holmes, Su, and Deborah Jermyn. <i>Understanding Reality Television</i>.
        London: Routledge, 2004.
        <Footnote number={7} href="#footnote-7" />
      </BibliographyItem>
      <BibliographyItem id="reference-6">
        Kavka, Misha. “Love ’n the Real; or, How I Learned to Love Reality TV.”
        In{" "}
        <i>
          The Spectacle of the Real: From Hollywood to “Reality” TV and Beyond
        </i>
        , edited by Geoff King, 93–104. Bristol, UK / Portland, Or: Intellect,
        2005.
        <Footnote number={8} href="#footnote-8" />
      </BibliographyItem>
      <BibliographyItem id="reference-2">
        McKay, Deirdre. “On Facebook.”{" "}
        <i>An Archipelago of Care: Filipino Migrants and Global Networks</i>,
        51–69. Bloomington, IN: Indiana University Press, 2016. DOI:
        10.2307/j.ctt2005rbn.9.
        <Footnote number={3} href="#footnote-3" />
        <Footnote number={4} href="#footnote-4" />
      </BibliographyItem>
      <BibliographyItem id="reference-4">
        Said, Edward W. <i>Reflections on Exile and Other Essays</i>. London:
        Granta Books, 2012.
        <Footnote number={6} href="#footnote-6" />
      </BibliographyItem>
      <BibliographyItem id="reference-1">
        <i>BBC News</i>, “Taleban ‘Outlaw Internet,’” July 13, 2001.
        <span style={{ whiteSpace: "nowrap" }}>
          news.bbc.co.uk/2/hi/south_asia/1437852.stm.
        </span>
        <Footnote number={1} href="#footnote-1" />
        <Footnote number={2} href="#footnote-2" />
      </BibliographyItem>
    </Bibliography>
  </Project>
)

export default MuhebEsmatProject
