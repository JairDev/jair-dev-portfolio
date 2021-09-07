import React from "react";
import "./Button.css"

function Button({classButton}) {
  return (
    <div className={`contentButtonContact ${classButton}`}>
      <div className="contentButtonForm">
        <ul>
          <li className="contactButton">
            <a href="#contact" data-link="link">
              Contáctame
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Button