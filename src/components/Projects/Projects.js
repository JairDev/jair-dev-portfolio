import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconSocial from "components/IconSocial/IconSocial"
import * as styles from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

function Projects({ title, subTitle, projectsArray }) {
  const twoProjects = projectsArray.slice(0, 2);

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
            <ProjectsChild key={work.name} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsChild({ work }) {
  return (
    <>
      <div id={work.id}>
        <div className={styles.contentTitleProject}>
          <h3>{work.name}</h3>
        </div>
        <div className={styles.contentPersonalProject}>
          <div className={styles.contentPersonalProjectImg}>
            <div
              id="code-project-img"
              className={styles.contentProjectImg}
              data-img="code-project-img"
            >
              <div className={styles.contentImgCoin}>
                <img src={work.imgSrcGif} alt="" />
              </div>
              <IconSocial fontSizeIcon="24px"/>
            </div>
          </div>
          <div
            data-height="parent-paragraph"
            className={styles.contentPersonalProjectDescription}
          >
            {work.dataDescription.map((text) => (
              <p key={text.paragraph} className={styles.pDescriptionPersonal}>
                {text.paragraph}
              </p>
            ))}

            <div className={styles.fragmentCode}>
              <img src={work.imgCode} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
