import React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
  return (
    <header className="mb-16">
      <nav className="flex items-baseline justify-between flex-no-wrap">
        <div className="flex items-center flex-shrink-0">
          <h3 className="font-light text-3xl text-indigo-500">
            <Link to={`/`}>{title}</Link>
          </h3>
        </div>
        <div>
          <Link
            className="mr-3 sm:mr-4 font-light text-2xl text-indigo-500"
            to={`/blog`}
          >
            blog
          </Link>
          <Link className="font-light text-2xl text-indigo-500" to={`/about`}>
            about
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
