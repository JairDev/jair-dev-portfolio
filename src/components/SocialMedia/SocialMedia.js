import React from "react";
import "./SocialMedia.css";

function SocialMedia({ iconClass, source, name }) {
  return (
    <div className="content-social-media">
      <div className="social-media">
        <a href={source} target="_blank" rel="noopener noreferrer">
          <svg className={`${iconClass}`}>
            <use xlinkHref={`#${iconClass}`}></use>
          </svg>
        </a>
      </div>
      <span className="social-media-name">{name}</span>
    </div>
  );
}

export default SocialMedia;
