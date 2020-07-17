import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const title = data.site.siteMetadata.title
  return (
    <div className="mx-auto px-40">
      <Header title={title} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
