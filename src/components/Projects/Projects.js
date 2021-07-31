import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as styles from "./Projects.module.css";
import { useEffect } from "react";
// import { smoothScroll } from "App";
// import githubIcon from "../../assets/github.svg";
import { Icon } from "@iconify/react";
import linkOut from "@iconify/icons-akar-icons/link-out";
import githubFill from "@iconify/icons-akar-icons/github-fill";

gsap.registerPlugin(ScrollTrigger);

function Projects({ title, subTitle, projectsArray, view = false }) {
  const twoProjects = projectsArray.slice(0, 2);

  useEffect(() => {
    // if (view) {
    //   // smoothScroll("#container");
    // }
    // return () => ScrollTrigger.getAll().forEach((ST) => ST.kill());
  });

  return (
    <section id="personal-work" className={`${styles.wrapperPadding}`}>
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
          {twoProjects.map((work) => (
            <ProjectsCom work={work} />
          ))}
        </div>
        {/* <div className={styles.contentMoreLink}>
          <div className={styles.contentLinesCustomLink}>
            <span className={styles.lineCustomLink}></span>
            <span className={styles.circleCustomLink}></span>
            <a className={styles.moreLink} href={"#"}>
              Mas Proyectos
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}

function ProjectsCom({ work }) {
  return (
    <>
      <div id={work.id}>
        <div className={styles.contentTitleProject}>
          <h3>{work.name}</h3>
        </div>
        <div className={styles.contentPersonalProject}>
          <div className={styles.contentPersonalProjectImg}>
            <div data-img="code-project-img" id="code-project-img">
              <div className={styles.contentImgCoin}>
                <img src={work.imgSrcGif} alt="" />
              </div>
              <div className={styles.contentImgTablet}>
                <img src={work.imgSrcTablet} alt="" />
              </div>
              <div className={styles.personalProjectsExternalLink}>
                <div className={styles.contentIconGithubProjects}>
                  <a
                    href="https://github.com/JairDev/coin-market-info-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      icon={githubFill}
                      style={{ fontSize: "24px", color: "#ffffff" }}
                    />
                  </a>
                </div>
                <div className={styles.contentIconExLinkProjects}>
                  <a
                    href="https://coin-market-info.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      icon={linkOut}
                      style={{ fontSize: "24px", color: "#ffffff" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            data-height="parent-paragraph"
            className={styles.contentPersonalProjectDescription}
          >
            {work.dataDescription.map((item) => (
              <p className={styles.pDescriptionPersonal}>{item.paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
