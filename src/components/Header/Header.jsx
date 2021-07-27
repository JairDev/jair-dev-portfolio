import React from "react";
import { Link } from "react-router-dom";
import NavIcon from "../../assets/nav-bar-icon.svg";
import NavIconClose from "../../assets/nav-bar-close.svg";
import styles from "./Header.module.css";

function Header() {
  let state = false;
  const menuStyle = React.useRef(null);
  const iconOpenRef = React.useRef(null);
  const iconCloseRef = React.useRef(null);

  const handleClick = (e) => {
    state = !state;
    if (state) {
      menuStyle.current.classList.add(styles.show);
      iconOpenRef.current.firstChild.classList.add(styles.noOpen);
      iconCloseRef.current.firstChild.classList.add(styles.open);
    } else {
      menuStyle.current.classList.remove(styles.show);
      iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
      iconCloseRef.current.firstChild.classList.remove(styles.open);
    }
  };

  return (
    <header id="nav-hidden" className={styles.appContentNav}>
      <span id="nav-show" className={styles.spanStyleNav}></span>
      <nav className={styles.appNav}>
        <div className="app-content-nav-logo">
          <div className="app-nav-logo">
            <Link className={styles.logoName} to="/">
              Alfredo Moscoso
            </Link>
          </div>
        </div>
        <div onClick={handleClick} className={styles.iconNav}>
          <div ref={iconOpenRef} className={styles.parentIconOpen}>
            <img src={NavIcon} alt="" />
          </div>
          <div ref={iconCloseRef} className={styles.parentIconClose}>
            <img src={NavIconClose} alt="" />
          </div>
        </div>
        <div ref={menuStyle} className={styles.appContentNavLinks}>
          <ul className={styles.ulContentLinks}>
            <li className={styles.liLink}>
              <Link className={styles.itemLink} to="desafios">
                Desafios Frontend
              </Link>
            </li>
            <li className={styles.liLink}>
              {/* <Link className={styles.itemLink} to="trabajos">
              Trabajos Personales
            </Link> */}
              <a href="#personal-work" title="link" className={styles.itemLink}>
                Proyectos Personales
              </a>
            </li>
            <li className={styles.liLink}>
              <a href="#contact" title="link" className={styles.itemLink}>
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
