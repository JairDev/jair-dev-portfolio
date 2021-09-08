import React from "react";
import { Icon } from "@iconify/react";
import linkOut from "@iconify/icons-akar-icons/link-out";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import styles from "./IconSocial.module.css"

function IconSocial({urlGithub, urlLive, fontSizeIcon}) {
  return (
    <div className={styles.personalProjectsExternalLink}>
      <div className={styles.contentIconGithubProjects}>
        <a
          href={urlGithub}
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
          href={urlLive}
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
