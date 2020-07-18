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
      <h1 className="font-medium text-4xl lg:text-5xl leading-tight text-gray-800">
        Welcome to my dysfunctional presence on the Web.
      </h1>
      <p className="mt-6 text-xl lg:text-2xl text-gray-600">
        I have coded this space as a personal journal for reference and
        reflection. I am a Web Developer currently having a love-hate
        relationship with JavaScript. This year I have grown from undermining
        JavaScript to seriously respecting it. I guess JavaScript does that to
        you somewhere along the way.
      </p>
      <p className=" mt-6 text-xl lg:text-2xl text-gray-600">
        Have a look at my <Link to="/blog">blog</Link>, or check out the{" "}
        <Link to="/about">about</Link> section.
      </p>
      <h2 className="mt-8 text-3xl text-gray-800">Recent Blog Posts</h2>
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
