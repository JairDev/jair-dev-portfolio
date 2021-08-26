import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import { challenges } from "data/info-portfolio";
import linkOut from "@iconify/icons-akar-icons/link-out";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import styles from "./Challenge.module.css";
import FormContact from "components/FormContact/FormContact";

function Challenge({ data, title, subTitle, sliceStart, sliceEnd }) {
  const sliceData = data.slice(sliceStart, sliceEnd);
  useEffect(() => {
    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach((ST) => ST.kill());
  }, []);
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
        {sliceData.map((work) => (
          <ChallengeChild key={work.name} work={work} />
        ))}
      </div>
      <section id="contact" className={`${styles.wrapperPadding}`}>
        <FormContact />
      </section>
    </section>
  );
}

function ChallengeChild({ work }) {
  return (
    <div key={work.name} id={work.id}>
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
              <img src={work.imgSrcApp} alt="" />
            </div>
            <div className={styles.personalProjectsExternalLink}>
              <div className={styles.contentIconGithubProjects}>
                <a
                  href={work.linkGit}
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
                  href={work.linkDemo}
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
          <div className={styles.challengeDescriptionPath}>
            <span id="text">Desafío: {work.desafio}</span>
            <span id="text">Dificultad: {work.dificultad}</span>
            <span id="text">Fuente: {work.fuente}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
