import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as styles from "./Projects.module.css";
import { useEffect } from "react";
import { smoothScroll } from "App";

gsap.registerPlugin(ScrollTrigger);

function Projects({ title, subTitle, projectsArray }) {
  useEffect(() => {
    // smoothScroll("#container");
  }, []);
  return (
    // <div id="container">
      <section className={`${styles.wrapperPadding}`}>
        <div className={styles.appContentPersonalProjectsHeader}>
          <div className={styles.appContentPersonalProjectsTitle}>
            <h2 id="text" className={styles.spanWorkName}>
              {title}
            </h2>
            <h4 id="text" className={styles.h2WorkName}>
              {subTitle}
            </h4>
          </div>
          <div className={styles.wrapperPersonalProjects}>
            {projectsArray.map((work) => (
              <div key={work.name}>
                <div className={styles.contentPersonalProject}>
                  <div id="text" className={styles.contentPersonalProjectImg}>
                    <img src={work.name} alt="" />
                    <span className={styles.backImgPersonal}></span>
                  </div>
                  <div className={styles.contentPersonalProjectDescription}>
                    <p id="text" className={styles.pDescriptionPersonal}>
                      {work.description}
                    </p>
                  </div>
                </div>
                <div className={styles.contentEachLink}>
                  <div className={styles.contentLinesCustomLink}>
                    <span className={styles.lineCustomLink}></span>
                    <a className={styles.moreLinkProjects} href={"#"}>
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.contentMoreLink}>
            <div className={styles.contentLinesCustomLink}>
              <span className={styles.lineCustomLink}></span>
              <span className={styles.circleCustomLink}></span>
              <a className={styles.moreLink} href={"#"}>
                Mas Proyectos
              </a>
            </div>
          </div>
        </div>
      </section>
    // </div>
  );
}

export default Projects;
