import React from "react";
import "./Skills.css";

function Skills({ skillName, iconClass }) {
  return (
    <div className="content-skills">
      <div className="skills">
        <div className="content-icon-skills">
          <svg className={`icon ${iconClass}`}>
            <use xlinkHref={`#${iconClass}`}></use>
          </svg>
        </div>
        <span>{skillName}</span>
      </div>
    </div>
  );
}

export default Skills;
