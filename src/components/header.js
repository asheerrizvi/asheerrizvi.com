import React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
  title = title
    .split(" ")
    .map((el, index) =>
      index === 1 ? el.replace(/^\w/, c => c.toUpperCase()) : el.toLowerCase()
    )
    .join("")
  return (
    <header className="mt-4 md:mt-8 mb-20">
      <nav className="flex flex-col">
        <div className="mb-4">
          <Link className="text-2xl md:text-3xl text-purple-600" to={`/`}>
            {title}
          </Link>
        </div>
        <div className="flex justify-between pb-4 border-b border-gray-400">
          <div>
            <Link
              className="text-base md:text-xl mr-4 text-gray-600 hover:underline"
              activeClassName="underline"
              to={`/blog/`}
            >
              Blog
            </Link>
            <Link
              className="text-base md:text-xl text-gray-600 hover:underline"
              activeClassName="underline"
              to={`/about/`}
            >
              About
            </Link>
          </div>
          <div>
            <a
              href="https://www.github.com/asheerrizvi"
              title="Asheer Rizvi on Github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-xl mr-4 text-gray-600 hover:underline"
            >
              Github
            </a>
            <a
              href="https://www.twitter.com/rizvi_asheer"
              title="Asheer Rizvi on Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-xl text-gray-600 hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
