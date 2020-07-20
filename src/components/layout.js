import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

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
    <div className="container mx-auto px-6 lg:px-24 my-12">
      <Header title={title} />
      <main className="prose lg:prose-xl max-w-none mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
