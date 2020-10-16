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
        onClick={handleTop}
      />
      <div ref={elementRef} className="content-projects">
        <IterateArray array={projects} Component={ContentProjects} type={"projects"}/>
      </div>
      <Button
        classSvg="bottomSvg" 
        className={classBottom === "" ? "bottom" : `bottom ${classBottom}`} 
        onClick={handleBottom}
      />
    </>
  )
}

export default Projects