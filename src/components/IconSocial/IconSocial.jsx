import React from "react";
import { Icon } from "@iconify/react";
import linkOut from "@iconify/icons-akar-icons/link-out";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import styles from "./IconSocial.module.css"

function IconSocial({fontSizeIcon}) {
  return (
    <div className={styles.personalProjectsExternalLink}>
      <div className={styles.contentIconGithubProjects}>
        <a
          href={"https://github.com/JairDev/to-do-app"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon={githubFill}
            style={{ fontSize: `${fontSizeIcon}`, color: "#ffffff" }}
          />
        </a>
      </div>
      <div className={styles.contentIconExLinkProjects}>
        <a
          href={"https://todo-list-app-300dev.netlify.app/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={linkOut} style={{ fontSize: `${fontSizeIcon}`, color: "#ffffff" }} />
        </a>
      </div>
    </div>
  );
}

export default IconSocial
