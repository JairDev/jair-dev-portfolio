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
// import photoProfile from "../../assets/foto-perfil.png";
import phoneChallenge from "../../assets/phone-challenge-2.png";
import ArrowIcon from "../../assets/arrow.svg";
import styles from "./Home.module.css";
import Button from "components/Button/Button";

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
    const nodeParent = document.querySelectorAll("[data-height]");
    smoothScroll("#container");
    gsap.timeline({
      scrollTrigger: {
        trigger: ["[data-phone]"],
        pin: true,
        start: "center 30%",
        end: "top -=550",
        scrub: true,
      },
    });

    gsap.utils.toArray("[data-img]").forEach((img, i) => {
      const arr = [...nodeParent][i];
      console.log(arr);
      const sum = arr.clientHeight - arr.clientHeight / 3;
      if (window.innerWidth > 860) {
        gsap.to(img, {
          scrollTrigger: {
            trigger: img,
            pin: true,
            start: "top 20%",
            end: "+=" + sum,
            scrub: true,
            // markers: true,
          },
        });
      }
    });
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
                {/* <div className={styles.contentButtonForm}>
                  <div className={styles.contactButton}>
                    <a href="#contact" data-link="link">
                      Contáctame
                    </a>
                  </div>
                </div> */}
                <Button classButton="hero" />
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
      </section>

      <section
        id="about-me"
        className={`${styles.wrapperPadding} ${styles.appContentAboutMe}`}
      >
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
              Hola me llamo Alfredo Moscoso, tengo conocimientos en tecnologías
              para el desarrollo web como ReactJs, Javascript, Sass, Css3,
              Html5, Git.
            </p>
            <p
              data-text="text"
              className={`${styles.text} ${styles.pDescription}`}
            >
              Trato de estar al día con las nuevas tecnologías, pero consciente
              de que es un ecosistema muy grande, por eso en este momento estoy
              enfocado en cimentar mis conocimientos en React, partiendo de una
              base sólida en Javascript, pero siempre dispuesto a aprender una
              nueva herramienta.
            </p>
            <Button classButton="about" />
          </div>
        </div>
      </section>

      <section
        className={`${styles.wrapperPadding} ${styles.appContentSkills}`}
        id="insert-canvas"
      >
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
        </section>
      }
      <Projects
        projectsArray={personalProjects}
        title={"Proyectos"}
        subTitle={"Personales"}
        sliceNumber={2}
      />
      <section id="contact" className={`${styles.wrapperPadding}`}>
        <FormContact />
      </section>
    </>
  );
}

export default Home;
