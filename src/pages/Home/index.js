import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { gsapAnimations } from "utils/gsapAnimations/gsapAnimations";
import { Icon } from "@iconify/react";

import Projects from "components/Projects/Projects";
import FormContact from "components/FormContact/FormContact";

import { personalProjects, svgIcons } from "../../data/info-portfolio";

import phone3 from "../../assets/hero-phone5.png";
// import phoneChallenge from "../../assets/phone-challenge-2.png";
import phoneChallenge from "../../assets/aerolab-screen.png";
import ArrowIcon from "../../assets/arrow.svg";
import styles from "./Home.module.css";
import Button from "components/Button/Button";
import IconSocial from "components/IconSocial/IconSocial";
import Footer from "components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home() {
  const objRef = {
    animateBallHero: useRef(null),
    word: useRef(null),
    h2Name: useRef(null),
    circleChallenge: useRef(null),
    phoneRef: useRef(null),
    codeImgRef: useRef(null),
    circleLinkRef: useRef(null),
    triggerButton: useRef(null),
    animatePhoto: useRef(null),
    layerPhoto: useRef(null),
  };

  useEffect(() => {
    if (window.innerWidth > 860) {
      gsap.timeline({
        scrollTrigger: {
          trigger: ["[data-phone]"],
          pin: true,
          start: "center 30%",
          end: "top -=550",
          scrub: true,
        },
      });
    }
    gsapAnimations(objRef);

    gsap.utils.toArray("[data-link]").forEach((link) => {
      const scroll = link.getAttribute("href");
      link.addEventListener("click", (e) => {
        gsap.to(window, { duration: 0.3, scrollTo: scroll });
        e.preventDefault();
      });
    });
  }, [objRef]);

  return (
    <>
      <section
        className={`${styles.wrapperPadding} ${styles.appContentHero}`}
        id={"wrapper-padding"}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.wrapperContentHero}>
            <div className={styles.appLeftContentHero}>
              <div className={styles.appLeftContentHeroRole}>
                <h1 className={styles.role}>Alfredo Moscoso</h1>
                <h2 className={styles.subTitleRole}>Frontend Developer</h2>
                <div
                  ref={objRef.triggerButton}
                  id="trigger-button"
                  className={styles.contentButtonContact}
                >
                  <Button classButton="hero" textLink="Contáctame" />
                </div>
              </div>
              <div className={styles.appContentScrollArrow}>
                <span className={styles.scrollBack}>
                  <img src={ArrowIcon} alt="arrow icon" />
                </span>
              </div>
            </div>
            <div className={styles.appRightContentHero}>
              <div className={styles.appRightContentHeroImg}>
                <span className={`${styles.wordsHero} ${styles.top}`}>
                  Responsive Design
                </span>
                <span className={`${styles.wordsHero} ${styles.topRight}`}>
                  Px
                </span>
                <span className={`${styles.wordsHero} ${styles.rightMiddle}`}>
                  Layout
                </span>
                <span className={`${styles.wordsHero} ${styles.bottomRight}`}>
                  Interaction
                </span>
                <span
                  data-wordweb="wordweb"
                  ref={objRef.word}
                  className={`${styles.wordsHero} ${styles.bottomLeft}`}
                >
                  Web
                </span>
                <img
                  className={styles.heroImg}
                  src={phone3}
                  alt="teléfono con imagen"
                />
              </div>
            </div>
            <span className={styles.backgroundSectionLeft}></span>
            <span className={styles.backgroundSectionLeftTwo}></span>
          </div>
        </div>
      </section>

      <section
        id="about-me"
        className={`${styles.wrapperPadding} ${styles.appContentAboutMe}`}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.appContentAboutMeHeader}>
            <div className={styles.appContentAboutMeTitle}>
              <h2
                data-text="text"
                className={`${styles.text} ${styles.spanName}`}
              >
                Hola,
              </h2>
              <h4
                data-text="text"
                ref={objRef.h2Name}
                className={`${styles.text} ${styles.h2Name}`}
              >
                soy Alfredo
              </h4>
            </div>
          </div>
          <div className={styles.appContentAboutMeDescription}>
            <div className={styles.wrapperAboutMeDescription}>
              <span className={styles.lineRightAbout}></span>
              <span className={styles.lineBottomAbout}></span>
              <span className={styles.lineLeftAbout}></span>
              <p
                data-text="text"
                className={`${styles.text} ${styles.pDescription}`}
              >
                Hola, me llamo Alfredo Moscoso, soy desarrollador web, tengo
                experiencia en proyectos personales manejando tecnologías como,
                ReactJs, Javascript, Sass, Css3, Html5, Git.
              </p>
              <p
                data-text="text"
                className={`${styles.text} ${styles.pDescription}`}
              >
                Del desarrollo web me entusiasma la interacción que pueda
                lograrse entre el producto que se desarrolle y el usuario final,
                ya se mediante una página web, un aplicación web, que satisfaga
                alguna necesidad, me motiva estar en constante aprendizaje y
                poder lograr buenos fundamentos en programación para ser un
                mejor profesional, enfocado en aplicar las mejores prácticas en
                el desarrollo web frontend como responsive design, html
                semántico, accesibilidad.
              </p>

              <p
                data-text="text"
                className={`${styles.text} ${styles.pDescription}`}
              >
                Saludos, espero verte pronto !
              </p>
              <Button classButton="about" textLink="Contáctame" />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.wrapperPadding} ${styles.appContentSkills}`}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.wrapperSkills}>
            <h3 data-text="text" className={styles.h3Skills}>
              Habilidades Actuales
            </h3>
            <div className={styles.contentSkills}>
              <ul className={styles.contentItemSkills}>
                <div className={styles.flexSkills}>
                  {svgIcons.map((icon) => (
                    <div className={styles.contentSkillsLabel} key={icon.name}>
                      <li data-text="text" className={styles.itemSkills}>
                        {<Icon icon={icon.svg} style={{ fontSize: "64px" }} />}
                      </li>
                      <span className={styles.labelSkills}>{icon.name}</span>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="personal-work" className={`${styles.wrapperPadding}`}>
        <div className={styles.wrapperMaxWidth}>
          <Projects
            projectsArray={personalProjects}
            title={"Proyectos"}
            subTitle={"Personales"}
            sliceStart={0}
            sliceEnd={2}
          />
          <div className={styles.contentMoreLink}>
            <div className={styles.contentLinesCustomLink}>
              <span className={styles.lineCustomLink}></span>
              <span className={styles.circleCustomLink}></span>
              <Link className={styles.moreLink} to="/proyectos">
                Más proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="challenges"
        className={`${styles.wrapperPadding} ${styles.appContentChallenges}`}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.appContentChallengesHeader}>
            <h2 data-text="text" className={styles.spanChallengeName}>
              Desafíos
            </h2>
            <h4 data-text="text" className={styles.h2FrontendName}>
              Frontend
            </h4>
          </div>

          <div className={styles.wrapperContentChallenge}>
            <div className={styles.appLeftContentChallenge}>
              <div className={styles.challengeDescription}>
                <span data-text="text">
                  Desafío: Crear una vista de catálogo para una aplicación de
                  programa de fidelización.
                </span>
                <span data-text="text">Fuente: Aerolab</span>
              </div>
              <div className={styles.challengeMyExplanation}>
                <h3>Criterios</h3>
                <p data-text="text" className={styles.pMyExplanation}>
                  Los usuarios tienen una cantidad indeterminada de puntos
                  acumulados, y cada producto vale una cantidad fija de puntos.
                </p>
                <ol>
                  <li className={styles.criteriaChallenges}>Cada producto debe tener un precio visible en puntos.</li>
                  <li className={styles.criteriaChallenges}>
                    El usuario debe poder ordenar los productos por precio, de
                    mayor a menor, y viceversa.
                  </li>
                  <li className={styles.criteriaChallenges}>
                    El usuario debería poder ver cuántos puntos tiene en su
                    cuenta.
                  </li>
                  <li className={styles.criteriaChallenges}>
                    Debe haber una forma clara para que el usuario distinga los
                    productos que puede canjear de los que no puede.
                  </li>
                  <li className={styles.criteriaChallenges}>
                    Un botón "Canjear" debe estar disponible para aquellos
                    productos que el usuario tiene suficientes puntos para
                    reclamar.
                  </li>
                  <li className={styles.criteriaChallenges}>
                    Una opción de "Canjear ahora" debería aparecer cuando el
                    usuario interactúa con un producto que tiene suficientes
                    puntos para reclamar.
                  </li>
                  <li className={styles.criteriaChallenges}>
                    Cuando el usuario no tiene suficientes puntos para un
                    producto, debería poder ver cuántos puntos más necesita para
                    reclamarlo.
                  </li>
                  <li className={styles.criteriaChallenges}>
                    El usuario no debería poder canjear un producto para el que
                    no tenga suficientes puntos.
                  </li>
                  <li className={styles.criteriaChallenges}>
                    Cuando el usuario hace clic en el botón Canjear ahora, el
                    sistema debe deducir automáticamente el precio del artículo
                    de los puntos de los usuarios.
                  </li>
                </ol>
                <p data-text="text" className={styles.pMyExplanation}></p>
              </div>
            </div>
            <div className={styles.appRightContentChallenge}>
              <div className={styles.appRightContentChallengeImg}>
                <div className={styles.contentLineChallenges}>
                  <span
                    className={`${styles.lineChallenge} ${styles.horizontal}`}
                  ></span>
                  <span
                    className={`${styles.lineChallenge} ${styles.vertical}`}
                  ></span>
                </div>
                <div
                  data-phone="data-phone"
                  ref={objRef.phoneRef}
                  className={styles.contentImgPhone}
                >
                  <img src={phoneChallenge} alt="" />
                  <IconSocial
                    urlGithub={"https://github.com/JairDev/to-do-app"}
                    urlLive={"https://todo-list-app-300dev.netlify.app"}
                    fontSizeIcon="23px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentMoreLink}>
            <div className={styles.contentLinesCustomLink}>
              <span className={styles.lineCustomLink}></span>
              <span className={styles.circleCustomLink}></span>
              <Link className={styles.moreLink} to="/desafios">
                Más desafíos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
