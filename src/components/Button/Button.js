import React from "react";
import "./Button.css";

function Button({ className, onClick, refButton, children }) {
  return (
    <div ref={refButton} className={`parent-content-button ${className}`}>
      <form>
        <button className={className} onClick={onClick}>
	  {children}
        </button>
      </form>
    </div>
  );
}


export default Button;

