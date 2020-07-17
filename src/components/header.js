import React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
  let header

  header = (
    <React.Fragment>
      <nav className="flex items-center justify-between flex-no-wrap">
        <div className="flex items-center flex-shrink-0">
          <h3 className="font-light">
            <Link to={`/`}>{title}</Link>
          </h3>
        </div>
        <div>
          <Link
            className="hover:bg-gray-200 text-xl hover:text-gray-600 py-2 px-4 rounded-l font-light"
            to={`/blog`}
          >
            blog
          </Link>
          <Link
            className="hover:bg-gray-200 text-xl hover:text-gray-600 py-2 px-4 rounded-l font-light"
            to={`/about`}
          >
            about
          </Link>
        </div>
      </nav>
    </React.Fragment>
  )
  return <header className="mt-8 mb-16 py-6">{header}</header>
}

export default Header
