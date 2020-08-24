import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Suggestions from "../components/suggestions"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h2 style={{ marginBottom: "0.75rem" }}>{post.frontmatter.title}</h2>
      <span>{post.frontmatter.date}</span>
      <article>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </article>

      <Suggestions previous={previous} next={next} />
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
