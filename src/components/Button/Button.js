import React from "react"
import "./Button.css"

function Button({className, classSvg, typeSvg, onClick, refButton}) {

  return(
    <div ref={refButton} className={`parent-content-button ${className}`}> 
      <form>
        <button className={className} onClick={onClick}>
        <svg className={`icon ${typeSvg} ${classSvg}`}>
          <use xlinkHref={`#${typeSvg}`}></use>
        </svg>
        </button>
      </form>
    </div>
  )
}

export default Button