import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconSocial from "components/IconSocial/IconSocial"
import * as styles from "./Projects.module.css";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Projects({ title, subTitle, projectsArray }) {
  const twoProjects = projectsArray.slice(0, 2);

  return (
    <section id="personal-work" className={`${styles.wrapperPadding}`}>
      <div className={styles.appContentPersonalProjectsHeader}>
        <div className={styles.appContentPersonalProjectsTitle}>
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
              <span
                // ref={objRef.circleLinkRef}
                className={styles.circleCustomLinkAnimate}
              >
                {/* <img src={shadow} alt="" /> */}
              </span>
              <Link className={styles.moreLink} to="/desafios">
                Mas proyectos
              </Link>
            </div>
          </div>
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
              <p data-text="text" key={text.paragraph} className={styles.pDescriptionPersonal}>
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
