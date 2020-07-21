import React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
  return (
    <header className="mb-16">
      <nav className="flex items-baseline justify-between flex-no-wrap">
        <div className="flex items-center flex-shrink-0">
          <h3 className="text-3xl text-purple-600">
            <Link to={`/`}>{title}</Link>
          </h3>
        </div>
        <div>
          <Link className="mr-3 md:mr-6 text-2xl text-purple-600" to={`/blog`}>
            blog
          </Link>
          <Link className="text-2xl text-purple-600" to={`/about`}>
            about
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
