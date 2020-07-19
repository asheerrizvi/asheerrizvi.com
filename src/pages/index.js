import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BlogPosts from "../components/blogPosts"
import SEO from "../components/seo"

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to my dysfunctional presence on the Web.</h1>
      <p>
        I am a Web Developer with a particular interest in JavaScript and
        JavaScript based stacks. This is my personal website and blog, created
        to serve as an online journal for myself and for anyone who may stumble
        upon this remote corner of the web. By the way, I am currently having a
        love-hate relationship with JavaScript.
      </p>
      <p>
        Check out my <Link to="/blog">blog</Link>, go through the{" "}
        <Link to="/about">about</Link> section or drop a mail at{" "}
        <a href="mailto:mail@asheerrizvi.com">mail@asheerrizvi.com</a>.
      </p>
      <h2>Recent Blog Posts</h2>
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
