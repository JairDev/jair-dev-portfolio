import React from "react"
import ContentProjects from "components/ContentProjects/ContentProjects"
import IterateArray from "components/IterateArray/IterateArray"
import useElementPosition from "hooks/useElementPosition"
import { projects } from "data/info-portfolio";

function Projects() {
  const {elementRef, position} = useElementPosition()
  
  return (
    <>
      <button className="top" onClick={position}>Click</button>
      <div ref={elementRef} className="content-projects">
        <IterateArray array={projects} Component={ContentProjects} type={"projects"}/>
      </div>
      <button className="bottom"  onClick={position}>Click</button>
    </>
  )
}

export default Projects