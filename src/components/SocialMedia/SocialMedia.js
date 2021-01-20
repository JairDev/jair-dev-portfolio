import React from "react";
import "./SocialMedia.css";

function SocialMedia({ iconClass, source }) {
  return (
    <div className="social-media">
      <a href={source} target="_blank" rel="noopener noreferrer">
        <svg className={`${iconClass}`}>
          <use xlinkHref={`#${iconClass}`}></use>
        </svg>
      </a>
    </div>
  );
}

export default SocialMedia;
