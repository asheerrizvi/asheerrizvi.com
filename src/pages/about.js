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
        in JavaScript until late last year. I thought of JS as an "easy going"
        language, a language which wasn't powerful enough in itself and needed
        to be "extended" by frameworks and tooling to be of any significant use.
        I WAS QUITE WRONG. I learned frameworks first instead of understanding
        JavaScript to a decent extent and built abstractions upon abstractions
        in my mind. Personally, this was an abysmal approach.
      </p>
      <p>
        The way I approach coding has changed significantly this year, these
        days I try to understand things which are the workhorses behind the much
        more abstract features of web development that we see today.
      </p>
      <p>
        I want this website to be a source of reference and reflection.
        Something which will help me gauge how much I have improved as I code
        along. This is a timecapsule for me to come back and review, diss myself
        and hopefully be quite happy with how I have progressed.
      </p>
      <h3>A Brief History of Time</h3>
      <Timeline data={events} />
      <h3>Skills</h3>
      <Tag data={skills} />
      <h3>Interests</h3>
      <ul>
        <li>Books</li>
        <li>Cinema</li>
        <li>CS GO & Video Games</li>
        <li>Mechanical Keyboards</li>
        <li>MotoGP</li>
        <li>PC Builds</li>
        <li>Travelling</li>
      </ul>
    </Layout>
  )
}

export default About
