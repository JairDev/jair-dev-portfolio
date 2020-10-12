import React from "react"

function Projects({img, projectName, projectDescription}) {
  return (
    <div className="content-projects">
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
      </div>
    </div>
  )
}

export default Projects