import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import NavIcon from "../../assets/nav-bar-icon.svg";
import NavIconClose from "../../assets/nav-bar-close.svg";
import styles from "./Header.module.css";

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
    if (location.pathname === "/desafios") {
      logoRef.current.style.opacity = "1";
      parentIcon.current.style.opacity = "0";
    }
  }, [location.pathname]);

  const handleClick = (e) => {
    state = !state;
    const parent = e.target;
    const clickIcon = parent.closest("#parent-icon");
    const clickLinks = parent.closest("#ul-content-li");

    if (clickIcon) {
      if (state) {
        console.log(menuStyle.current);
        menuStyle.current.classList.add(styles.show);
        iconOpenRef.current.firstChild.classList.add(styles.noOpen);
        iconCloseRef.current.firstChild.classList.add(styles.open);
      } else {
        menuStyle.current.classList.remove(styles.show);
        iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
        iconCloseRef.current.firstChild.classList.remove(styles.open);
      }
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
                href="#challenges"
                data-link="link"
                className={styles.itemLink}
              >
                Desafios Frontend
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
