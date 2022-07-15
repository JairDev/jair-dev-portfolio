import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import { challenges } from "data/info-portfolio";
import linkOut from "@iconify/icons-akar-icons/link-out";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import styles from "./Challenge.module.css";
import FormContact from "components/FormContact/FormContact";
import IconSocial from "components/IconSocial/IconSocial";

function Challenge({
  data,
  title,
  subTitle,
  sliceStart,
  sliceEnd,
  showTitle = true,
}) {
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
          <ChallengeChild key={work.name} work={work} showTitle={showTitle} />
        ))}
      </div>
    </section>
  );
}

function ChallengeChild({ work, showTitle }) {
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
              <IconSocial
                urlGithub={work.linkGit}
                urlLive={work.linkDemo}
                fontSizeIcon="24px"
              />
            </div>
          </div>
        </div>
        <div
          data-height="parent-paragraph"
          className={styles.contentPersonalProjectDescription}
        >
          {showTitle ? (
            <div className={styles.challengeDescriptionPath}>
              <span id="text">Desafío: {work.desafio}</span>
              <span id="text">Dificultad: {work.dificultad}</span>
              <span id="text">Fuente: {work.fuente}</span>
            </div>
          ) : (
            <div className={styles.challengeDescriptionPath}>
              <span id="text">{work.dataDescription.paragraph}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Challenge;
