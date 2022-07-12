import React from "react";
import "./Button.css";

function Button({ classButton, textLink }) {
  return (
    <div className={`contentButtonContact ${classButton}`}>
      <div className={`contentButton ${classButton}`}>
        <div className="button">
          <a className={`link ${classButton}`} href="#contact" data-link="link">
            {textLink}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Button;
