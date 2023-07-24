import React, { useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import { gsap } from "gsap";

import NavIcon from "../../assets/nav-bar-icon.svg";
import NavIconClose from "../../assets/nav-bar-close.svg";

import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const refObject = {
    menuStyle: useRef(null),
    menu: useRef(null),
    iconOpenRef: useRef(null),
    iconCloseRef: useRef(null),
    parentIcon: useRef(null),
    logoRef: useRef(null),
    refContentLinks: useRef(),
    parentMove: useRef(),
  };

  const [showNav, setShowNav] = useState(false);
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

    gsap.to(refObject.menu.current, {
      scrollTrigger: {
        start: "5% 30%",
        end: "top -=450",
        scrub: true,
      },
      autoAlpha: 1,
    });
  }, [location.pathname, refObject]);

  useEffect(() => {
    if (showNav) {
      console.log("show");
      refObject.menuStyle.current.classList.add(styles.show);
      refObject.iconOpenRef.current.firstChild.classList.add(styles.noOpen);
      refObject.iconCloseRef.current.firstChild.classList.add(styles.open);
    } else {
      refObject.menuStyle.current.classList.remove(styles.show);
      refObject.iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
      refObject.iconCloseRef.current.firstChild.classList.remove(styles.open);
    }
  }, [
    refObject.iconCloseRef,
    refObject.iconOpenRef,
    refObject.menuStyle,
    showNav,
  ]);

  const handleClick = () => setShowNav(!showNav);

  const handleClickLinks = () => {
    setShowNav(!showNav);
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
    <header
      id="nav-hidden"
      // ref={refObject.menu}
      className={styles.appContentNav}
    >
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
          ref={refObject.menu}
          onClick={handleClick}
          className={styles.parentMenu}
        >
          <div
            // animate={{ opacity: yVisibility >= 200 ? 1 : 0 }}
            // ref={refObject.menu}
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
