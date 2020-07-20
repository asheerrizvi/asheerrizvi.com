import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <nav className="flex mt-16 justify-center lg:justify-start lg:-ml-4">
        <Link
          to="/"
          className="font-medium hover:bg-indigo-100 text-xl text-indigo-500 px-4 py-2 mx-auto lg:mx-0 lg:mr-12 focus:outline-none rounded-md"
        >
          Home
        </Link>
        <Link
          to="/blog"
          className="font-medium hover:bg-indigo-100 text-xl text-indigo-500 px-4 py-2 mx-auto lg:mx-0 lg:mr-12 focus:outline-none rounded-md"
        >
          Blog
        </Link>
        <Link
          to="/about"
          className="font-medium hover:bg-indigo-100 text-xl text-indigo-500 px-4 py-2 mx-auto lg:mx-0 lg:mr-12 focus:outline-none rounded-md"
        >
          About
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
