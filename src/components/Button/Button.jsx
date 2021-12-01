import React from "react";
import "./Button.css";

function Button({ classButton }) {
  return (
    <div className={`contentButtonContact ${classButton}`}>
      <div className={`contentButton ${classButton}`}>
        <div className="button">
          <a className={`link ${classButton}`} href="#contact" data-link="link">
            Contáctame
          </a>
        </div>
      </div>
    </div>
  );
}

export default Button;
