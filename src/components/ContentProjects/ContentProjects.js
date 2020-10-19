import React, { useRef, useState } from "react"

function ContentProjects({img, projectName, projectDescription}) {
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
          {/* <div className="overflow-img">
            <img alt="" src={img}/>
          </div> */}
          <div className="projects-description">
            <span className="projects-name">{projectName}</span>
            <p className="description">{projectDescription}</p>
          </div>
        </div>
      </div>
      <span onClick={handleClick} className="more-info">
        <svg className="icon icon-plus"><use xlinkHref="#icon-plus"></use></svg>
      </span>
      {/* <div className="content-overflow-img">
        <div className="overflow-img">
          <img alt="" src={img}/>
        </div>
      </div> */}
    </div>
  )
}

export default ContentProjects