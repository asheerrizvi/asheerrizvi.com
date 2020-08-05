import React from "react"
import { Link } from "gatsby"

import gatsby from "../../content/assets/gatsby-logo.svg"
import netlify from "../../content/assets/netlify-logo.svg"
import github from "../../content/assets/github-logo.svg"
import twitter from "../../content/assets/twitter-logo.svg"

const Footer = () => {
  return (
    <footer className="mb-16">
      <nav className="flex justify-center">
        <Link
          to="/"
          className="text-base hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600"
        >
          Home
        </Link>
        <span className="px-4">•</span>
        <Link
          to="/blog"
          className="text-base hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600"
        >
          Blog
        </Link>
        <span className="px-4">•</span>
        <Link
          to="/about"
          className="text-base hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600"
        >
          About
        </Link>
      </nav>
      <nav className="flex mt-8 justify-center">
        <a
          href="https://www.gatsbyjs.org/"
          title="Built with Gatsby"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-full h-auto mx-auto md:mx-6"
        >
          <img src={gatsby} className="h-8 w-8" alt="Gatsby" />
        </a>
        <a
          href="https://www.netlify.com/"
          title="Hosted on Netlify"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-full h-auto mx-auto md:mx-6"
        >
          <img src={netlify} className="h-8 w-8" alt="Netlify" />
        </a>
        <a
          href="https://www.github.com/asheerrizvi"
          title="Asheer Rizvi on Github"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-full h-auto mx-auto md:mx-6"
        >
          <img src={github} className="h-8 w-8" alt="Github" />
        </a>
        <a
          href="https://www.twitter.com/rizvi_asheer"
          title="Asheer Rizvi on Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-full h-auto mx-auto md:mx-6"
        >
          <img src={twitter} className="h-8 w-8" alt="Twitter" />
        </a>
      </nav>
    </footer>
  )
}

export default Footer
