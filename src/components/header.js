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
    <header className="flex items-center mb-16 h-16 md:h-20 bg-purple-600">
      <nav className="container flex items-center justify-between flex-no-wrap">
        <Link className="text-xl md:text-3xl text-white" to={`/`}>
          {title}
        </Link>
        <div>
          <Link
            className="text-lg md:text-xl text-white pb-1 mr-4 md:mr-6"
            activeClassName="border-b-2 border-purple-600"
            to={`/blog/`}
          >
            blog
          </Link>
          <Link
            className="text-lg md:text-xl text-white pb-1"
            activeClassName="border-b-2 border-purple-600"
            to={`/about/`}
          >
            about
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
