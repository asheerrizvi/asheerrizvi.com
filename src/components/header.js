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
    <header className="mb-16">
      <nav className="flex items-baseline justify-between flex-no-wrap">
        <div className="flex items-center flex-shrink-0">
          <Link className="text-2xl md:text-4xl text-purple-600" to={`/`}>
            {title}
          </Link>
        </div>
        <div>
          <Link
            className="text-xl md:text-2xl text-purple-600 pb-1 mr-4 md:mr-6"
            activeClassName="border-b-2 border-purple-600"
            to={`/blog/`}
          >
            Blog
          </Link>
          <Link
            className="text-xl md:text-2xl text-purple-600 pb-1"
            activeClassName="border-b-2 border-purple-600"
            to={`/about/`}
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
