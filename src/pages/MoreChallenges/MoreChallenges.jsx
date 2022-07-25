import React, { useEffect } from "react";

import Projects from "components/Projects/Projects";

import { challenges } from "data/info-portfolio";

import styles from "./MoreChallenges.module.css";

function MoreChallenges() {
  const projects = challenges;
  useEffect(() => {
    window.scrollTo(0, 0)
  }) 
  return (
    <section id="personal-work" className={`${styles.wrapperPadding}`}>
      <div className={styles.wrapperMaxWidth}>
        {projects.map((item) => (
          <Projects
            key={item.name}
            id={item.id}
            name={item.name}
            imgSrcApp={item.imgSrcApp}
            linkGit={item.linkGit}
            linkDemo={item.linkDemo}
            dataDescription={item.dataDescription}
            challenge={item.challenge}
            difficulty={item.difficulty}
            source={item.source}
            isChallege={true}
          />
        ))}
      </div>
    </section>
  );
}

export default MoreChallenges;
