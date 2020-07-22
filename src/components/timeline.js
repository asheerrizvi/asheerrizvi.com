import React from "react"

const Timeline = ({ data }) => {
  return (
    <ul>
      {data.map((node, index) => {
        return (
          <li key={index}>
            <span className="font-semibold">{node.timespan}:</span>{" "}
            {node.description}
          </li>
        )
      })}
    </ul>
  )
}

export default Timeline
