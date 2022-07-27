import React from "react";

import styles from "./Button.module.css";

function Button({ classButton, children }) {
  return (
    <div className={`${styles.contentButton} ${styles[classButton]}`}>
      <button className={`${styles.button} ${styles[classButton]}`}>{children}</button>
    </div>
  );
}

export default Button;
