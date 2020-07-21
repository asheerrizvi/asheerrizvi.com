import React from "react"
import { Link } from "gatsby"

import gatsby from "../../content/assets/gatsby-logo.svg"
import netlify from "../../content/assets/netlify-logo.svg"
import github from "../../content/assets/github-logo.svg"
import twitter from "../../content/assets/twitter-logo.svg"

const Footer = () => {
  return (
    <footer>
      <nav className="flex mt-16 justify-center md:justify-start md:-ml-8">
        <Link
          to="/"
          className="lg:hover:bg-indigo-100 text-xl text-purple-600 px-4 py-2 md:px-8 md:py-4 mx-auto md:mx-0 focus:outline-none rounded-md"
        >
          Home
        </Link>
        <Link
          to="/blog"
          className="lg:hover:bg-indigo-100 text-xl text-purple-600 px-4 py-2 md:px-8 md:py-4 mx-auto md:mx-0 focus:outline-none rounded-md"
        >
          Blog
        </Link>
        <Link
          to="/about"
          className="lg:hover:bg-indigo-100 text-xl text-purple-600 px-4 py-2 md:px-8 md:py-4 mx-auto md:mx-0 focus:outline-none rounded-md"
        >
          About
        </Link>
      </nav>
      <nav className="flex mt-8 justify-center md:justify-start md:-ml-6">
        <a
          href="https://www.gatsbyjs.org/"
          title="Built with Gatsby"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-full h-auto mx-3 md:mx-6 mx-auto md:mx-0"
        >
          <img src={gatsby} className="h-8 w-8" alt="Gatsby" />
        </a>
        <a
          href="https://www.netlify.com/"
          title="Hosted on Netlify"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-full h-auto mx-3 md:mx-6 mx-auto md:mx-0"
        >
          <img src={netlify} className="h-8 w-8" alt="Netlify" />
        </a>
        <a
          href="https://www.github.com/asheerrizvi"
          title="Asheer Rizvi on Github"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-full h-auto mx-3 md:mx-6 mx-auto md:mx-0"
        >
          <img src={github} className="h-8 w-8" alt="Github" />
        </a>
        <a
          href="https://www.twitter.com/rizvi_asheer"
          title="Asheer Rizvi on Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-full h-auto mx-3 md:mx-6 mx-auto md:mx-0"
        >
          <img src={twitter} className="h-8 w-8" alt="Twitter" />
        </a>
      </nav>
    </footer>
  )
}

export default Footer
