import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link, useLocation } from "react-router-dom";

import NavIcon from "../../assets/nav-bar-icon.svg";
import NavIconClose from "../../assets/nav-bar-close.svg";


import styles from "./Header.module.css";

const setClass = (direction) => {
  if (window.scrollY <= 0) {
    gsap.to("#nav-hidden", {
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0px 4px 20px 8px rgba(177, 181, 202, 0)",
      duration: 0.2,
    });
  } else if (direction >= 1) {
    gsap.to("#nav-hidden", {
      opacity: 0,
      duration: 0.2,
    });
  } else {
    gsap.to("#nav-hidden", {
      backgroundColor: "rgba(231, 232, 239, 1)",
      boxShadow: "0px 4px 20px 8px rgba(177, 181, 202, 0.2)",
      duration: 0.2,
      opacity: 1,
    });
  }
};

function Header() {
  let state = false;
  const menuStyle = useRef(null);
  const iconOpenRef = useRef(null);
  const iconCloseRef = useRef(null);
  const parentIcon = useRef(null);
  const logoRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    logoRef.current.style.opacity = "0";
    parentIcon.current.style.opacity = "1";
    if (
      location.pathname === "/desafios" ||
      location.pathname === "/proyectos"
    ) {
      logoRef.current.style.opacity = "1";
      parentIcon.current.style.opacity = "0";
    }
    ScrollTrigger.create({
      onUpdate: (self) => {
        setClass(self.direction);
      },
    });
  }, [location.pathname]);

  const handleClick = (e) => {
    state = !state;
    const parent = e.target;
    const clickLinks = parent.closest("#ul-content-li");
    if (state) {
      menuStyle.current.classList.add(styles.show);
      iconOpenRef.current.firstChild.classList.add(styles.noOpen);
      iconCloseRef.current.firstChild.classList.add(styles.open);
    } else {
      menuStyle.current.classList.remove(styles.show);
      iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
      iconCloseRef.current.firstChild.classList.remove(styles.open);
    }
    if (clickLinks) {
      menuStyle.current.classList.remove(styles.show);
      iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
      iconCloseRef.current.firstChild.classList.remove(styles.open);
    }
  };

  return (
    <header id="nav-hidden" className={styles.appContentNav}>
      <span id="back-header" className={styles.spanBack}></span>
      <span id="nav-show" className={styles.spanStyleNav}></span>
      <nav onClick={handleClick} className={styles.appNav}>
        <div className="app-content-nav-logo">
          <div className="app-nav-logo">
            <Link ref={logoRef} className={styles.logoName} to="/">
              Inicio
            </Link>
          </div>
        </div>
        <div id="parent-icon" ref={parentIcon} className={styles.iconNav}>
          <div
            id="open-click"
            ref={iconOpenRef}
            className={styles.parentIconOpen}
          >
            <img src={NavIcon} alt="" />
          </div>
          <div
            id="close-click"
            ref={iconCloseRef}
            className={styles.parentIconClose}
          >
            <img src={NavIconClose} alt="" />
          </div>
        </div>
        <div ref={menuStyle} className={styles.appContentNavLinks}>
          <ul id="ul-content-li" className={styles.ulContentLinks}>
            <li className={styles.liLink}>
              <a href="#about-me" data-link="link" className={styles.itemLink}>
                Conóceme
              </a>
            </li>
            <li className={styles.liLink}>
              <a
                href="#personal-work"
                data-link="link"
                className={styles.itemLink}
              >
                Proyectos Personales
              </a>
            </li>
            <li className={styles.liLink}>
              <a
                href="#challenges"
                data-link="link"
                className={styles.itemLink}
              >
                Desafíos Frontend
              </a>
            </li>
            <li className={styles.liLink}>
              <a href="#contact" data-link="link" className={styles.itemLink}>
                Contacto
              </a>
            </li>
          </ul>
          <span className={styles.backMenuStyle}>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
