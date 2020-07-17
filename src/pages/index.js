import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="font-light leading-tight text-gray-700">
        Welcome to my dysfunctional presence on the Web.
      </h1>
      <p className="mt-8 text-xl text-gray-700">
        I have coded this space as a personal journal for reference and
        reflection. I am a Web Developer currently having a love-hate
        relationship with JavaScript. This year I have grown from undermining
        JavaScript to seriously respecting it. I guess JavaScript does that to
        you somewhere along the way.
      </p>
      <p className="mt-8 text-xl text-gray-700">
        Have a look at my <Link to="/blog">blog</Link>, or check out the{" "}
        <Link to="/about">about</Link> section.
      </p>
    </Layout>
  )
}

export default Home
