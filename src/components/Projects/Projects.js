import React, { useEffect, useState } from "react";
import ContentProjects from "components/ContentProjects/ContentProjects";
import IterateArray from "components/IterateArray/IterateArray";
import useElementPosition from "hooks/useElementPosition";
import { projects } from "data/info-portfolio";
import Button from "components/Button/Button";
import * as styles from "./Projects.module.css";

const svgArrow = (
  <svg className={`icon icon-long-arrow-up topSvg`}>
    <use xlinkHref={`#icon-long-arrow-up`}></use>
  </svg>
);

function Projects({title, subTitle, projectsArray}) {
  console.log(projectsArray);
  return (

    <section className={`${styles.wrapperPadding}`}>
      <div className={styles.appContentPersonalProjectsHeader}>
        <div className={styles.appContentPersonalProjectsTitle}>
          <span id="text" className={styles.spanWorkName}>
            {title}
          </span>
          <h2 id="text" className={styles.h2WorkName}>
            {subTitle}
          </h2>
        </div>
        <div className={styles.wrapperPersonalProjects}>
          {
            projectsArray.map((work) => (
                <div key={work.name}>
                  <div
                    className={styles.contentPersonalProject}
                  >
                    <div id="text" className={styles.contentPersonalProjectImg}>
                      <img src={work.name} alt="" />
                      <span className={styles.backImgPersonal}></span>
                      {/* <div className={styles.contentCustomLink}>
                    <div className={styles.contentLinesCustomLink}>
                    <span className={styles.lineCustomLink}></span>
                    <span className={styles.circleCustomLink}></span>
                      <a className={styles.moreLink} href={"#"}>
                      Ver trabajo
                      </a>
                      </div>
                    </div> */}
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
                      {/* <span className={styles.circleCustomLink}></span> */}
                      <a className={styles.moreLink} href={"#"}>
                        Ver Proyecto
                      </a>
                    </div>
                  </div>
                </div>
            ))
          }
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
  );
}

export default Projects;
