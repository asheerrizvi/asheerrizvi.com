import React from "react"

const Timeline = ({ data }) => {
  return (
    <ul>
      {data.map(node => {
        return (
          <li>
            <span className="font-semibold">{node.timespan}:</span>{" "}
            {node.description}
          </li>
        )
      })}
    </ul>
  )
}

export default Timeline
