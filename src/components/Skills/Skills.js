import React from "react"

function Skills({skillName, iconClass}) {
  return (
    <div className="skills">
      <div className="content-icon-skills">
        <svg class={`icon ${iconClass}`}><use xlinkHref={`#${iconClass}`}></use></svg>
      </div>
      <span>{skillName}</span>
    </div>
  )
}

export default Skills