import React, { useEffect, useState } from "react";
import ContentProjects from "components/ContentProjects/ContentProjects";
import IterateArray from "components/IterateArray/IterateArray";
import useElementPosition from "hooks/useElementPosition";
import { projects } from "data/info-portfolio";
import Button from "components/Button/Button";
import "./Projects.css";

const svgArrow = (
  <svg className={`icon icon-long-arrow-up topSvg`}>
    <use xlinkHref={`#icon-long-arrow-up`}></use>
  </svg>
);

function Projects() {
  const {
    count,
    handleTop,
    handleBottom,
    elementRef,
    classTop,
    classBottom,
  } = useElementPosition();

  const [countProject, setCountProject] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    const node = element.childNodes;
    setCountProject(node.length);
  }, [count, elementRef]);

  return (
    <>
      <Button
        classSvg="topSvg"
        className={classTop === "" ? "top" : `top ${classTop}`}
        onClick={handleTop}
      >
        {svgArrow}
      </Button>
      <span className="count-projects">{`${count + 1}/${countProject}`}</span>
      <div ref={elementRef} className="content-projects">
        <IterateArray
          array={projects}
          Component={ContentProjects}
          type={"projects"}
        />
      </div>
      <Button
        classSvg="bottomSvg"
        className={classBottom === "" ? "bottom" : `bottom ${classBottom}`}
        onClick={handleBottom}
      >
        {svgArrow}
      </Button>
    </>
  );
}

export default Projects;
