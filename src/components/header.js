import React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
  let header

  header = (
    <React.Fragment>
      <nav className="flex items-center justify-between flex-no-wrap">
        <div className="flex items-center flex-shrink-0">
          <h3 className="font-sans font-thin">
            <Link to={`/`}>{title}</Link>
          </h3>
        </div>
        <div>
          <button className="hover:bg-gray-200 hover:text-gray-900 text-gray-600 py-2 px-4 rounded-l">
            <Link to={`/blog`}>Blog</Link>
          </button>
          <button className="hover:bg-gray-200 hover:text-gray-900 text-gray-600 py-2 px-4 rounded-l">
            <Link to={`/about`}>About</Link>
          </button>
        </div>
      </nav>
    </React.Fragment>
  )
  return <header className="mt-8 mb-16 py-6">{header}</header>
}

export default Header
