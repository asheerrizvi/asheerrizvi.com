import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./about.module.css"

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
        understanding vanialla JavaScript to a decent extent.
      </p>
      <p>
        The way I approach coding has changed significantly this year, these
        days I try to understand things which are the workhorses behind the
        abstractions before moving onto those abstractions.
      </p>
      <p>
        This website is to act as a source of reference and reflection.
        Something which will help me gauge how much I have improved as I code
        along.
      </p>
      <h3>Timeline</h3>
      <ul>
        <li>
          <span className="font-semibold">2018 - Present: </span>Currently
          working as a Network Engineer for HCL Technologies.
        </li>
        <li>
          <span className="font-semibold">2017: </span>Started working as a
          Mainframe Engineer at Wipro Technologies.
        </li>
        <li>
          <span className="font-semibold">2017: </span>Completed College. Did
          not learn much, wasn't how I expected it to go.
        </li>
        <li>
          <span className="font-semibold">2013: </span>Started College.
        </li>
        <li>
          <span className="font-semibold">2012: </span>Completed Senior
          Secondary School.
        </li>
        <li>
          <span className="font-semibold">2010: </span>Installed my first
          homebrew on the PSP.
        </li>
        <li>
          <span className="font-semibold">2010: </span>Completed High School,
          bought myself a Sony PSP.
        </li>
        <li>
          <span className="font-semibold">2001 - 2009: </span>Typical school
          life. School to home, home to school.
        </li>
        <li>
          <span className="font-semibold">1995 - 1998: </span>Mostly played
          Contra and Super Mario Bros.
        </li>
        <li>
          <span className="font-semibold">1993: </span>Born on a cold December
          night.
        </li>
      </ul>
      <h3>Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
        <div className="my-3 lg:my-0">
          <p className={styles.category}>Front-end</p>
          <span className={styles.skill}>JavaScript</span>
          <span className={styles.skill}>React</span>
          <span className={styles.skill}>Angular</span>
        </div>
        <div className="my-3 lg:my-0">
          <p className={styles.category}>Back-end</p>
          <span className={styles.skill}>REST</span>
          <span className={styles.skill}>GraphQL</span>
          <span className={styles.skill}>Node JS</span>
          <span className={styles.skill}>Express JS</span>
          <span className={styles.skill}>Mongo DB</span>
          <span className={styles.skill}>MySQL</span>
        </div>
        <div className="my-3 lg:my-0">
          <p className={styles.category}>Frameworks & Libraries</p>
          <span className={styles.skill}>Gatsby</span>
          <span className={styles.skill}>Ionic</span>
          <span className={styles.skill}>Next JS</span>
          <span className={styles.skill}>TailwindCSS</span>
          <span className={styles.skill}>Emotion</span>
          <span className={styles.skill}>Clarity UI</span>
          <span className={styles.skill}>Styled Components</span>
          <span className={styles.skill}>Bulma</span>
          <span className={styles.skill}>Bootstrap</span>
        </div>
      </div>
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
