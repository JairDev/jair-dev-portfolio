import React from "react"
import "./SocialMedia.css"

function SocialMedia({iconClass}) {
  return (
    <div className="social-media">
      <svg className={`${iconClass}`}><use xlinkHref={`#${iconClass}`}></use></svg>
    </div>
  )
}

export default SocialMedia