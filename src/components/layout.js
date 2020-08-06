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
    <div className="container">
      <Header title={title} />
      <main className="font-body prose lg:prose-lg max-w-none mb-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
