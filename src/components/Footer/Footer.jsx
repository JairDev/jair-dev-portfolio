import FormContact from "components/FormContact/FormContact";
import React from "react";
import styles from "./Footer.module.css";

import { motion } from "framer-motion/dist/framer-motion";

function Footer() {
  return (
    <section
      id="contact"
      className={`${styles.wrapperPadding} ${styles.contact}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{delay: 1}}
        exit={{ opacity: 0 }}
        className={styles.wrapperMaxWidth}
      >
        <FormContact />
      </motion.div>
    </section>
  );
}

export default Footer;
