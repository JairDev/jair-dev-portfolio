import React, { useEffect, useLayoutEffect } from "react";

import { motion } from "framer-motion/dist/framer-motion";

import Projects from "components/Projects/Projects";

import { personalProjects } from "data/info-portfolio";

import styles from "./MoreProjects.module.css";

import blob from "../../assets/blob.svg";

function MoreProjects() {
  const projects = personalProjects.slice(2);

  useEffect(() => {
    // console.log("efffe")
    window.scrollTo(0, 0)
  });

  useLayoutEffect(() => {
    // window.scrollTo(0, 0);
  });

  return (
    <>
      {/* <motion.span
        // initial={{ scale: 1, originX: 0, originY: 0 }}
        // animate={{ scale: 0 }}
        // exit={{ opacity: 1 }}
        // transition={{ duration: 0.5 }}
        className={styles.blob}
      >
        <img src={blob} alt="" />
      </motion.span> */}

      <section id="personal-work" className={`${styles.wrapperPadding}`}>
        <motion.div
          className={styles.wrapperMaxWidth}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 0.4 }}
        >
          {/* <motion.span
          initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{duration: 1}}
          className={styles.blob}
        >
          <img src={blob} alt="" />
        </motion.span> */}
          {projects.map((item) => (
            <Projects
              key={item.name}
              id={item.id}
              name={item.name}
              imgSrcApp={item.imgSrcApp}
              linkGit={item.linkGit}
              linkDemo={item.linkDemo}
              dataDescription={item.dataDescription}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default MoreProjects;
