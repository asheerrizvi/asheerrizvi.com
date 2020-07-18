import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogPosts from "../components/blogPosts"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <h2 className="mt-8 text-3xl text-gray-800">All Posts</h2>
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
