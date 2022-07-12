import FormContact from "components/FormContact/FormContact";
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section id="contact" className={`${styles.wrapperPadding} ${styles.contact}`}>
      <div className={styles.wrapperMaxWidth}>
        <FormContact />
      </div>
    </section>
  );
}

export default Footer;
