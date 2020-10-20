import React, { useRef, useState } from "react"

function ContentProjects({img, projectName, projectDescription, linkGit}) {
  const elementRef = useRef()
  const handleClick = () => {
    elementRef.current.classList.toggle("active")
  }

  return (
    <div className="projects">
      
      <div className="projects-img">
        <img alt="" src={img}/>
      </div>
      <div ref={elementRef} className={"projects-info"} data-info={projectName}>
        <div className="content-projects-description">
          <div className="projects-description">
            <span className="projects-name">{projectName}</span>
            <p className="description">{projectDescription}</p>
            <div className="link-projects">
                <div className="link-projects-all github">
                  <a target="_blank" rel="noopener noreferrer" href={linkGit}>
                  <svg className="icon-github-project"><use xlinkHref="#icon-github"></use></svg>
                  </a>
                </div>
                <div className="link-projects-all demo">
                  <a>
                  <svg className="icon icon-new-tab"><use xlinkHref="#icon-new-tab"></use></svg>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <span onClick={handleClick} className="more-info">
        <svg className="icon icon-plus"><use xlinkHref="#icon-plus"></use></svg>
      </span>
    </div>
  )
}

export default ContentProjects