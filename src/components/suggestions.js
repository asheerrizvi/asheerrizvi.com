import React from "react"
import { Link } from "gatsby"

const Suggestions = ({ previous, next }) => {
  return (
    <nav className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {previous && (
        <Link
          to={previous.fields.slug}
          rel="prev"
          className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-4 px-4 rounded-lg inline-flex items-center justify-center"
        >
          {previous.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link
          to={next.fields.slug}
          rel="next"
          className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-4 px-4 rounded-lg inline-flex items-center justify-center"
        >
          {next.frontmatter.title}
        </Link>
      )}
    </nav>
  )
}

export default Suggestions
