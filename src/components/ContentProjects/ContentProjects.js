import useElementPosition from "hooks/useElementPosition"
import React from "react"

function ContentProjects({img, projectName, projectDescription}) {
  // const {elementRef, position} = useElementPosition()

  return (
    <div className="projects">
      <div className="projects-img">
        <img alt="" src={img}/>
      </div>
      <div className="projects-info">
        <span className="projects-name">{projectName}</span>
        <div className="content-projects-description">
          <span className="projects-description">{projectDescription}</span>
        </div>
      </div>
      <span className="more-info"></span>
      <div className="content-overflow-img">
        <div className="overflow-img">
          <img alt="" src={img}/>
        </div>
      </div>
    </div>
  )
}

export default ContentProjects