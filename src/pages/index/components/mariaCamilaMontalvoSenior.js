import React, { useContext } from "react"
import { Pace, OnChar, WindupChildren } from "windups"
import classnames from "classnames"

/* Import Global Context */
import LanguageContext from "~context/language"

/* Import Global Components */
import InterviewAnswer from "~components/interviewAnswer/interviewAnswer"
import InterviewQuestion from "~components/interviewQuestion/interviewQuestion"
import Image from "~components/image/image"

/* Import Local Assets */
import LovingSuitsSrc from "../../projects/maria-camila-montalvo-senior/assets/1-loving-suits.jpg"
import OrdenamientoSilvestreSrc from "../../projects/maria-camila-montalvo-senior/assets/2-ordenamiento-silvestre.jpg"
import AnticonquistaCafeSrc from "../../projects/maria-camila-montalvo-senior/assets/3-anticonquista-cafe.jpg"
import ThisIsWeirdWithoutYouSrc from "../../projects/maria-camila-montalvo-senior/assets/4-this-is-weird-without-you.jpg"

/* Import Local Components */
import LanguageToggle from "../../projects/maria-camila-montalvo-senior/components/languageToggle/_languageToggle"

/* Import Local Styles */
import styles from "./maria-camila-montalvo-senior.module.css"

const MariaCamilaMontalvoSenior = ({ followText }) => {
  const [language] = useContext(LanguageContext)

  return (
    <>
      <LanguageToggle />
      <div className={styles.container}>
        <div
          className={classnames(styles.content, {
            [styles.visible]: language === "en",
          })}
        >
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
                <p>
                  Interview by Maria Camila Montalvo Senior with SHE Collective,{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/colectivosehablaespanol/"
                  >
                    Se habla español
                  </a>
                  , formed by Noelia Lecue Francia, María Alejandra Sáenz
                  García, Andrea Valencia Aranda, and Natalia Viera Salgado.
                </p>
                <p>
                  The curatorial collective <i>Se habla español</i>, comprised
                  of Noelia Lecue Francia, María Alejandra Sáenz Garcia, Andrea
                  Valencia Aranda and Natalia Viera Salgado, invites artists,
                  designers, writers, photographers and curators around the
                  world to submit a work, poem, image or short video (you can
                  use your cell phone camera!) to share a message of SOLIDARITY
                  in these uncertain times. The purpose of the images, which we
                  will be sharing with our networks, will be to reimagine the
                  future after the pandemic. Send your message along with a
                  short paragraph and the image credit to
                  colectivosehablaespanol@gmail.com. Let's spread SOLIDARITY.
                </p>
                <InterviewQuestion
                  homepage={true}
                  interviewer="Maria Camila Montalvo Senior (MCMS)"
                >
                  In the present moment, I have seen many things in my daily
                  life that I have not seen before. It is as if from one moment
                  to the next, the dimension of time has been amplified and I am
                  able to sit and contemplate everything around me in slow
                  motion. For example, I discovered that my African neighbors
                  who live in community, practice rituals in their backyard at
                  night. I sit and listen to their music and I think they dance;
                  I can barely see their shadows or silhouettes because it is so
                  dark. Then in the morning, I see trunks nailed to the ground
                  and tied together with red ribbon. A mandala of stones
                  surrounds them. I look for African music on Spotify and listen
                  to it all day. It is as if through observation, I have become
                  part of the ritual and of that community, which opened up
                  another world to me, another dimension. I see the same thing
                  in{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B_QTZZXB4Fl/"
                  >
                    Caro Dalfó's
                  </a>{" "}
                  piece for{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B-hyWvyhUKs/"
                  >
                    SOLIDARITY
                  </a>
                  . She says, "It is short, simple and mundane . . . My
                  neighbor, whom I do not know, practices his saxophone and it
                  makes my day. A small moment of happiness.” In both these
                  cases, I find gestures of solidarity. It is a solidarity
                  generated by an internal cohesion that comes from the
                  observation of what exists at this moment and with those
                  particular sensations. Both cases bring a degree of fantasy to
                  the enchantment. But I also believe that the gesture of my
                  contemplation or that of Caro is key within this solidarity.
                  Everyone is there for me, everyone is being supportive; those
                  who observe and those who listen. In this regard, I would like
                  you to define the concept of solidarity more precisely in
                  relation to the work you have received and to this moment in
                  time. For you, what is solidarity?
                </InterviewQuestion>
                <InterviewAnswer
                  homepage={true}
                  subject="Se habla español (SHE)"
                >
                  Solidarity is a concept that goes beyond this particular
                  public health emergency. Since the beginning of{" "}
                  <i>Se habla español</i>, the collective has had a spirit of
                  collaboration and mutual support that has been essential for
                  the creation of our projects. Solidarity is a way of relating
                  to others, understanding that we are a network and that if one
                  part of the network is vulnerable, then we are all vulnerable.
                  On the contrary, when we support each other and strengthen the
                  network, we all become stronger.
                </InterviewAnswer>
                <InterviewAnswer>
                  At this moment, solidarity is a way of creating bridges to
                  connect us in different ways and on different levels. The
                  SOLIDARITY HAS NO BORDERS initiative was born from a feeling
                  of empathy and affection towards each other, of extending a
                  hand in a difficult moment of social distancing to continue
                  strengthening our community. Now, solidarity demands from us
                  more than a gesture, it demands that we contribute and create
                  a platform for those who wish to express themselves. Our
                  proposal was also born out of a need to amplify messages of
                  empathy in a time when collective fear and panic have spread
                  in an alarming way.
                </InterviewAnswer>
                <InterviewAnswer>
                  The poet Arundhati Roy recently said, "Historically, pandemics
                  have forced humans to break with the past and imagine their
                  world anew. This one is no different. It is a portal, a
                  gateway between one world and the next." For us, the
                  importance of this project is related to the power in the
                  creation of that world to come.
                </InterviewAnswer>
                <Image src={LovingSuitsSrc} alt="Loving Suits" />
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  This time we are living through with COVID-19 is, in short, a
                  time in which we are forced to observe ourselves and one
                  another. But here I am talking about a real observation and
                  not the observation that seeks to self-reference all the time.
                  That is to say, while observing and listening, one forgets
                  about oneself in order to really see the other, and that is
                  when one is present. This is related to the piece{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B-_Eb7jhwbi/"
                  >
                    LovingSUITS
                  </a>{" "}
                  by Gina Goico, which speaks of the power of being present in a
                  community, of our narratives and memories of love: "It exists
                  in sensorial presence, in the connection generated by
                  listening, smelling or touching the pieces. Today, while
                  embroidering for the first time in two weeks, I understood:
                  part of my art is to weave communities. My passion is to
                  create spaces of communion for communication, reflection and
                  human physical integration. I’ m happy listening to others.
                  I’m happy facilitating communication. I'm happy when we are
                  healed by love." I also find this to be related to the
                  previous reflection. For you, what is the relationship between
                  solidarity and community? And in relation to communication, is
                  communication a gesture of solidarity or of love?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B-_Eb7jhwbi/"
                  >
                    LovingSUITS
                  </a>{" "}
                  is a great example of solidarity. The idea of self-love and
                  affection has been a recurring subject in Gina Goico’s work.
                  According to her, this project took longer than she expected.
                  “It's taken me a month. A month to make a piece I could
                  usually make in a day. A month in which I got sick, I
                  supported my students, I supported my close community of
                  teachers, I gave, but to my understanding, I couldn't ‘give’
                  to my art. Because it hurt.
                  <i>LovingSUITS</i> speaks of the power of being present in a
                  community, of our narratives and memories of love.{" "}
                  <i>LovingSUITS</i> exist in a sensorial presence, in the
                  connection generated by hearing, smelling or touching the
                  pieces. Today, as I embroidered for the first time in two
                  weeks, I understood: part of my art is to weave communities.
                  My passion is to create spaces of communion for communication,
                  reflection and human physical integration. I am happy
                  listening to others. I am happy facilitating communication.”{" "}
                  <i>LovingSUITS II</i> also connects to the first
                  <i>LovingSUITS</i>, which she understands as a developing
                  project that encompasses soft weighted sculptures and
                  multimedia documentation of Dominican women's narratives of
                  family dynamics, love and self-love. In the future,{" "}
                  <i>LovingSUITS</i> will collaborate with researchers and
                  family therapists to create epistemic content and objects that
                  can assist in therapy.
                </InterviewAnswer>
                <InterviewAnswer>
                  We can also talk about{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.the8thfloor.org/past-events/performance-as-repair"
                  >
                    Performance as Repair (2018)
                  </a>
                  , a program we organized at The 8th Floor, a gallery
                  established by the Rubin Foundation in New York. This event
                  explored the more performative idea of reparation and rituals
                  to bring us closer to collective or individual healing. The
                  artists{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.ginagoico.com/"
                  >
                    Gina Goico
                  </a>{" "}
                  and{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://ivansikic.com/"
                  >
                    Iván Sikic
                  </a>{" "}
                  with Paul Cannon investigated the relationship between
                  language and performance in their pieces, as a way of acting
                  on social and historical contracts—that remain unfulfilled—in
                  order to restore agency and encourage reparation.
                  <i>Performance as Repair</i> presented a live performance, a
                  video projection and an artists’ talk to establish a
                  conversation about how language and words have a performative
                  role in our society.
                </InterviewAnswer>
                <Image src={OrdenamientoSilvestreSrc} alt="Loving Suits" />
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  I relate to the exercise of observing and listening to
                  silence. Over the last month and a half we have been on pause
                  ("New York State on PAUSE"). Since then I have been immersed
                  in meditation. I had been practicing yoga for years but had
                  never spent so much time sitting in silence. This time,
                  physical and energetic changes happened that, without leading
                  to mysticism, serve as a new space or arrangement in my body.
                  From this space, I observe and listen—I consider it a space
                  for solidarity. I relate this to the pieces{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B_m1hrPhanT/"
                  >
                    Ordenamiento Silvestre [Wild Ordering] and Ir y Retornar
                    [Going and Return] by Sarabel Santos-Negrón
                  </a>
                  . According to the artist, this is a meditation exercise,
                  through "a catalogue and a calendar of leaves, in which I keep
                  memories of the passage of time, the fragility of life and the
                  change in an organism when it is separated from its natural
                  state." Santos-Negrón describes it as a socio-environmental
                  and political-economic ritual. In this regard, I would like to
                  know how you think this ritual is political or social? And how
                  does this relate to the concept of solidarity?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  Recognizing the passage of time in the quest to preserve
                  memory is a political and social act, even more so when it is
                  related to nature. Sarabel Santos-Negrón invites us to pause
                  and recognize, in an act of contemplation and repetition, the
                  value of memory. Nature allows us acts of remembrance and
                  recollection that help us evoke moments that trigger many
                  stories from the past to the present. The works{" "}
                  <i>Ordenamiento Silvestre</i> [Wild Ordering] and{" "}
                  <i>Ir y Retornar</i> [Going and Return] give an account of
                  this and help complete the stories of this moment of pause
                  that we are all living. Santos-Negrón's message of solidarity
                  reminds us of
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.the8thfloor.org/past-events-01/2019/11/15/screening-distancia-se-habla-espaol-in-conversation-with-ensayos"
                  >
                    DISTANCIA
                  </a>{" "}
                  (2019), a program that we presented in collaboration with the
                  Chilean collective Ensayos. Shown for the first time in New
                  York, <i>DISTANCIA</i> is an ethnographic web series by
                  Ensayos, which addresses problems related to the political
                  ecology in Tierra del Fuego, Chile. After the screening,
                  <i>Se habla español</i> moderated a conversation between the
                  members of Ensayos, Carla Macchiavello, Camila Marambio and
                  Carolina Saquel. The conversation revolved around ethical
                  bio-cultural practices and issues in representing the
                  landscape. This collective research focuses on extinction,
                  human geography and coastal health. Formed in the Tierra del
                  Fuego archipelago, Ensayos first focused on the ecopolitical
                  issues affecting the archipelago and its inhabitants—past and
                  present, human and non-human.
                </InterviewAnswer>
                <InterviewAnswer>
                  Both projects address the impact of these issues on nature,
                  environmental policies and rising social and economic
                  inequality. This moment of pause has made the strong fractures
                  in our society even more evident, the enormous economic and
                  social inequity, the precariousness of public health in our
                  countries (Colombia, Mexico, Puerto Rico, Spain) and in New
                  York City, and the clear crisis of neoliberal capitalism. This
                  reality, which has always been there, but today is becoming
                  more evident, has led us to establish a network of solidarity.
                </InterviewAnswer>
                <Image src={AnticonquistaCafeSrc} alt="Loving Suits" />
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  On the other hand, there is the work{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B_Tii4vB2yI/"
                  >
                    Anticonquista Café
                  </a>{" "}
                  by Lauren Reese, which seeks to "dismantle the notion that
                  farm workers are non-professionals and non-essential.”
                  According to the author, it attempts to "put an end to the
                  current cycle of land appropriation by the companies and
                  return it to the hands of the small peasant workers.” In this
                  work, the political is evident. So is solidarity. Considering
                  this, how does solidarity work to support political agency?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  Of course, solidarity is a political act. First of all,
                  solidarity implies a mode of self-organization. Knowing that
                  we can fight collectively for a common goal openly invites us
                  to exercise our political agency. Moreover, solidarity helps
                  us generate a shared vision, which makes us walk together
                  towards our goals and overcome the obstacles we face.
                </InterviewAnswer>
                <InterviewAnswer>
                  Lauren's project in particular seems important to us because
                  it makes us think about issues such as food sovereignty and
                  agriculture in our countries, self-management and
                  collaboration in community. Her photographs capture the
                  sensitivity in cooperation, the strength of what it means to
                  be an agent of change.
                </InterviewAnswer>
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/watch/?v=1492537630924082"
                  >
                    The collaboration
                  </a>{" "}
                  between Maria Camila Montalvo Senior with Se habla español
                  collective began on{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://radiokingston.org/es/broadcast/la-voz-con-mariel-fiori/episodes/kingston-with-covid-19-day-36-and-the-project-solidaridad-de-se-habla-espanol?fbclid=IwAR15SwhAeno8_TN5JwNahzkNkLpm149NhZC4okbIA6iCTwotFwyhOin8GqE"
                  >
                    the program La Voz with Mariel Fiori
                  </a>{" "}
                  on Radio Kingston, to which they were invited guests. La Voz
                  is a Spanish-language radio program that serves a community of
                  140,000 Latinx people living in the Hudson Valley and Catskill
                  Mountains. I find many commonalities between <i>La Voz</i> and{" "}
                  <i>SHE</i>: both serve the Latinx community of New York and
                  are also creating community. Both <i>La Voz</i> and <i>SHE</i>
                  use language as a mechanism for cultural integration.{" "}
                  <i>La Voz</i> is the only Spanish-language radio program here
                  in Upstate New York and your collective <i>SHE</i> is an
                  acronym for <i>Se habla español</i>. On the other hand, Noelia
                  highlights a problem with the Spanish language in relation to
                  its context in Spain, which is different from its context in
                  the United States and Latin America. I would like you to
                  develop the language issue a bit in reference to your project.
                  Is language a political tool? Is language an instrument for
                  solidarity?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  <i>Se habla español</i> was born in 2017 out of a need to make
                  an underrepresented community visible. The Spanish language is
                  not only the second most spoken language in the United States,
                  but also worldwide. According to 2019 statistics, Mexico has
                  the largest number of Spanish speakers, followed by the US,
                  Colombia and Spain, with the US being the only country where
                  Spanish is not an official language.
                </InterviewAnswer>
                <InterviewAnswer>
                  Today, very few American institutions, and more specifically
                  those in New York (because of our common context), are
                  bilingual. There have been great advances in recent years, but
                  the Spanish language has not yet reached all health, cultural
                  or government institutions. Guadalupe Ruiz Fajardo, Professor
                  of Latin American and Iberian Cultures at Columbia University,
                  and collaborator in one of our programs at The 8th Floor,
                  mentioned in an interview with{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.elmundo.es/andalucia/2018/09/02/5b8a7425e5fdeaa4438b45cb.html"
                  >
                    El Mundo
                  </a>{" "}
                  in late 2018 that these inequalities are still in place: "Here
                  English is the language of power. In the US, Spanish is the
                  language of the workers.”
                </InterviewAnswer>
                <InterviewAnswer>
                  Indeed, language is and has been used historically as a
                  political tool, not always from within the community or from
                  the perspective of the social fabric, stemming instead from
                  the political interests of those in power. We work within the
                  artistic context and we consider it very relevant to work with
                  this approach and in this way, because we do not only use
                  language as a communication tool; we are interested in
                  expanding its limits by exploring the impact and influence
                  that migration, identity, human rights and memory have on it.
                  The mission of <i>Se habla español</i> is to develop, through
                  collective effort and diverse perspectives, projects and
                  research that respond to contemporary reality by creating
                  platforms for reflection and artistic production.
                </InterviewAnswer>
                <InterviewAnswer>
                  In the same way, the acronym <i>SHE</i>, from{" "}
                  <i>Se habla español</i>, in English refers to her voice, a
                  fact that really reinforces the way we have always positioned
                  ourselves when we speak and that certainly coincides with that
                  of Mariel Fiori in <i>La Voz</i>, not only because of our
                  shared perspective of Spanish speakers, women or migrants, but
                  also because we are spreading and amplifying these voices to a
                  community that expands beyond our circles.
                </InterviewAnswer>
                <InterviewAnswer>
                  In the context of Spain, the Spanish language coexists
                  regionally with Basque, Catalan and Galician, but since their
                  prohibition during Franco's dictatorship, their use has become
                  so politicized that in places where two languages coexist, if
                  a bilingual person decides to use one over the other at
                  certain times, it is linked to their political affiliations.
                  In our case, we use Spanish outside the national contexts of
                  Spain, Mexico, Colombia or even the complicated case of Puerto
                  Rico and we focus specifically on the strength of the union
                  and amplification of that chorus that encompasses the
                  different variants and cultures.
                </InterviewAnswer>
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  You told me that the four of you met at the{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.macp.sva.edu/"
                  >
                    Curatorial Practice program at the School of Visual Arts
                  </a>
                  , where you started a Spanish (or Castilian) dictionary
                  containing variations of words that share meanings in each of
                  your countries. What is the most suggestive variation of words
                  in your dictionary?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  The dictionary came up very spontaneously during our daily
                  conversations. We began to feel that although we all speak
                  Spanish, we speak very different Spanish. One of the most
                  memorable anecdotes is a time when we planned to meet and{" "}
                  <i>comer</i>. Andrea, Noelia and Natalia planned to have lunch
                  [<i>comida</i>] around 1 p.m., while María Alejandra thought
                  they were going to meet around 7 p.m. After clearing up the
                  “misunderstanding,” we realized that in Mexico, Spain and
                  Puerto Rico mealtimes are usually called <i>desayuno</i>,{" "}
                  <i>comida</i> and <i>cena</i> [breakfast, lunch and dinner],
                  while in Colombia they say
                  <i>desayuno</i>, <i>almuerzo</i> and <i>comida</i>. We also
                  recall other "misunderstandings" with words like{" "}
                  <i>ordenador</i>, <i>computadora</i> and <i>computador</i>
                  [which all mean computer] or <i>esfero</i>, <i>pluma</i> and{" "}
                  <i>bolígrafo</i> [which all mean pen]. As a result of this, we
                  decided to keep a record of the different words we each used
                  to refer to the same thing and thus the dictionary was
                  created.
                </InterviewAnswer>
                <InterviewAnswer>
                  This exercise, together with our interest in the immigration
                  situation in the United States, led us to develop{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.the8thfloor.org/past-events/breaking-and-unveiling-the-immigration-glossary-of-severalty"
                  >
                    Breaking and Unveiling the Immigration Glossary of Severalty
                  </a>{" "}
                  (2018), a participatory workshop that we presented at The 8th
                  Floor at the invitation of Sara Reisman, the Executive and
                  Artistic Director of the Shelley & Donald Rubin Foundation.
                  The program <i>Severalty</i> [a term commonly used to describe
                  the separation and sole ownership of private property]
                  investigated the nature of immigrant identity and the language
                  surrounding immigration in the context of US contemporary
                  culture and media by proposing a glossary of terms that
                  constantly entail exclusion and reinforce differences between
                  people. We examined terms such as: alien, foreigner, border,
                  brain drain, Dreamer, immigrant, Latino-Hispanic, national,
                  refugee and sanctuary, among others. We invited experts from
                  different disciplines of art, education, activism and law who,
                  together with the participants, took part in a
                  non-hierarchical conversation to deconstruct these concepts
                  and reconsider the use and effects of immigration terminology
                  in this political moment.
                </InterviewAnswer>
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  I would like you to tell me what the{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://mujeresmirandomujeres.com/colectivo-she-se-habla-en-espanol-female-migrations/"
                  >
                    Female Migrations
                  </a>{" "}
                  initiative is about and if you find any connection to your
                  SOLIDARITY project. How do migration policies relate to
                  messages of solidarity? Do these two aspects of your work
                  correlate?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  In <i>Female Migrations</i> (2019) we presented four Latin
                  American artists who approach their artistic practice from the
                  female perspective of migration, a proposal that, in addition
                  to social advocacy, is rooted in the ideals of empathy and
                  solidarity developed in the current project. Female Migrations
                  draws attention to the historically neglected vision and role
                  of women in the current grave reality of migration, through
                  the personal experiences and artistic practices of the guest
                  artists: Karina Aguilera Skvirsky, Simone Couto, Amanda
                  Gutiérrez and Esperanza Mayobre.{" "}
                </InterviewAnswer>
                <InterviewAnswer>
                  Migration agency and solidarity are aspects that we have
                  indeed been developing in our work since we formed the
                  collective and are exemplified in a very concrete and visual
                  way in each of the events that formed the
                  <i>Female Migrations</i> series.
                </InterviewAnswer>
                <InterviewAnswer>
                  In this way, Karina Aguilera Skvirsky paid tribute to the
                  migration history of her Afro-Ecuadorian great-grandmother
                  through her work{" "}
                  <i>The Perilous Journey of María Rosa Palacios</i> and
                  presented the connection between altruism and participatory
                  action, linking popular narratives with current discourse on
                  borders, migration and nationality.
                </InterviewAnswer>
                <InterviewAnswer>
                  Amanda Gutiérrez, in a second event, presented a performative
                  virtual reality documentary on soundwalks with the work{" "}
                  <i>Flâneuse>La caminanta</i>. This documentary was recorded
                  with female-identified participants narrating the bodily
                  dangers and sensations they have experienced in what is for
                  many a dangerous public space.
                </InterviewAnswer>
                <InterviewAnswer>
                  For <i>2 x 2 inches</i>, Simone Couto invented the stories of
                  immigrant women whose pictures were missing from the
                  membership cards of the archive of the Spanish Benevolent
                  Society, La Nacional, in New York around the 1920s. Simone
                  asked twenty-two female artists to write a personal letter to
                  those faceless women in order to reconstruct their identities,
                  somewhere between reality and fiction. This gesture of
                  sensitivity by Simone Couto draws a strong parallel with the
                  painful situation of the COVID-19 crisis in New York City,
                  with the large number of immigrants who have died, who have
                  not been claimed and who will remain anonymous.
                </InterviewAnswer>
                <InterviewAnswer>
                  The topic of Esperanza Mayobre’s piece{" "}
                  <i>
                    Domingo familiar (It's not Sunday, but can you play dominoes
                    with me?)
                  </i>{" "}
                  has also been a recurring theme in these days of uncertainty
                  and confinement. When we presented this event, in August 2019,
                  Esperanza Mayobre was addressing Venezuela's migration crisis
                  by creating a space for unity, seeking the slightest sliver of
                  comfort and relief to those around to her, establishing
                  emotional ties and support between communities. These days
                  when we think about her work and initiative it is even more
                  painful and relevant to us. We wish that hugs and meetings
                  with our loved ones could give us back a much-needed
                  tranquility. This crisis, now international, not only attacks
                  our health, but affects the ways in which our community shows
                  affection and connection to others. So, in a certain way,
                  through these projects, we rethink and position ourselves in
                  solidarity with others.{" "}
                </InterviewAnswer>
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  The collective <i>Se habla español</i> is made up of four
                  women and is abbreviated as <i>SHE</i>. I also see an emphasis
                  on the role of women in your work, especially with the{" "}
                  <i>Female Migrations</i> project. Right now, we are inundated
                  with good-press headlines suggesting that the places where the
                  COVID-19 crisis has been best managed are countries led by
                  women. I would like to hear about your role as women within
                  the global contemporary art context and its relationship to
                  our current reality. What does it mean to be female leaders
                  within the context of global art today?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  We're part of the most overworked and underpaid groups in the
                  cultural sector, firstly because we're women, secondly because
                  we speak Spanish and some of us are Latinas. It is no secret
                  that the art world operates through a white, heterosexual,
                  homogenizing male lens and gaze. It is quite frustrating to
                  see how the narrative that is built around this profile has so
                  much influence on, for example, the gender balance—or lack
                  thereof—that exists in the collections of American
                  institutions.
                </InterviewAnswer>
                <InterviewAnswer>
                  Being a woman in this context requires understanding the
                  positions and dynamics of power at the institutional level,
                  but also not being intimidated by this. We recognize that
                  there are women who are leading phenomenal institutions and
                  projects and who have inspired us greatly throughout our
                  practice. Some that come to mind are Suzy del Valle, Macarena
                  Gómez Barris, Sofía Hernández Chong-Cuy, Hitomi Iwasaki, Marta
                  Moreno Vega, Deborah Cullen, Aimé Lukin Iglesias, Carla
                  Acevedo Yates, Marcela Guerrero, Arlene Dávila, Sara Demeuse,
                  Chus Martínez, María Belén Sáenz, Nana Adusei-Poku, among
                  others. Also very important to us is Sara Reisman, artistic
                  director of the Shelley & Donald Rubin Foundation, who gave us
                  our first curatorial opportunity as a collective at The 8th
                  Floor. We believe that these women have transformed the
                  artistic and narrative landscape in their capacities as
                  cultural professionals and have contributed to the
                  conversation around contemporary art.{" "}
                </InterviewAnswer>
                <InterviewAnswer>
                  As female curators, we seek to use the space at <i>SHE</i> to
                  bring visibility to communities that often do not have the
                  opportunity to participate in dialogues. We believe that it is
                  also important to have this exchange of cultures between the
                  four of us; since we come from different countries and
                  different contexts, it is fundamental to understand our
                  cultures. This is also an act of solidarity.{" "}
                </InterviewAnswer>
                <Image
                  src={ThisIsWeirdWithoutYouSrc}
                  alt="THIS IS WEIRD WITHOUT YOU"
                />
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  It is a fact that COVID-19 is not just a disease in the body
                  itself, but rather functions as a biopolitical agent that
                  permeates racial, social class, national and mental health
                  spheres, etc. We can see this, for example, in the fact that
                  the Latinx community is the most affected by COVID-19 in New
                  York, followed by the African-American community. In a poetic
                  way, we also see this reflected in the works you have gathered
                  for SOLIDARITY: none of the pieces speak of the disease
                  itself. The work{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B_DlaGeBzuM/"
                  >
                    THIS IS WEIRD WITHOUT YOU
                  </a>{" "}
                  (2020), by Juan Carlos Rodriguez Rivera, Marcela Pardo Ariza
                  and Felipe García Jr., is defined by a poetic energy that
                  recognizes the fact that we are all interconnected and that we
                  all need the support of one another now more than ever. This
                  work makes visible, in some way, an existing support network
                  and at the same time invites us to reimagine a future
                  together. Evidently the concept of community, which has always
                  been present in Latin America, begins to occupy a central
                  place within societies at a global level with COVID-19. With
                  regard to the concept of community and solidarity, how do you
                  reimagine the future?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  COVID-19 has indeed emphasized problems already existing in
                  our society. However, we cannot forget the impact the virus
                  has had on the lives of all the people who have caught it or
                  who have suffered losses of family and friends. By this we
                  mean that we are all subject to the impact and consequences of
                  the pandemic, from an economic, social and emotional point of
                  view.
                </InterviewAnswer>
                <InterviewAnswer>
                  Every day the press, governments and other institutions
                  provide information that deprives us of a future by presenting
                  uncertain scenarios. Many structures that shaped our previous
                  reality and sense of unity have ceased to have the
                  practicality they once had. This makes us question what
                  community is without the hugs, the dancing, the friction, the
                  affection. But the truth is that human beings have found many
                  ways to unite and come together throughout history. Now more
                  than ever it’s time to unlearn old structures, to reflect and
                  be creative in building new ways of creating community.
                </InterviewAnswer>
                <InterviewAnswer>
                  Something that concerns and motivates us in this sense is a
                  focus on communitarian and collaborative projects that create
                  teaching systems using imagination as a starting point and
                  foundation for the projection of the future we want. In
                  reality uncertainty predominates our vision of the future and
                  although we do not have a defined answer or solution, we
                  believe that thinking from the perspective of solidarity helps
                  us take a stand on the possibility of a less precarious and
                  more equitable future. Moreover, our intention is to create a
                  platform for artists and other thinkers to contribute to the
                  formation of multiple visions of the future.
                </InterviewAnswer>
                <InterviewAnswer>
                  SOLIDARITY reaffirms the work we have already been doing as a
                  collective. From the start, the projects of{" "}
                  <i>Se habla español</i> have emphasized the need to present
                  artists using underrepresented social practices and
                  narratives. <i>SHE</i> has facilitated a support network
                  bringing together and connecting different people and
                  disciplines. We believe that more than ever, communities are
                  connecting at different levels, in other forms that involve
                  physical distancing, but not social distancing—where social
                  networks or virtual spaces are nothing more than new tools for
                  communicating affection.
                </InterviewAnswer>
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  I remember Andrea’s words during our conversation on{" "}
                  <i>La Voz</i> in which she spoke about the role of the arts:
                  “Art is for everyone, it touches our deepest parts as human
                  beings, and it is through those deepest parts that we connect
                  with each other. Art, right now and always, is something we
                  have to get close to in order to be together.” And today, as I
                  finished writing this, I had the opportunity of being part of
                  the Ceremony of the Day of the Southern Cross, conducted by
                  Carmen Vicente, a medicine woman from Loja, Ecuador. Live in
                  the Andes, people from all over the world joined on Zoom and
                  came together to share, live and create spaces of celebration
                  around this beautiful altar, the Chakana. Some words of wisdom
                  and encouragement from this beautiful woman, who reimagines a
                  future in which the art, health, spirituality and community
                  living active in Indigenous and rural communities in Latin
                  America can be used to confront these challenging times:
                </InterviewQuestion>
                <InterviewQuestion>
                  The principle value of humans is to live in community. And so,
                  in these times we are living in today, we must question our
                  view on what we have been taught about the meaning of
                  community. The word community goes together with the word
                  harmony. When I went to the city, I heard different meanings
                  of this word: harmony. But what is the lesson in the education
                  we have received about what it means to be in harmony with the
                  tree? Harmony with water, harmony with fire, harmony with
                  earth . . . And when is this harmony broken? In many
                  communities that I know, and in the countryside community that
                  I come from, the value of harmony is still upheld. Harmony as
                  an economy of life . . . All of us are moving at the same
                  time. All of us are moving in relation to each other, while
                  being different from one another. But an understanding of the
                  harmony of each place allows a balance in life for all the
                  spaces between them . . . When I bring corn to the altar, I am
                  speaking about the need for community living on either large
                  or small scale to serve a purpose in time . . . When we say
                  “art” we are speaking about free peoples allowed to create and
                  able to generate new forms. But this freedom has not yet
                  happened and is thus not possible in the present, unless it is
                  made in community collaborative work in the spaces we live in
                  . . .
                </InterviewQuestion>
                <InterviewQuestion>
                  How are we going to integrate the experience that we have
                  lived in this time called “quarantine”? By walking once again
                  up the steps of the mountains where the spirit rises. And even
                  on the flattest of lands, there is a mountain of power. How
                  will we go back to walk ancient paths, to continue on to the
                  present moment? When artists create new designs, or when they
                  renew known designs, that is called a “vision." When we have
                  been ill and become healthy again, that health, being able to
                  stand up again is already a “vision.” That vision is not just
                  my individual freedom alone; no vision is realized through
                  just one person. The vision of every dreamer, of every person
                  in the community is a good deed from the community and for the
                  community. So now we are working for health.
                </InterviewQuestion>
                <InterviewQuestion>
                  Carmen Vicente, Ecuador, May 3rd, 2020.
                </InterviewQuestion>
              </OnChar>
            </Pace>
          </WindupChildren>
        </div>
        <div
          className={classnames(styles.content, {
            [styles.visible]: language === "es",
          })}
        >
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
                <p>
                  Entrevista de María Camila Montalvo Senior a Colectivo SHE,{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/colectivosehablaespanol/"
                  >
                    Se habla español
                  </a>
                  , formado por Noelia Lecue Francia, María Alejandra Sáenz
                  García, Andrea Valencia Aranda, y Natalia Viera Salgado.
                </p>
                <p>
                  <i>Se habla español</i> invita a artistas, diseñadores,
                  escritores, fotógrafos y curadores alrededor del mundo a
                  enviar una obra, poema, imagen o video corto (¡puede ser con
                  la cámara de tu teléfono!) y compartir mensajes de SOLIDARIDAD
                  en estos tiempos de incertidumbre. El propósito de las
                  imágenes, que estaremos compartiendo en nuestras redes, será
                  re imaginar el futuro después de la pandemia. Manda tu mensaje
                  junto a un párrafo corto y el crédito de la imagen a
                  colectivosehablaespanol@gmail.com y contagiemos SOLIDARIDAD.
                </p>
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  Dentro del momento en que estamos viviendo, yo he visto muchas
                  cosas de mi cotidianidad que no había visto antes. Es como si
                  de un momento a otro, la dimensión del tiempo se hubiese
                  amplificado y dispusiera de sentarme a contemplar cada cosa
                  que me rodea en cámara lenta. Por ejemplo, descubrí que mis
                  vecinos, una comunidad africana, practican rituales en su
                  patio durante las noches. Me siento a escuchar su música y
                  creo que bailan; es que sólo puedo ver sus sombras o siluetas
                  porque es muy oscuro. Luego por la mañana, veo troncos
                  clavados en la tierra y amarrados entre sí con una cinta roja.
                  Los rodea un mandala de piedras. Busco música africana en
                  Spotify y la escucho todo el día. Es como si a través de la
                  observación, yo hubiese hecho parte del ritual y de esa
                  comunidad, lo que me abrió a otro mundo, a otra dimensión. Veo
                  lo mismo en la{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B_QTZZXB4Fl/"
                  >
                    pieza de Caro Dalfó
                  </a>{" "}
                  para{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B-hyWvyhUKs/"
                  >
                    SOLIDARIDAD
                  </a>
                  . Ella dice: “es corto, simple y mundano (…) Mi vecino, al que
                  no conozco, práctica con su saxofón y me alegra el día. Un
                  pequeño momento de felicidad”. Tanto en el caso de Caro como
                  en el mío, encuentro gestos de solidaridad. Es una solidaridad
                  generada por una cohesión interna que viene de la observación
                  de lo que existe en este momento y con esas sensaciones
                  particulares. Ambos casos aportan un grado de fantasía hacia
                  el encantamiento. Pero también creo que es clave el gesto de
                  contemplación de parte de Caro o de parte mía, dentro de esa
                  solidaridad. Ahí para mí, todxs están siendo solidarixs; lxs
                  que observan o escuchan también. Sobre esto, quisiera que
                  definieran el concepto de solidaridad más preciso, con
                  relación a los trabajos que les han enviado. También en
                  relación con el momento que estamos viviendo. Para ustedes,
                  ¿qué es la solidaridad?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  La solidaridad es un concepto que va más allá de este momento
                  de emergencia sanitaria. Desde los inicios,{" "}
                  <i>Se habla español</i> ha tenido un espíritu de colaboración
                  y apoyo mutuo que ha sido esencial para la generación de
                  nuestros proyectos. La solidaridad es una manera de
                  relacionarse, entendiendo que somos una red y que si una parte
                  de la red se encuentra en una situación vulnerable, en
                  realidad todos somos vulnerables. Por el contrario, cuando nos
                  apoyamos, la red se fortalece y nos fortalecemos todos.
                </InterviewAnswer>
                <InterviewAnswer>
                  En este momento, la solidaridad es una manera de crear puentes
                  para conectarnos de distintas maneras y niveles. La iniciativa
                  de SOLIDARIDAD NO TIENE FRONTERAS, nace de un sentimiento de
                  empatía y afecto hacia el otro, de extender la mano en un
                  momento difícil y de distanciamiento para continuar
                  fortaleciendo una comunidad. Ahora, la solidaridad nos exige
                  más que un gesto, nos exige aportar y crear una plataforma
                  para aquellos que desean expresarse. Nuestra propuesta también
                  nació de una necesidad de amplificar mensajes de empatía
                  cuando el miedo y el pánico colectivo se extienden de manera
                  alarmante.
                </InterviewAnswer>
                <InterviewAnswer>
                  La poeta Arundhati Roy dijo recientemente que “históricamente,
                  las pandemias han forzado a los seres humanos a romper con el
                  pasado y a imaginar el mundo renovado. Esta pandemia no es
                  distinta. Es un portal, un acceso entre un mundo y el
                  siguiente.” La importancia de este proyecto para nosotras está
                  relacionado con la potencia de la creación de ese mundo
                  futuro.
                </InterviewAnswer>
                <Image src={LovingSuitsSrc} alt="Loving Suits" />
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  Este tiempo que estamos viviendo ahora con el COVID-19 es, en
                  definitiva, un tiempo en el que se nos obliga a observarnos
                  lxs unxs a lxs otrxs. Pero acá hablo de una observación real,
                  y no de la observación que busca auto referenciarse todo el
                  tiempo. Es decir que, mientras se observa y/o escucha, se
                  olvida de sí mismx para poder realmente ver al otrx, y es ahí
                  cuando se está presente. Esto se relaciona con la pieza "
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B-_Eb7jhwbi/"
                  >
                    LovingSUITS
                  </a>
                  " de Gina Goico, que habla del poder de estar presente en
                  comunidad, de nuestras narrativas y memorias de amor: “existe
                  en presencia sensorial, en la conexión generada al escuchar,
                  oler o tocar las piezas. Hoy mientras bordaba por primera vez
                  en 2 semanas entendí: Parte de mi arte es tejer comunidades.
                  Mi pasión es crear espacios de comunión para comunicación,
                  reflexión e integración física humana. Soy feliz escuchando a
                  otrxs. Soy feliz facilitando comunicación. Soy feliz cuando
                  sanamos en amor.” A esto también le encuentro relación con la
                  reflexión anterior y pregunto: Para ustedes, ¿Cuál es la
                  relación entre solidaridad y comunidad? Y en relación con la
                  comunicación, ¿es la comunicación un gesto de solidaridad o de
                  amor?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  “
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B-_Eb7jhwbi/"
                  >
                    LovingSUITS
                  </a>
                  ” es un gran ejemplo de solidaridad. La idea de los afectos y
                  el amor propio ha sido un tema recurrente en la obra de la
                  artista dominicana Gina Goico. Este proyecto, como ella lo
                  describe, tomó más tiempo del que esperaba. “Me ha tomado un
                  mes. Un mes hacer una pieza que usualmente pudiera hacer en un
                  día. Un mes en el cual me enferme, dí apoyo a mis estudiantes,
                  dí apoyo a mi comunidad cercana de profesores, di, pero a mí
                  entender, no me "dió" en mi arte. Porque dolía. "LovingSUITS"
                  habla del poder de estar presente en comunidad, de nuestras
                  narrativas y memorias de amor. LovingSUITS existe en presencia
                  sensorial, en la conexión generada al escuchar, oler o tocar
                  las piezas. Hoy mientras bordaba por primera vez en 2 semanas
                  entendí: Parte de mi arte es tejer comunidades. Mi pasión es
                  crear espacios de comunión para comunicación, reflexión e
                  integración física humana. Soy feliz escuchando a otrxs.” Este
                  proyecto también se conecta con el primer proyecto de Gina
                  también titulado{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.ginagoico.com/lovingsuits"
                  >
                    Loving SUITS
                  </a>
                  , donde ella lo entiende como un proyecto en desarrollo que se
                  compone de esculturas de poco peso y documentación multimedia
                  de las narraciones de mujeres dominicanas en torno a la
                  dinámica familiar, el amor y el amor propio. En el futuro,
                  LovingSUITS colaborará con investigadores y terapeutas
                  familiares para crear contenido epistémico y objetos que
                  puedan ayudar en la terapia.{" "}
                </InterviewAnswer>
                <InterviewAnswer>
                  Podemos hablar también de{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.the8thfloor.org/past-events/performance-as-repair"
                  >
                    Performance as Repair
                  </a>{" "}
                  (2018), un programa que organizamos en el The 8th Floor, una
                  galería que hace parte del Rubin Foundation en Nueva York.
                  Este evento exploró la idea más performática sobre reparación
                  y los rituales para acercarnos más a la sanación colectiva o
                  individual. Los artistas{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.ginagoico.com/"
                  >
                    Gina Goico
                  </a>{" "}
                  e{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://ivansikic.com/"
                  >
                    Iván Sikic
                  </a>{" "}
                  & Paul Cannon, en sus piezas, ambos investigan la relación
                  entre lenguaje y performance, como una forma de actuar ante
                  contratos sociales e históricos- no cumplidos- con el fin de
                  restaurar la agencia y fomentar la reparación.{" "}
                  <i>Performance as Repair</i> presentó un performance en vivo,
                  una proyección de vídeo y una charla con los artistas para
                  entablar una conversación sobre cómo el lenguaje y las
                  palabras tienen un rol performativo en nuestra sociedad, cómo
                  pueden combatir la imposición de poder y cómo juegan un rol
                  esencial en el activismo y el tejido social, la denuncia, la
                  inclusión, además de la creación de políticas públicas. El
                  evento abrió una discusión sobre el potencial del arte como
                  fuerza reparadora. Creo que el mayor gesto que podemos hacer
                  es contribuir al diálogo y ceder un espacio para que distintas
                  comunidades expresen su sentir sobre problemáticas que nos
                  afectan a todos. La sanación y reparación también tiene que
                  ver con procesos de escuchar y ponernos en el lugar del otro.
                  En ambos eventos, lo más lindo fue ver a personas que no
                  necesariamente están relacionados directamente al mundo del
                  arte sentirse identificados con las historias o relatos que se
                  presentaron.
                </InterviewAnswer>
                <Image
                  src={OrdenamientoSilvestreSrc}
                  alt="Ordenamiento Silvestre"
                />
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  El ejercicio de observar y escuchar, lo relaciono con el
                  silencio. Desde hace un mes y medio que entramos en pausa
                  (“New York State on PAUSE”), yo me sumergí en la meditación.
                  Ya practicaba yoga de hace años pero nunca había dedicado
                  tanto tiempo a sentarme en silencio. Esta vez, cambios físicos
                  y energéticos sucedieron que, sin llevarlos al misticismo,
                  funcionan como una nuevo espacio o disposición en mi cuerpo.
                  Desde este espacio, es de donde observo y escucho; yo lo
                  considero un espacio para la solidaridad. Esto lo relaciono
                  con las piezas{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B_m1hrPhanT/"
                  >
                    “Ordenamiento Silvestre” e “Ir y Retornar”
                  </a>{" "}
                  de Sarabel Santos Negrón. Según la autora, éste un ejercicio
                  de meditación a través de “un catálogo y un calendario de
                  hojas, con el cual guardo memoria del paso del tiempo, la
                  fragilidad de la vida y el cambio de un organismo cuando se
                  separa de su estado natural”. Santos Negrón lo describe como
                  un ritual socio-ambientalista y político-económico. En cuanto
                  a esto, me gustaría saber ¿cómo creen ustedes que este ritual
                  actúa de manera política o social? Y, ¿cómo se relaciona esto
                  con el concepto de
                  <i>solidaridad</i>?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  Reconocer el paso del tiempo en búsqueda de preservar la
                  memoria es un acto político y social, más aún cuando se
                  relaciona con la naturaleza. Sarabel Santos Negrón nos invita
                  a hacer una pausa y reconocer, en un acto de contemplación y
                  repetición, el valor de la memoria. La naturaleza nos permite
                  tener actos de recordación y de remembranza que nos ayudan a
                  evocar momentos y que activan muchas historias del pasado al
                  presente. Las obras “Ordenamiento Silvestre” e “Ir y Retornar”
                  dan cuenta de esto y completan las historias de este momento
                  de pausa que todo estamos viviendo.
                </InterviewAnswer>
                <InterviewAnswer>
                  El mensaje de solidaridad de Santos Negrón nos recuerda al
                  programa
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.the8thfloor.org/past-events-01/2019/11/15/screening-distancia-se-habla-espaol-in-conversation-with-ensayos"
                  >
                    DISTANCIA
                  </a>{" "}
                  (2019) que presentamos en colaboración con el colectivo
                  chileno <i>Ensayos</i>. Presentada por primera vez en Nueva
                  York, DISTANCIA es una webserie de etnoficción realizada por
                  Ensayos, que aborda problemas relacionados con la ecología
                  política en Tierra del Fuego, Chile. Después de la proyección,{" "}
                  <i>Se habla español</i> moderó una conversación con los
                  miembros de <i>Ensayos</i>, Carla Macchiavello, Camila
                  Marambio y Carolina Saquel. La conversación giró alrededor de
                  las prácticas bio-culturales éticas y los problemas de
                  representación del paisaje. Esta investigación colectiva se
                  centra en la extinción, la geografía humana y la salud
                  costera. Iniciada en el archipiélago de Tierra del Fuego,{" "}
                  <i>Ensayos</i> se centró primero en las cuestiones
                  ecopolíticas que afectan al archipiélago fueguino y a sus
                  habitantes - pasados y presentes, humanos y no humanos.
                </InterviewAnswer>
                <InterviewAnswer>
                  Ambos proyectos nos hablan del impacto sobre la naturaleza, de
                  las políticas medioambientales y de la desigualdad social y
                  económica. Este momento de pausa ha hecho aún más visible las
                  fuertes grietas de nuestra sociedad, la enorme inequidad
                  económica y social, la precariedad de la salud pública en
                  nuestro países y en la ciudad de Nueva York, y la clara crisis
                  del capitalismo neoliberal. Esta realidad que siempre ha
                  estado, pero que hoy se hace más evidente, nos ha llevado a
                  entablar una red de solidaridad.
                </InterviewAnswer>
                <Image src={AnticonquistaCafeSrc} alt="Anticonquistas café" />
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  Por otro lado, está el trabajo “
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B_Tii4vB2yI/"
                  >
                    Anticonquistas café”
                  </a>{" "}
                  de Lauren Reese, busca “desmantelar la concepción de que los
                  trabajadores agrícolas no son profesionales y son
                  prescindibles”. Según la autora, se busca “poner fin al ciclo
                  actual de apropiación de tierras por parte de las empresas y
                  regresarlas a las manos de los pequeños campesinos
                  trabajadores”. En este trabajo, lo político es evidente. La
                  solidaridad también. En cuanto a esto, les pregunto ¿cómo
                  funciona la solidaridad como agencia política?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  Por supuesto que la solidaridad es un acto político. La
                  solidaridad implica, para empezar, un modo de
                  auto-organización. Saber que podemos luchar colectivamente por
                  un fin común nos invita abiertamente a ejercer nuestra agencia
                  política. Además, la solidaridad nos ayuda a generar una
                  visión compartida, lo que nos hace caminar juntos hacia
                  nuestras metas y a superar los obstáculos que se nos
                  presentan.
                </InterviewAnswer>
                <InterviewAnswer>
                  El proyecto de Lauren en particular nos parece importante
                  porque nos hace pensar en cuestiones como la soberanía
                  alimentaria en la agricultura de nuestros países, la
                  autogestión y la colaboración en comunidad. Sus fotografías
                  recogen la sensibilidad en la cooperación, la fuerza de lo que
                  significa ser un agente de cambio.
                </InterviewAnswer>
                <InterviewQuestion interviewe="MCMS">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/watch/?v=1492537630924082"
                  >
                    La colaboración
                  </a>{" "}
                  entre María Camila Montalvo Senior y el proyecto SOLIDARIDAD
                  del colectivo Se habla español, empezó en{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://radiokingston.org/es/broadcast/la-voz-con-mariel-fiori/episodes/kingston-with-covid-19-day-36-and-the-project-solidaridad-de-se-habla-espanol?fbclid=IwAR15SwhAeno8_TN5JwNahzkNkLpm149NhZC4okbIA6iCTwotFwyhOin8GqE"
                  >
                    el programa La Voz con Mariel Fiori
                  </a>{" "}
                  en Radio Kingston al cual fueron invitadas. <i>La Voz</i> es
                  un programa radial en español que le sirve a una comunidad de
                  140,000 Latinx viviendo en el Valle de Hudson y los Catskill
                  Mountains. Yo encuentro muchas relaciones entre <i>La Voz</i>{" "}
                  y SHE; ambas sirven a la comunidad latina en NY, ambas están
                  creando comunidad. Tanto en <i>La Voz</i> como en SHE, el
                  idioma funciona como mecanismo para la integración cultural;{" "}
                  <i>La Voz</i> es el único programa radial en español acá en
                  Upstate NY y el colectivo de ustedes SHE, responde a la sigla{" "}
                  <i>“Se habla español”</i>. Por otro lado, Noelia resalta un
                  punto problemático del idioma español con respecto a su
                  contexto en España, que se diferencia de su contexto en los
                  Estados Unidos y en Latinoamérica. Me gustaría que
                  desarrollaran un poco el tema del idioma dentro de su
                  proyecto. ¿Es el idioma una herramienta política? ¿Es el
                  idioma un instrumento para la solidaridad?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  <i>Se habla español</i> nace en el 2017 por una necesidad de
                  visibilizar una comunidad no representada.. El idioma español
                  no solo es el segundo idioma más hablado en Estados Unidos,
                  sino también mundialmente. Según las estadísticas de 2019
                  México tendría el mayor número de hispanohablantes, seguido de
                  EEUU, Colombia y España, siendo EEUU el único de estos países
                  en el cual el español no es una lengua oficial.
                </InterviewAnswer>
                <InterviewAnswer>
                  A día de hoy muy pocas instituciones estadounidenses y más
                  concretamente Neoyorquinas, (por ser nuestro contexto común)
                  son bilingües. Se han producido grandes avances en los últimos
                  años, pero el idioma Español aún no ha llegado a todas las
                  instituciones sanitarias, culturales, o gubernamentales, y se
                  mantiene lo que Guadalupe Ruiz Fajardo, Profesora del
                  departamento de Culturas Latinoamericanas e Ibéricas en la
                  universidad de Columbia, y colaboradora en uno de nuestros
                  programas llevados a cabo en The 8th Floor mencionaba en una
                  entrevista a{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.elmundo.es/andalucia/2018/09/02/5b8a7425e5fdeaa4438b45cb.html"
                  >
                    El Mundo
                  </a>{" "}
                  a finales de 2018: "Aquí el inglés es la lengua del poder. En
                  EE UU el español es la lengua de los trabajadores"
                </InterviewAnswer>
                <InterviewAnswer>
                  Y es que efectivamente, el idioma es y ha sido utilizado
                  históricamente como herramienta política, pero no siempre
                  desde la comunidad y desde la perspectiva del tejido social,
                  sino de los intereses políticos en situación de poder.
                  Nosotras trabajamos desde el contexto artístico, y
                  consideramos muy relevante trabajar con este enfoque y de esta
                  manera, porque no únicamente utilizamos el lenguaje como
                  herramienta de comunicación, sino que nos interesa interesa
                  expandir sus límites explorando la repercusión e influencia
                  que en él tienen la migración, la identidad, los derechos
                  humanos y la memoria. La misión de <i>Se habla español</i> es
                  desarrollar, a través del esfuerzo colectivo y perspectivas
                  diversas, proyectos e investigaciones que respondan a la
                  realidad contemporánea mediante la creación de plataformas
                  para la reflexión y la producción artística.
                </InterviewAnswer>
                <InterviewAnswer>
                  De la misma manera, las siglas SHE, de <i>se habla español</i>
                  , hacen referencia a la voz de ellas (en inglés), hecho que
                  completa realmente el lugar desde el que siempre nos hemos
                  posicionado al hablar y que ciertamente coincide con el que
                  Mariel Fiori utiliza en La Voz, no solo por la perspectiva de
                  hispanohablantes, mujeres o migrantes, sino también por el
                  hecho de difundir y amplificar estas voces a una comunidad que
                  se expande más allá de nuestros círculos.
                </InterviewAnswer>
                <InterviewAnswer>
                  En el contexto de España, el idioma español convive
                  regionalmente con el euskera, el catalán y el gallego, pero
                  tras su prohibición durante la dictadura de Franco, su uso se
                  ha se ha politizado tanto que en lugares en los que conviven
                  dos lenguas, el que una persona decida utilizar una u otra en
                  determinados momentos viene unido a relaciones políticas. En
                  nuestro caso, utilizamos el español fuera de los contextos
                  nacionales de España, México, Colombia o incluso el complejo
                  caso de Puerto Rico y nos centramos específicamente en fuerza
                  de la unión y la amplificación de esa voz coral que engloba
                  las diferentes variantes, y culturas.
                </InterviewAnswer>
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  Me contaron que mientras ustedes cuatro se conocían dentro del{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.macp.sva.edu/"
                  >
                    programa de curaduría en SVA
                  </a>
                  , hicieron un diccionario en español (o castellano), de las
                  distintas variaciones de palabras por origen con un mismo
                  significado. ¿Cuál es la variación de palabras más sugestiva
                  en su diccionario?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  El diccionario surgió de una manera muy espontánea durante
                  nuestras conversaciones cotidianas. Comenzamos a sentir que
                  aunque todas hablamos español, hablamos españoles muy
                  distintos. Una de las anécdotas que más recordamos, es cuando
                  quedamos para vernos a comer. Andrea, Noelia y Natalia se
                  planearon para comer hacia la 1 pm, mientras que María
                  Alejandra pensaba que iban a verse hacia las 7 pm. Luego de
                  aclarar el “malentendido”, caímos en cuenta que en México,
                  España y Puerto Rico lo que se acostumbra decir es desayuno,
                  comida y cena mientras que en Colombia desayuno, almuerzo y
                  comida. Recordamos también otros “malentendidos” con palabras
                  como ordenador, computadora y computador, o ,esfero, pluma y
                  bolígrafo. A raíz de esto, decidimos llevar un registro de las
                  distintas palabras que cada una decía para referirse a una
                  misma cosa y así se creó el diccionario.
                </InterviewAnswer>
                <InterviewAnswer>
                  Este ejercicio junto a nuestro interés por la situación
                  migratoria en EE.UU., nos llevó a estructurar el programa{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.the8thfloor.org/past-events/breaking-and-unveiling-the-immigration-glossary-of-severalty"
                  >
                    Breaking and Unveiling the Immigration Glossary of Severalty
                  </a>{" "}
                  (2018), un taller participativo que presentamos en The 8th
                  Floor por invitación de Sara Reisman, la directora artística y
                  ejecutiva de la Shelley & Donald Rubin Foundation. El programa{" "}
                  <i>Severalty</i> [propiedad individual], investigó la
                  naturaleza de la identidad de los inmigrantes y el lenguaje
                  que rodea la inmigración en el contexto cultural y mediático
                  de los EE.UU. al proponer un glosario de términos que
                  constantemente suponen exclusión y refuerza las diferencias
                  entre personas. Examinamos términos como: alien, extranjero,
                  frontera, fuga de cerebros, Dreamer, inmigrante,
                  hispanoamericano, nacional, refugiado y santuario, entre
                  otros. Invitamos a expertos de diferentes disciplinas del
                  arte, la educación, el activismo y las leyes, quienes junto
                  con los asistentes, participaron en una conversación
                  transversal para deconstruir estos concepto y reconsiderar el
                  uso y los efectos de la terminología de inmigración en este
                  momento político.
                </InterviewAnswer>
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  Quisiera que me contaran de qué se trata la iniciativa{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://mujeresmirandomujeres.com/colectivo-she-se-habla-en-espanol-female-migrations/"
                  >
                    Female Migrations
                  </a>{" "}
                  y si le encuentran alguna relación con su proyecto
                  SOLIDARIDAD. ¿Cómo relacionan las políticas migratorias con
                  los mensajes de solidaridad? ¿Se correlacionan estas dos
                  vertientes de su trabajo?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  En{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://mujeresmirandomujeres.com/colectivo-she-se-habla-en-espanol-female-migrations/"
                  >
                    Female Migrations
                  </a>{" "}
                  (2019) presentamos a cuatro artistas latinoamericanas que
                  abordan su práctica artística desde la perspectiva femenina de
                  la migración, propuesta que además de la reivindicación
                  social, ya tenía mucho que ver con los ideales de empatía y
                  solidaridad que se desarrollan en el proyecto actual. Female
                  Migrations llama la atención sobre el papel y la visión
                  históricamente desestimada de la mujer en la actual y grave
                  realidad migratoria, a través de las experiencias personales y
                  las prácticas artísticas de las artistas invitadas, Karina
                  Aguilera Skvirsky, Simone Couto, Amanda Gutiérrez y Esperanza
                  Mayobre.
                </InterviewAnswer>
                <InterviewAnswer>
                  La agencia migratoria y la solidaridad son vertientes que
                  efectivamente llevamos desarrollando en nuestro trabajo desde
                  que formamos el colectivo, y que se ejemplifican de una forma
                  muy concreta y visual en cada uno de los eventos que formaron
                  la serie de Female Migrations.
                </InterviewAnswer>
                <InterviewAnswer>
                  En el primer evento, Karina Aguilera Skvirsky rendía ya un
                  homenaje a la historia de migración de su bisabuela
                  afro-ecuatoriana a través de su obra
                  <i>El peligroso viaje de María Rosa Palacios</i> y planteaba
                  el altruismo desde la acción participativa vinculando
                  narrativas populares con discursos actuales sobre fronteras,
                  migración y nacionalidad.
                </InterviewAnswer>
                <InterviewAnswer>
                  Amanda Gutiérrez, en un segundo evento proponía un documental
                  performativo en realidad virtual sobre unas caminatas sonoras
                  con la obra <i>Flâneuse> La caminanta</i>. Este documental era
                  grabado con participantes identificados como mujeres donde
                  narraban con su voz, los peligros y sensaciones experimentadas
                  desde sus cuerpos en el que para muchos es un peligroso
                  espacio público.
                </InterviewAnswer>
                <InterviewAnswer>
                  <i>2 x 2, pulgadas</i> de Simone Couto, inventó las historias
                  de aquellas mujeres inmigrantes cuyas imágenes no existían o
                  estaban desaparecidas en las fichas de membresía del archivo
                  de la Sociedad Benevolente Española, La Nacional de Nueva York
                  alrededor de los años 1920. Simone contactó a 22 mujeres
                  artistas para que escribieran una carta personal a aquellas
                  mujeres sin rostro para así reconstruir sus identidades entre
                  la realidad y la ficción. Y es que este gesto de solidaridad
                  de Simone Couto guarda un gran paralelismo con la dolorosa
                  situación actual de la crisis del Covid-19 en la ciudad de
                  Nueva York, con una gran cantidad de inmigrantes fallecidos,
                  que no han sido reclamados y que quedarán en el anonimato.
                </InterviewAnswer>
                <InterviewAnswer>
                  Pero el caso de Esperanza Mayobre con su obra{" "}
                  <i>
                    “Domingo familiar (no es domingo, pero ¿puedes jugar al
                    dominó conmigo?),”
                  </i>{" "}
                  también ha sido un pensamiento recurrente en estos días de
                  incertidumbre y confinamiento. Cuando planteamos este evento,
                  en agosto de 2019, Esperanza Mayobre abordaba la crisis
                  migratoria de Venezuela abriendo un espacio para la unión,
                  buscando el más mínimo halo de confort y alivio en su gente
                  cercana, estableciendo vínculos emocionales y de apoyo entre
                  comunidades. Estos días pensamos en su obra y la acción nos
                  resulta aún más dolorosa y pertinente. Ojalá los abrazos y las
                  reuniones con nuestros seres queridos pudieran devolvernos la
                  tan ansiada tranquilidad. Esta crisis, ahora internacional, no
                  solo ataca la sanidad, sino que afecta a las formas en las que
                  nuestra comunidad mostraba afecto y relación con los otros.
                  Así que de cierta manera a través de estos proyectos, nos
                  replanteemos o posicionarnos de manera solidaria con los
                  demás.
                </InterviewAnswer>
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  El colectivo <i>Se habla español está</i> conformado por
                  cuatro mujeres y se abrevia como <i>SHE</i> (ella). También
                  veo un énfasis en el rol de la mujer dentro de su trabajo,
                  sobre todo con el proyecto Female Migrations. Por otro lado,
                  ahora la buena prensa invade con titulares que sugieren a los
                  países liderados por mujeres, como los lugares en los que
                  mejor se ha administrado la crisis del Covid-19. Quisiera que
                  me contaran sobre su rol como mujeres dentro del contexto
                  artístico contemporáneo global y la relación que encuentran
                  con la realidad que estamos asumiendo ahora. ¿Qué implica ser
                  mujeres líderes dentro del contexto del arte global actual?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  Somos uno de los géneros más atropellados y menos remunerados
                  en el sector cultural, primero porque somos mujeres, segundo
                  porque hablamos español y algunas somos latinas. No es secreto
                  que el mundo del arte opera desde un lente y mirada de hombre
                  blanco, heterosexual y homogenizador. Es bastante frustrante
                  ver cómo la narrativa que se construye alrededor de este
                  perfil tiene mucha influencia en, por ejemplo, la desigualdad
                  de género que existe en colecciones e instituciones en todo el
                  mundo.
                </InterviewAnswer>
                <InterviewAnswer>
                  Ser mujer en este contexto implica entender las posiciones y
                  dinámicas de poder a nivel institucional, sin ser intimidadas
                  por esto. Nosotras reconocemos que hay mujeres que están
                  liderando instituciones y proyectos fenomenales que nos han
                  inspirado mucho a lo largo de nuestra práctica. Algunos
                  ejemplos de mujeres que nos han influenciado de manera directa
                  e indirecta son Suzy del Valle, Macarena Gómez Barris, Sofía
                  Hernández Chong-Cuy, Hitomi Iwasaki, Marta Moreno Vega,
                  Deborah Cullen, Aimé Lukin Iglesias, Carla Acevedo Yates,
                  Marcela Guerrero, Arlene Dávila, Sara Demeuse, Chus Martínez,
                  María Belén Sáenz, Nana Adusei-Poku, entre muchas otras.
                  También para nosotras es muy importante Sara Reisman,
                  directora artística del Shelley & Donald Rubin Foundation,
                  quien nos dio la primera oportunidad curatorial como colectivo
                  en The 8th Floor Gallery. Creemos que estas mujeres han
                  transformado el panorama artístico y la narrativa desde sus
                  capacidades y su sensibilidad como profesionales de la
                  cultura, incidiendo en la conversación en torno al arte
                  contemporáneo.
                </InterviewAnswer>
                <InterviewAnswer>
                  Ser mujeres en este contexto implica una responsabilidad con
                  los artistas con los que trabajamos, con nuestros colegas y
                  futuras generaciones. Más que avocarnos únicamente a
                  cuestiones feministas, tenemos muy presente la importancia de
                  la interseccionalidad en el colectivo. Entre los temas que nos
                  interesan está el intercambio cultural, que deriva de nuestra
                  relación como colectivo pues venimos de distintos países y
                  contextos diversos, y por ende, es fundamental entender
                  nuestras culturas. Esto también es un acto de solidaridad.
                </InterviewAnswer>
                <Image
                  src={ThisIsWeirdWithoutYouSrc}
                  alt="Anticonquistas café"
                />
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  Es un hecho que el Covid-19 no se trata de una enfermedad en
                  el cuerpo en sí, y que más bien funciona como agente
                  biopolítico que impregna esferas raciales, de clases sociales,
                  de nación, salud mental, etc. Esto lo podemos ver, por
                  ejemplo, en el hecho de que la comunidad latina es la más
                  afectada por el Covid-19 en NY. Luego le sigue la comunidad
                  afroamericana. A manera poética, este hecho también lo vemos
                  reflejado en las obras que han reunido para SOLIDARIDAD;
                  ninguna pieza habla de la enfermedad en sí. El trabajo “
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/p/B_DlaGeBzuM/"
                  >
                    THIS IS WEIRD WITHOUT YOU
                  </a>
                  ” de Juan Carlos Rodríguez, Marcela Pardo y Felipe García, se
                  define como una energía poética que reconoce el hecho de que
                  todxs estamos interconectadxs y que todxs necesitamos el apoyo
                  del otrx ahora más que nunca. Este trabajo visibiliza, de
                  alguna manera, una red de apoyo que existe, y a la vez invita
                  a re-imaginar un futuro en comunidad. Evidentemente el
                  concepto de comunidad, que siempre ha estado vigente en
                  Latinoamerica, ahora ocupa un lugar central dentro de las
                  sociedades a nivel global con el Covid-19. Con relación al
                  concepto de comunidad y de solidaridad, ¿cómo reimaginan
                  ustedes el futuro?
                </InterviewQuestion>
                <InterviewAnswer homepage={true} subject="SHE">
                  El Covid-19 efectivamente ha enfatizado problemas ya
                  existentes en la sociedad, sin embargo no podemos olvidar el
                  impacto que ha tenido en las vidas de todas las personas que
                  lo han vivido o que han sufrido pérdidas de familiares y
                  amigos. Con esto queremos decir que todos estamos sujetos a
                  sus consecuencias y al impacto de la pandemia, desde
                  económica, social y emocionalmente.
                </InterviewAnswer>
                <InterviewAnswer>
                  Todos los días la prensa, los gobiernos y otras instituciones
                  nos presentan información que nos despoja de un futuro al
                  plantear panoramas inciertos. Muchas estructuras que
                  conformaban la normalidad y la unidad dejaron de tener el
                  sentido práctico que tenían, lo que nos hace cuestionarnos qué
                  es la comunidad sin los abrazos, sin los bailes, sin los
                  roces, sin el cariño. Pero lo cierto es que el ser humano ha
                  encontrado muchas maneras de asociarse y agruparse a lo largo
                  de la historia. Ahora más que nunca es momento de des-aprender
                  viejas estructuras, de reflexionar y ser creativos para crear
                  nuevas formas de construir comunidad.
                </InterviewAnswer>
                <InterviewAnswer>
                  Un aspecto que nos preocupa y por otro lado nos motiva en ese
                  sentido, es concentrarnos en proyectos comunitarios y
                  colaborativos que creen sistemas de enseñanza que incluyan la
                  imaginación como un punto de partida y eje radical para la
                  proyección del futuro que queremos. Es una realidad que la
                  incertidumbre predomina nuestra visión del futuro y aunque no
                  tenemos una respuesta o solución definida, consideramos que
                  pensar desde la solidaridad nos ayuda a posicionarnos ante la
                  posibilidad de un futuro menos precario y más equitativo.
                  Además, nuestro propósito es simplemente crear una plataforma
                  para que artistas y otros pensadores contribuyan a la
                  formación de múltiples visiones del futuro.
                </InterviewAnswer>
                <InterviewAnswer>
                  El proyecto de Solidaridad reafirma el trabajo que ya veníamos
                  desarrollando como colectivo. Desde sus inicios, los proyectos
                  de SHE han insistido sobre la necesidad de mostrar artistas
                  con prácticas sociales y narrativas poco representadas. SHE ha
                  facilitado una red de apoyo en la cual reunimos y conectamos
                  distintas personas y disciplinas. Creemos que más que nunca
                  las comunidades se están tejiendo desde distintos niveles,
                  desde otras formas que no implican el distanciamiento social
                  sino únicamente físico, donde las redes sociales o espacios
                  virtuales no son más que nuevas herramientas de comunicación
                  del afecto.
                </InterviewAnswer>
                <InterviewQuestion homepage={true} interviewer="MCMS">
                  Recuerdo las palabras de Andrea, sobre el rol del arte durante
                  nuestra conversación en <i>La Voz</i>: “El arte es para todxs,
                  toca nuestras partes más profundas como seres humanos, y es a
                  través de esas partes más profundas que nos conectamos lxs
                  unxs con los otrxs. El arte en este momento, y realmente
                  siempre, es algo a lo que nos tenemos que acercar para
                  unirnos”. Y justo hoy que terminaba de redactar esta
                  conversación, me sumé a la Ceremonia del Día de la Cruz del
                  Sur dirigida por Carmen Vicente, una mujer medicina de la
                  Provincia de Loja, Ecuador. Conectada con los Andes
                  Suramericanos en vivo y por Zoom, pensaba en que sería bonito
                  dejar sus palabras como una forma de unirlas con las de
                  Andrea, y de re-imaginar el futuro a través del arte y de las
                  comunidades Indígenas y campesinas en Latinoamérica:
                </InterviewQuestion>
                <InterviewQuestion>
                  El principio del valor humano es vivir en comunidad. En los
                  tiempos que estamos viviendo hoy, hay que preguntarnos ¿cuál
                  es nuestra perspectiva de lo que se nos ha dicho que es una
                  comunidad? En los Pueblos Andinos, comunidad significa
                  armonía. La armonía como economía de vida. (…) Todos nos
                  estamos moviendo en el mismo tiempo. Todos estamos
                  relacionados unos con los otros siendo diferentes. Pero cada
                  entendimiento de la armonía de cada lugar, hará el equilibrio
                  de la vida para todos los espacios. (…) Al traer el maíz al
                  altar, estoy hablando de la necesidad de comunidad pequeña y
                  grande para un propósito en el tiempo. (…) Cuando dimos “arte”
                  estamos hablando de pueblos libres para crear, de pueblos
                  libres para generar nuevas formas. Pero esta libertad de
                  creación no ha sido en el pasado y en el presente no será
                  posible, si no se hace a través de la colaboración comunitaria
                  en el espacio donde vivimos. (…) Los Pueblos de los Andes de
                  Suramérica somos pueblos con una dirección directa con la
                  tierra. Cuando digo directa, es que aún está la posibilidad de
                  que haya pequeñas comunidades campesinas e indígenas que son
                  las que siembran la tierra. (…) Hay que cuidar a aquellos que
                  se relacionan con una comunidad, con la semilla y con la
                  tierra (…) Solo esa relación y la colaboración de los que
                  estamos a distancia, hará que tengamos una vida con arte de
                  vivir. (…) ¿Cómo vamos a integrar la experiencia de lo que
                  hemos vivido en este tiempo que llamamos “cuarentena”?
                  Caminando hacia montañas donde el espíritu se eleva. Y hasta
                  en las tierras más planas hay una montaña de poder. De qué
                  manera vamos a volver a caminar caminos antiguos para el poder
                  del presente? Cuando los artistas sueñan diseños o vuelven a
                  renovar diseños que ya conocemos, eso se llama visión. Cuando
                  hemos estado enfermos y nos sanamos, la salud de volvernos a
                  parar es una visión. Esa visión no es mi libertad individual
                  solita y ya. Ninguna visión se realiza con alguien solito. La
                  visión de cada soñador y de cada invocador es un bien de la
                  comunidad. Entonces ahora estamos en un trabajo para la salud.
                </InterviewQuestion>
                <InterviewQuestion>
                  Carmen Vicente, Ecuador, Mayo 3 de 2020.
                </InterviewQuestion>
              </OnChar>
            </Pace>
          </WindupChildren>
        </div>
      </div>
    </>
  )
}

export default MariaCamilaMontalvoSenior
