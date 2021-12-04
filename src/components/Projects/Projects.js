import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconSocial from "components/IconSocial/IconSocial";
import * as styles from "./Projects.module.css";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Projects({ title, subTitle, projectsArray, sliceNumber }) {
  const twoProjects = projectsArray.slice(0, sliceNumber);
  return (
    <section id="personal-work" className={`${styles.wrapperPadding}`}>
      <div className={styles.appContentPersonalProjectsHeader}>
        <h2 data-text="text" className={styles.spanWorkName}>
          {title}
        </h2>
        <h4 data-text="text" className={styles.h2WorkName}>
          {subTitle}
        </h4>
      </div>
      <div className={styles.wrapperPersonalProjects}>
        {twoProjects.map((work) => (
          <ProjectsChild key={work.name} work={work} />
        ))}
        <div className={styles.contentMoreLink}>
          <div className={styles.contentLinesCustomLink}>
            <span className={styles.lineCustomLink}></span>
            <span className={styles.circleCustomLink}></span>
            {/* <span className={styles.circleCustomLinkAnimate}></span> */}
            <Link className={styles.moreLink} to="/proyectos">
              Más proyectos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsChild({ work }) {
  return (
    <>
      <div id={work.id} className={styles.contentPersonalProject}>
        <div className={styles.contentTitleProject}>
          <h3>{work.name}</h3>
        </div>
        <div className={styles.contentPersonalProjectFlex}>
          <div className={styles.contentPersonalProjectImg}>
            <div
              id="code-project-img"
              className={styles.contentProjectImg}
              data-img="code-project-img"
            >
              <div className={styles.contentImgCoin}>
                <img src={work.imgSrcApp} alt="" />
              </div>
              <IconSocial
                urlGithub={work.linkGit}
                urlLive={work.linkDemo}
                fontSizeIcon="24px"
              />
            </div>
          </div>
          <div
            data-height="parent-paragraph"
            className={styles.contentPersonalProjectDescription}
          >
            {work.dataDescription.map((text) => (
              <p
                data-text="text"
                key={text.paragraph}
                className={styles.pDescriptionPersonal}
              >
                {text.paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
