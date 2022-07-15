import React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import IconSocial from "components/IconSocial/IconSocial";

import * as styles from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

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
}) {
  return (
    <>
      <div id={id} className={styles.contentPersonalProject}>
        <div className={styles.contentPersonalProjectFlex}>
          <div className={styles.contentPersonalProjectImg}>
            <div>
              <img src={imgSrcApp} alt="" />
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
