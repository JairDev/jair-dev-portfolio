import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { smoothScroll } from "utils/smoothScroll";
import { gsapAnimations } from "utils/gsapAnimations/gsapAnimations";
import { Icon } from "@iconify/react";

import Projects from "components/Projects/Projects";
import FormContact from "components/FormContact/FormContact";
import IconSocial from "components/IconSocial/IconSocial";

import { personalProjects } from "../../data/info-portfolio";

import bxlReact from "@iconify/icons-bx/bxl-react";
import bxlJavascript from "@iconify/icons-bx/bxl-javascript";
import bxlSass from "@iconify/icons-bx/bxl-sass";
import bxlCss3 from "@iconify/icons-bx/bxl-css3";
import bxlHtml5 from "@iconify/icons-bx/bxl-html5";
import bxlGit from "@iconify/icons-bx/bxl-git";

import phone3 from "../../assets/hero-phone5.png";
import photoProfile from "../../assets/foto-perfil.png";
import phoneChallenge from "../../assets/phone-challenge-2.png";
import ArrowIcon from "../../assets/arrow.svg";
import shadow from "../../assets/shadow-ball.png";
import shadowBlue from "../../assets/shadow-ball-blue.png";
import blurry from "../../assets/blurry.png";
import styles from "./Home.module.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const svgIcons = [
  { name: "React", svg: bxlReact },
  { name: "Javascript", svg: bxlJavascript },
  { name: "Sass", svg: bxlSass },
  { name: "Css3", svg: bxlCss3 },
  { name: "Html5", svg: bxlHtml5 },
  { name: "Git", svg: bxlGit },
];

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
    smoothScroll("#container");
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
      <span ref={objRef.animateBallHero} className={styles.scrollBefore}>
        <img src={shadow} alt="" />
      </span>
      <section
        className={`${styles.wrapperPadding} ${styles.appContentHero}`}
        id={"wrapper-padding"}
      >
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
                <div className={styles.contentButtonForm}>
                  <ul>
                    <li className={styles.contactButton}>
                      <a href="#contact" data-link="link">
                        Contáctame
                      </a>
                    </li>
                  </ul>
                </div>
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
      </section>

      <section
        id="about-me"
        className={`${styles.wrapperPadding} ${styles.appContentAboutMe}`}
      >
        <div className={styles.appContentAboutMeHeader}>
          <div
            ref={objRef.animatePhoto}
            className={styles.appContentAboutMePhoto}
          >
            <span ref={objRef.layerPhoto} className={styles.layerPhoto}></span>
            <img
              className={styles.photo}
              src={photoProfile}
              alt="Foto de perfil"
            />
          </div>
          <div className={styles.appContentAboutMeTitle}>
            <h2 data-text="text" className={`${styles.text} ${styles.spanName}`}>
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
            <p data-text="text" className={`${styles.text} ${styles.pDescription}`}>
              Como desarrollador, es emocionante pensar que podemos crear
              proyectos importantes para el beneficio de otras personas, una
              aplicación, un sitio web, esos proyectos que tendrán un impacto
              positivo en la vida de alguien.
            </p>
            <p data-text="text" className={`${styles.text} ${styles.pDescription}`}>
              Poder ser parte de esa experiencia me motiva y mantiene en
              constante aprendizaje para seguir mejorando mis habilidades
              técnicas, estoy dispuesto a seguir aprendiendo nuevas tecnologías
              y así poder adaptarme a un equipo de trabajo.
            </p>

            <h3 data-text="text" className={`${styles.text} ${styles.h3Description}`}>
              Un poco más de mi
            </h3>
            <p data-text="text" className={`${styles.text} ${styles.pDescription}`}>
              Como seres humanos necesitamos conectar con nuestras emociones,
              nuestro entorno, disfrutar de la vida, me encanta ir a la playa,
              hacer ejercicio al aire libre, me gustan las mascotas, sobre todo
              los perros.
            </p>
            <p data-text="text" className={`${styles.text} ${styles.pDescription}`}>
              Cuando estoy estresado, la música despeja mi mente, en mis tiempos
              de ocio me gusta pasar el rato jugando algún videojuego o
              modelando algo 3d, es algo que encuentro muy interesante, lo hago
              como hobby...
            </p>

            <p
              data-text="text"
              className={`${styles.text} ${styles.pDescription} ${styles.footerDescription}`}
            >
              ¡ Un gusto, saludos !
            </p>
            <div className={styles.contentButtonContactAbout}>
              <div className={styles.contentButtonForm}>
                <ul>
                  <li className={styles.contactButton}>
                    <a href="#contact" data-link="link">
                      Contáctame
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.wrapperPadding} ${styles.appContentSkills}`}
        id="insert-canvas"
      >
        <div className={styles.containBlurry}>
          <img src={blurry} alt="" />
        </div>
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
      </section>

      {
        <section
          id="challenges"
          className={`${styles.wrapperPadding} ${styles.appContentChallenges}`}
        >
          <span ref={objRef.circleChallenge} className={styles.circleChallenge}>
            <img src={shadowBlue} alt="" />
          </span>
          <div className={styles.appContentChallengesHeader}>
            <div className={styles.appContentChallengesTitle}>
              <h2 data-text="text" className={styles.spanChallengeName}>
                Desafíos
              </h2>
              <h4 data-text="text" className={styles.h2FrontendName}>
                Frontend
              </h4>
            </div>
          </div>

          <div className={styles.wrapperContentChallenge}>
            <div className={styles.appLeftContentChallenge}>
              <div className={styles.challengesSubTitle}>
                <h3 data-text="text" className={styles.h3Challenge}>
                  Busco mejorar mis habilidades como desarrollador frontend, a
                  través de la práctica, ya sea construyendo proyectos
                  personales o participando en desafíos frontend !
                </h3>
              </div>
              <div className={styles.challengeDescription}>
                <span data-text="text">
                  Desafío: Crear una aplicación de tareas pendientes
                </span>
                <span data-text="text">Dificultad: Intermedio</span>
                <span data-text="text">Fuente: frontendmentor.io</span>
              </div>
              <div className={styles.challengeMyExplanation}>
                <p data-text="text" className={styles.pMyExplanation}>
                  Encuentro estos desafíos interesantes, ya que a través de
                  ellos, puedo mejorar mis habilidades, tratando de cumplir con
                  los retos de la manera más cercana posible en cuanto a diseño
                  y funcionalidad se refiere.
                </p>

                <p data-text="text" className={styles.pMyExplanation}>
                  Aplicaciones "to-do" hay muchas, pero este reto llamó mi
                  atención, porque pedía incluir una funcionalidad de "arrastrar
                  y soltar" las tareas para intercambiar su orden, no había
                  realizado esa funcionalidad en otros proyectos, así que tomé
                  el reto.
                </p>
                <p data-text="text" className={styles.pMyExplanation}>
                  En el proceso de construcción de dicha característica en la
                  aplicación, pude conocer eventos de arrastrar y soltar como,
                  dragstart, drop, dragover, dragend, entre otros, eventos que
                  permiten de forma nativa poder arrastrar, soltar y reordenar
                  elementos en el DOM.
                </p>
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
                  <IconSocial fontSizeIcon="23px"/> 
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentMoreLink}>
            <div className={styles.contentLinesCustomLink}>
              <span className={styles.lineCustomLink}></span>
              <span className={styles.circleCustomLink}></span>
              <span
                ref={objRef.circleLinkRef}
                className={styles.circleCustomLinkAnimate}
              >
                <img src={shadow} alt="" />
              </span>
              <Link className={styles.moreLink} to="/desafios">
                Mas desafíos
              </Link>
            </div>
          </div>
        </section>
      }
      <Projects
        projectsArray={personalProjects}
        title={"Proyectos"}
        subTitle={"Personales"}
      />
      <section id="contact" className={`${styles.wrapperPadding}`}>
        <FormContact />
      </section>
    </>
  );
}

export default Home;
