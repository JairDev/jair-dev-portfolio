import React, { useEffect } from "react";

import Projects from "components/Projects/Projects";

import { personalProjects } from "data/info-portfolio";

import styles from "./MoreProjects.module.css";
import { Helmet } from "react-helmet";

function MoreProjects() {
  const projects = personalProjects.slice(2);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmet>
        <title>Proyectos Personales</title>
      </Helmet>
      <section id="personal-work" className={`${styles.wrapperPadding}`}>
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.appContentPersonalProjectsHeader}>
            <h2 data-text="text" className={styles.spanWorkName}>
              Proyectos
            </h2>
            <h4 data-text="text" className={styles.h2WorkName}>
              Personales
            </h4>
          </div>
          {projects.map((item) => (
            <Projects
              key={item.name}
              id={item.id}
              name={item.name}
              imgSrcApp={item.imgSrcApp}
              linkGit={item.linkGit}
              linkDemo={item.linkDemo}
              dataDescription={item.dataDescription}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default MoreProjects;
