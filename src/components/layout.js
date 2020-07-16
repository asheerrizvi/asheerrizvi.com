import React from "react"

import Header from "./header"

const Layout = ({ location, title, children }) => {
  return (
    <div className="mx-auto px-40">
      <Header location={location} title={title} />
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
