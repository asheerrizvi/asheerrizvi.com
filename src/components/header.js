import React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
  let header

  header = (
    <React.Fragment>
      <nav className="flex items-baseline justify-between flex-no-wrap">
        <div className="flex items-center flex-shrink-0">
          <h3 className="font-light text-3xl">
            <Link to={`/`}>{title}</Link>
          </h3>
        </div>
        <div>
          <Link className="mr-3 sm:mr-4 font-light text-2xl" to={`/blog`}>
            blog
          </Link>
          <Link className="font-light text-2xl" to={`/about`}>
            about
          </Link>
        </div>
      </nav>
    </React.Fragment>
  )
  return <header className="my-10">{header}</header>
}

export default Header
