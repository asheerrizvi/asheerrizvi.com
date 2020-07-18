import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h2 className="mt-8 text-3xl text-gray-800">About</h2>
      <p className="mt-6 text-lg lg:text-xl text-gray-700">
        Hi, my name is Asheer Rizvi. I am a Web Developer who takes a keen
        interest in JavaScript and any JavaScript based stack out there. If I am
        being honest I wasn't that interested in JavaScript until late last
        year, I thought of it as an "easy going" language, something which
        wasn't powerful enough in itself but needed to be "extended" to be of
        any significant utility. I learned frameworks first instead of
        understanding vanialla JavaScript to a decent extent.
      </p>
      <p className="mt-6 text-lg lg:text-xl text-gray-700">
        The way I approach coding has changed significantly this year, these
        days I try to understand things which are the workhorses behind the
        abstractions before moving onto those abstractions.
      </p>
      <p className="mt-6 text-lg lg:text-xl text-gray-700">
        This website is to act as a source of reference and reflection.
        Something which will help me gauge how much I have improved as I code
        along.
      </p>
      <h3 className="mt-8 text-2xl text-gray-800">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3">
        <div>
          <h4 className="mt-6 text-xl text-gray-800">Front-end</h4>
          <div className="mt-1">
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              JavaScript
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              React
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              Angular
            </span>
          </div>
        </div>
        <div>
          <h4 className="mt-6 text-xl text-gray-800">Back-end</h4>
          <div className="mt-1">
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              REST
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              GraphQL
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              NodeJS
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              ExpressJS
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              MongoDB
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              MySQL
            </span>
          </div>
        </div>
        <div>
          <h4 className="mt-6 text-xl text-gray-800">Frameworks & Libraries</h4>
          <div className="mt-1">
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              Gatsby
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              Ionic
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              NextJS
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              TailwindCSS
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              Emotion
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              ClarityUI
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              Styled Components
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              Bulma
            </span>
            <span className="inline-block bg-gray-200 rounded mt-3 mr-3 px-3 py-1 text-md font-medium text-gray-700">
              Bootstrap
            </span>
          </div>
        </div>
      </div>
      <h3 className="mt-8 text-2xl text-gray-800">Timeline</h3>
      <ul className="mt-6 list-inside list-disc text-lg">
        <li>
          <span className="font-semibold">December, 1993: </span>Born on a cold
          wintry night, December is probably my favorite month.
        </li>
      </ul>
    </Layout>
  )
}

export default About
