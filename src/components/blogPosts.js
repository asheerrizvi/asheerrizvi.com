import React from "react"
import { Link } from "gatsby"

const BlogPosts = ({ posts }) => {
  return (
    <React.Fragment>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} className="mt-6">
            <div>
              <span className="block text-gray-800">
                {node.frontmatter.date}
              </span>
              <Link className="text-xl" to={node.fields.slug}>
                {title}
              </Link>
            </div>
          </article>
        )
      })}
    </React.Fragment>
  )
}

export default BlogPosts
