import React from "react"

const Footer = () => {
  return (
    <footer className="flex justify-center flex-wrap md:justify-between md:flex-no-wrap mb-8 pt-4 border-t border-gray-400">
      <div className="text-gray-600">
        Built with{" "}
        <a
          href="https://www.gatsbyjs.org"
          title="Gatsby's official website"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Gatsby
        </a>
        ,{" "}
        <a
          href="https://www.reactjs.org"
          title="React's official website"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          React
        </a>{" "}
        and{" "}
        <a
          href="https://www.netlify.com"
          title="Netlify's official website"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Netlify
        </a>
      </div>
      <div className="text-gray-600">
        Open sourced on{" "}
        <a
          href="https://www.github.com/asheerrizvi/asheerrizvi.com"
          title="Website repository on Github"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Github
        </a>
      </div>
    </footer>
  )
}

export default Footer
