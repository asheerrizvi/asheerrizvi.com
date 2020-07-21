import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <h1>404 Not Found</h1>
      <p>Unfortunately, this is not the path into Mordor.</p>
    </Layout>
  )
}

export default NotFoundPage
