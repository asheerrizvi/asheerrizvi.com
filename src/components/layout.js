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
    <>
      <Header title={title} />
      <div className="container mb-16">
        <main className="prose lg:prose-lg max-w-none mb-auto">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
