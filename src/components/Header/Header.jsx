import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link, useLocation } from "react-router-dom";

import NavIcon from "../../assets/nav-bar-icon.svg";
import NavIconClose from "../../assets/nav-bar-close.svg";

import styles from "./Header.module.css";

const setClass = (direction, { menuStyle, iconOpenRef, iconCloseRef }) => {
  if (menuStyle.current.className.includes("show")) {
    menuStyle.current.classList.remove(styles.show);
    iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
    iconCloseRef.current.firstChild.classList.remove(styles.open);
  }
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
  const refObject = {
    menuStyle: useRef(null),
    iconOpenRef: useRef(null),
    iconCloseRef: useRef(null),
    parentIcon: useRef(null),
    logoRef: useRef(null),
    refContentLinks: useRef(),
  };

  const location = useLocation();

  useEffect(() => {
    refObject.logoRef.current.style.opacity = "0";
    refObject.parentIcon.current.style.opacity = "1";
    if (
      location.pathname === "/desafios" ||
      location.pathname === "/proyectos"
    ) {
      refObject.logoRef.current.style.opacity = "1";
      refObject.parentIcon.current.style.opacity = "0";
    }
    ScrollTrigger.create({
      onUpdate: (self) => {
        setClass(self.direction, refObject);
      },
    });
  }, [location.pathname, refObject]);

  const handleClick = () => {
    if (refObject.menuStyle.current.className.includes("show")) {
      refObject.menuStyle.current.classList.remove(styles.show);
      refObject.iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
      refObject.iconCloseRef.current.firstChild.classList.remove(styles.open);
    } else {
      refObject.menuStyle.current.classList.add(styles.show);
      refObject.iconOpenRef.current.firstChild.classList.add(styles.noOpen);
      refObject.iconCloseRef.current.firstChild.classList.add(styles.open);
    }
  };

  const handleClickLinks = () => {
    if (refObject.menuStyle.current.className.includes("show")) {
      refObject.menuStyle.current.classList.remove(styles.show);
      refObject.iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
      refObject.iconCloseRef.current.firstChild.classList.remove(styles.open);
    }
  };

  return (
    <header id="nav-hidden" className={styles.appContentNav}>
      <span id="back-header" className={styles.spanBack}></span>
      <span id="nav-show" className={styles.spanStyleNav}></span>
      <nav className={styles.appNav}>
        <div className="app-content-nav-logo">
          <div className="app-nav-logo">
            <Link ref={refObject.logoRef} className={styles.logoName} to="/">
              Inicio
            </Link>
          </div>
        </div>
        <div
          onClick={handleClick}
          id="parent-icon"
          ref={refObject.parentIcon}
          className={styles.iconNav}
        >
          <svg width="100" height="100" viewBox="0 0 70 70">
            <circle className={styles.path} cx="50%" cy="50%" r="30" />
          </svg>
          <div
            id="open-click"
            ref={refObject.iconOpenRef}
            className={styles.parentIconOpen}
          >
            <img src={NavIcon} alt="" />
          </div>
          <div
            id="close-click"
            ref={refObject.iconCloseRef}
            className={styles.parentIconClose}
          >
            <img src={NavIconClose} alt="" />
          </div>
        </div>
        <div
          id="content-nav-links"
          ref={refObject.menuStyle}
          className={styles.appContentNavLinks}
        >
          <ul
            ref={refObject.refContentLinks}
            onClick={handleClickLinks}
            id="ul-content-li"
            className={styles.ulContentLinks}
          >
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
              <a href="#about-me" data-link="link" className={styles.itemLink}>
                Conóceme
              </a>
            </li>

            <li className={styles.liLink}>
              <a href="#contact" data-link="link" className={styles.itemLink}>
                Contacto
              </a>
            </li>
          </ul>
          <span className={styles.backMenuStyle}></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
