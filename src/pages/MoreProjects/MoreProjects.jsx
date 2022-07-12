import Projects from "components/Projects/Projects";
import { personalProjects } from "data/info-portfolio";
import React from "react";
import styles from "./MoreProjects.module.css";

function MoreProjects() {
  console.log("projects");
  return (
    <section id="personal-work" className={`${styles.wrapperPadding}`}>
      <div className={styles.wrapperMaxWidth}>
        <Projects
          projectsArray={personalProjects}
          title={""}
          subTitle={""}
          sliceStart={2}
        />
      </div>
    </section>
  );
}

export default MoreProjects;
