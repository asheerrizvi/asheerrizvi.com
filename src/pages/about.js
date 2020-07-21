import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills"
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
        interest in JavaScript and any JavaScript based stack out there. If I am
        being honest I wasn't that interested in JavaScript until late last
        year, I thought of it as an "easy going" language, something which
        wasn't powerful enough in itself but needed to be "extended" to be of
        any significant utility. I learned frameworks first instead of
        understanding vanialla JavaScript to a decent extent. And boy was I
        wrong.
      </p>
      <p>
        The way I approach coding has changed significantly this year, these
        days I try to understand things which are the workhorses behind the
        abstractions before moving onto those abstractions.
      </p>
      <p>
        I want this website to be a source of reference and reflection.
        Something which will help me gauge how much I have improved as I code
        along.
      </p>
      <h3>Timeline</h3>
      <Timeline data={events} />
      <h3>Skills</h3>
      <Skills data={skills} />
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
