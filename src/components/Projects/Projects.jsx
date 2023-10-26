import React, { useRef } from "react";

import IconSocial from "components/IconSocial/IconSocial";

import styles from "./Projects.module.css";

function Projects({
  id,
  name,
  imgSrcApp,
  linkGit,
  linkDemo,
  dataDescription,
  challenge,
  difficulty,
  source,
  isChallege = false,
  stack,
}) {
  const refMoveElement = useRef();
  const refParentHeight = useRef();
  const refImage = useRef();
  return (
    <>
      <div id={id} className={styles.contentPersonalProject}>
        <div
          ref={refParentHeight}
          className={styles.contentPersonalProjectFlex}
        >
          <div
            className={styles.contentPersonalProjectImg}
            ref={refMoveElement}
          >
            <div ref={refImage} className={styles.wrapperImage}>
              <picture>
                <source srcSet={imgSrcApp.medium} media="(min-width: 768px)" />
                <img
                  src={imgSrcApp.small}
                  decoding="async"
                  loading="lazy"
                  alt={name}
                  width="600"
                  height="400"
                />
              </picture>
            </div>
            <IconSocial
              urlGithub={linkGit}
              urlLive={linkDemo}
              fontSizeIcon="24px"
            />
          </div>
          <div
            data-height="parent-paragraph"
            className={styles.contentPersonalProjectDescription}
          >
            <div className={styles.contentTitleProject}>
              <h3>{name}</h3>
              <div className={styles.contentStack}>
                {stack?.map((st) => (
                  <span key={st} className={styles.stack}>
                    {st}
                  </span>
                ))}
              </div>
            </div>
            {isChallege ? (
              <>
                <div className={styles.challengeDescription}>
                  <span id="text">Desafío: {challenge}</span>
                  <span id="text">Dificultad: {difficulty}</span>
                  <span id="text">Fuente: {source}</span>
                </div>
                {dataDescription.map((text) => (
                  <p
                    data-text="text"
                    key={text.paragraph}
                    className={styles.pDescriptionPersonal}
                  >
                    {text.paragraph}
                  </p>
                ))}
              </>
            ) : (
              <>
                {dataDescription.map((text) => (
                  <p
                    data-text="text"
                    key={text.paragraph}
                    className={styles.pDescriptionPersonal}
                  >
                    {text.paragraph}
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
