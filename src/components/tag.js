import React from "react"

const Tag = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
      {data.map(node => {
        return (
          <div className="my-3 lg:my-0" key={node.category}>
            <span className="block font-semibold mt-0 mb-1 lg:mb-0 lg:text-xl text-gray-900">
              {node.category}
            </span>
            {node.skills.map(skill => {
              return (
                <span
                  className="inline-block mt-2 lg:mt-3 mr-2 lg:mr-3 py-1 px-3 bg-gray-200 rounded-md text-gray-700"
                  key={skill}
                >
                  {skill}
                </span>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Tag
