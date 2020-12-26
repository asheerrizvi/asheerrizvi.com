import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag"
import Timeline from "../components/timeline"

import skills from "../data/skills"
import events from "../data/events"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h2>About</h2>
      <p>
        Hi, my name is Asheer Rizvi. I am a Web Developer who takes a keen
        interest in JavaScript. If I am being honest, I wasn't that interested
        in JavaScript until late 2019. I thought of JS as an "easy going"
        language, a language which wasn't powerful enough in itself and needed
        to be "extended" by frameworks and tooling to be of any significant use.
        I WAS QUITE WRONG. I learned frameworks first instead of understanding
        JavaScript to a decent extent and built abstractions upon abstractions
        in my mind. Personally, this was an abysmal approach.
      </p>
      <p>
        This website is an attempt to be a source of reference and reflection.
        Something which will help me gauge my progress as I code
        along. A timecapsule for me to come and have a look at, diss myself
        and hopefully be a bit happy with my growth as a developer.
      </p>
      <h3>A Brief History of Time</h3>
      <Timeline data={events} />
      <h3>Skills</h3>
      <Tag data={skills} />
      <h3>Interests</h3>
      <ul>
        <li>Books (high fantasy, historical fiction and non fiction)</li>
        <li>Cinema (drama and slow burns)</li>
        <li>CS GO & Video Games (CS is the greatest game of all time)</li>
        <li>Mechanical Keyboards (RAMA Works is my favorite company)</li>
        <li>MotoGP (Rossi is the <span role="img" aria-label="Goat">🐐</span>, Marquez is a once in a generation racer)</li>
        <li>PC Builds (liquid cooling over air cooling)</li>
        <li>Travelling (non-touristy over touristy)</li>
        <li>Photography? (not sure, doing a course though)</li>
      </ul>
    </Layout>
  )
}

export default About
