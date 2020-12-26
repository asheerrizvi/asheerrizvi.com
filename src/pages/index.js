import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BlogPosts from "../components/blog-posts"
import SEO from "../components/seo"

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO />
      <h1>Hello! and welcome to my dysfunctional presence on Web.</h1>
      <p>
        I am a Web Developer having a particular interest in JavaScript and
        JavaScript based stacks. This is my personal website and blog which I am
        trying to use as a personal journal, I will probably diss my older posts
        as I go along. At the moment I am working as a Web Developer for an
        amazing early stage startup called{" "}
        <a href="https://userfocus.app">UserFocus</a>. This has been by first
        gig as a proper dev and I am just happy to code along each day.
      </p>
      <p className="mb-16">
        Check out my <Link to="/blog">blog</Link>, go through the{" "}
        <Link to="/about">about</Link> section or drop an email at{" "}
        <a href="mailto:mail@asheerrizvi.com">mail@asheerrizvi.com</a>. I would
        love feedback, suggestions and any PRs whatsoever.
      </p>
      <h2 className="pb-4 border-b border-gray-400">Recent Posts</h2>
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
