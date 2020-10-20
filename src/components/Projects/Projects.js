import React from "react"
import ContentProjects from "components/ContentProjects/ContentProjects"
import IterateArray from "components/IterateArray/IterateArray"
import useElementPosition from "hooks/useElementPosition"
import { projects } from "data/info-portfolio";
import Button from "components/Button/Button";

function Projects() {
  const {handleTop, handleBottom,elementRef, classTop, classBottom} = useElementPosition()

  return (
    <>
      <Button 
        classSvg="topSvg"
        className={classTop === "" ? "top" : `top ${classTop}`} 
        typeSvg={"icon-double_arrow"}
        onClick={handleTop}
      />
      <div ref={elementRef} className="content-projects">
        {/* <div className="title-projects">
          <h2>Projects</h2>
        </div> */}
        <IterateArray array={projects} Component={ContentProjects} type={"projects"}/>
      </div>
      <Button
        classSvg="bottomSvg" 
        className={classBottom === "" ? "bottom" : `bottom ${classBottom}`} 
        typeSvg={"icon-double_arrow"}
        onClick={handleBottom}
      />
    </>
  )
}

export default Projects