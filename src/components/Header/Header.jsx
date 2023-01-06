import React, { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link, useLocation } from "react-router-dom";

import { motion, useScroll } from "framer-motion/dist/framer-motion";

import NavIcon from "../../assets/nav-bar-icon.svg";
import NavIconClose from "../../assets/nav-bar-close.svg";

import styles from "./Header.module.css";
import { useState } from "react";

const setClass = (direction, { menuStyle, iconOpenRef, iconCloseRef }) => {
  if (menuStyle.current.className.includes("show")) {
    menuStyle.current.classList.remove(styles.show);
    iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
    iconCloseRef.current.firstChild.classList.remove(styles.open);
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
    parentMove: useRef(),
  };

  const [yVisibility, setYVisibility] = useState(0);
  const { scrollY } = useScroll();
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

    return scrollY.onChange((latest) => {
      setYVisibility(latest);
    });
  }, [location.pathname, refObject, scrollY]);

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

  const handleMouseMove = (e) => {
    const coords = refObject.parentIcon.current.getBoundingClientRect();
    const xCoord = e.clientX - (coords.left + Math.floor(coords.width / 2));
    const yCoord = e.clientY - (coords.top + Math.floor(coords.height / 2));
    if (refObject.parentIcon.current) {
      refObject.parentIcon.current.style.setProperty("--x", `${xCoord}px`);
      refObject.parentIcon.current.style.setProperty("--y", `${yCoord}px`);
    }
  };

  const handleMouseLeave = (e) => {
    refObject.parentIcon.current.style.setProperty("--x", `${0}px`);
    refObject.parentIcon.current.style.setProperty("--y", `${0}px`);
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
        <div onClick={handleClick} className={styles.parentMenu}>
          <motion.div
            animate={{ opacity: yVisibility >= 200 ? 1 : 0 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={styles.iconNaCoord}
          >
            <div
              id="parent-icon"
              ref={refObject.parentIcon}
              className={styles.iconNav}
            >
              <svg width="60" height="60" viewBox="0 0 63 63">
                <circle className={styles.path} cx="50%" cy="50%" r="30" />
                <circle className={styles.pathLayer} cx="50%" cy="50%" r="30" />
              </svg>

              <div
                id="open-click"
                ref={refObject.iconOpenRef}
                className={styles.parentIconOpen}
              >
                <img src={NavIcon} width="32" height="32" alt="" />
              </div>
              <div
                id="close-click"
                ref={refObject.iconCloseRef}
                className={styles.parentIconClose}
              >
                <img src={NavIconClose} width="32" height="32" alt="" />
              </div>
            </div>
          </motion.div>
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
