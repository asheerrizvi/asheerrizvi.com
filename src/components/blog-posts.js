import React from "react"
import { Link } from "gatsby"

const BlogPosts = ({ posts }) => {
  return (
    <React.Fragment>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Link to={node.fields.slug}>
            <article key={node.fields.slug} className="group mt-6 lg:-ml-4 lg:px-4 lg:py-2 lg:hover:bg-indigo-100 rounded-md">
              <div>
                <span className="block text-gray-800">
                  {node.frontmatter.date}
                </span>
                <span className="text-xl lg:text-2xl">{title}</span>
              </div>
            </article>
          </Link>
        )
      })}
    </React.Fragment>
  )
}

export default BlogPosts
