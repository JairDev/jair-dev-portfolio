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
        <title>Proyectos Presonales</title>
      </Helmet>
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
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default MoreProjects;
