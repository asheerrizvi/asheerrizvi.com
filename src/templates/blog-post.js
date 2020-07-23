import React from "react"
import { graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./blog-post.module.css"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  const navigateToPost = slug => {
    navigate(slug)
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h2 className={styles.title}>{post.frontmatter.title}</h2>
      <p>{post.frontmatter.date}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </article>

      <nav className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {previous ? (
          <button
            className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-4 px-4 rounded-md inline-flex items-center justify-center"
            onClick={() => navigateToPost(previous.fields.slug)}
          >
            {previous.frontmatter.title}
          </button>
        ) : (
          <div className="hidden lg:block lg:bg-white lg:py-4 lg:px-4"></div>
        )}
        {next ? (
          <button
            className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-4 px-4 rounded-md inline-flex items-center justify-center"
            onClick={() => navigateToPost(next.fields.slug)}
          >
            {next.frontmatter.title}
          </button>
        ) : (
          <div className="hidden lg:block lg:bg-white lg:py-4 lg:px-4"></div>
        )}
      </nav>
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
