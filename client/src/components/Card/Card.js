  
import React from "react"

const Card = ({ heading, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h3 className="header">{heading}</h3>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </a>
      </div>
    </div>
  )
}

export default Card