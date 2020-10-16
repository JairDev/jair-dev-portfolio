import React from "react"

function Button({className, classSvg, onClick, refButton}) {

  return(
    <div ref={refButton} className={`content-button ${className}`}> 
      <form>
        <button className={className} onClick={onClick}>
        <svg className={`icon icon-double_arrow ${classSvg}`}>
          <use xlinkHref="#icon-double_arrow"></use>
        </svg>
        </button>
      </form>
    </div>
  )
}

export default Button