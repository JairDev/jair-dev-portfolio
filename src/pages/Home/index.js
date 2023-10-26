import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { gsapAnimations } from "utils/gsapAnimations/gsapAnimations";

import CircleType from "circletype";

import { Icon } from "@iconify/react";
import Projects from "components/Projects/Projects";
import Button from "components/Button/Button";
import IconSocial from "components/IconSocial/IconSocial";

import phone3 from "../../assets/hero-phone5.webp";
import phoneChallenge from "../../assets/aerolab-screen.webp";
import ArrowIcon from "../../assets/arrow.svg";
import blob from "../../assets/blob.svg";

import CV from "../../assets/CV.pdf";

import { personalProjects, svgIcons } from "../../data/info-portfolio";

import styles from "./Home.module.css";

import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home() {
  const objRef = {
    word: useRef(null),
    heroImage: useRef(null),
    rotateText: useRef(),
  };

  const refCircleText = useRef();

  const projects = personalProjects.slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth > 860) {
      gsap.timeline({
        scrollTrigger: {
          trigger: ["[data-phone]"],
          pin: true,
          start: "center 30%",
          end: "top -=250",
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

    const circleType = new CircleType(refCircleText.current);
    circleType.radius(40);
  }, [objRef]);

  return (
    <>
      <Helmet>
        <title>Alfredo Moscoso</title>
      </Helmet>
      <section
        className={`${styles.wrapperPadding} ${styles.appContentHero}`}
        id={"wrapper-padding"}
      >
        <span className={styles.backgroundSectionLeft}>
          <img src={blob} alt="" />
        </span>
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
                  <Button classButton="hero">
                    <a
                      className={`${styles.link} ${styles.hero}`}
                      href="#contact"
                      data-link="link"
                    >
                      Contáctame
                    </a>
                  </Button>
                  <Button classButton="hero">
                    <a
                      className={`${styles.link} ${styles.hero}`}
                      href={CV}
                      data-link="link"
                    >
                      CV
                    </a>
                  </Button>
                </div>
              </div>

              <div className={styles.appContentScrollArrow}>
                <div
                  ref={objRef.rotateText}
                  className={styles.contentCircleText}
                  data-rotate-text="rotate-text"
                >
                  <p ref={refCircleText} className={styles.circleText}>
                    • scroll • scroll • scroll • scroll • scroll
                  </p>
                </div>
                <span className={styles.scrollBack}>
                  <img src={ArrowIcon} alt="arrow icon" />
                </span>
              </div>
            </div>
            <div className={styles.appRightContentHero}>
              <div
                ref={objRef.heroImage}
                data-heroimage="heroimage"
                className={styles.appRightContentHeroImg}
              >
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
                <img
                  className={styles.heroImg}
                  src={phone3}
                  alt="teléfono con imagen"
                />
              </div>
              <span
                ref={objRef.word}
                className={`${styles.wordsHero} ${styles.bottomLeft}`}
                data-wordweb="wordweb"
              >
                Web
              </span>
            </div>
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
              <h3
                data-text="text"
                className={`${styles.text} ${styles.spanName}`}
              >
                Hola,
              </h3>
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
              <span className={styles.lineLeftAbout}></span>
              <p
                data-text="text"
                className={`${styles.text} ${styles.pDescription}`}
              >
                Hola, me llamo Alfredo Moscoso, soy desarrollador web, tengo
                experiencia en proyectos personales manejando tecnologías como,
                ReactJs, Nextjs, Javascript, Redux, Styled Components,
                Tailwindcss, Sass, Css3, Html5, Git.
              </p>
              <p
                data-text="text"
                className={`${styles.text} ${styles.pDescription}`}
              >
                Del desarrollo web me entusiasma la interacción que pueda
                lograrse entre el producto que se desarrolle y el usuario final,
                ya sea mediante una página web, alguna aplicación web, que
                satisfaga alguna necesidad, me motiva estar en constante
                aprendizaje y poder lograr buenos fundamentos en programación
                para ser un mejor profesional, enfocado en aplicar las mejores
                prácticas en el desarrollo web.
              </p>

              <p
                data-text="text"
                className={`${styles.text} ${styles.pDescription}`}
              >
                Saludos, espero verte pronto !
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="personal-work"
        className={`${styles.wrapperPadding} ${styles.projectsSection}`}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.appContentPersonalProjectsHeader}>
            <h2 data-text="text" className={styles.spanWorkName}>
              Proyectos
            </h2>
            <h4 data-text="text" className={styles.h2WorkName}>
              Personales
            </h4>
          </div>
          {projects.map((item) => (
            <Projects
              key={item.name}
              name={item.name}
              imgSrcApp={item.imgSrcApp}
              linkGit={item.linkGit}
              linkDemo={item.linkDemo}
              stack={item.stack}
              dataDescription={item.dataDescription}
            />
          ))}
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

      <section
        id="challenges"
        className={`${styles.wrapperPadding} ${styles.appContentChallenges}`}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.appContentChallengesHeader}>
            <h3 data-text="text" className={styles.spanChallengeName}>
              Desafíos
            </h3>
            <h4 data-text="text" className={styles.h2FrontendName}>
              Frontend
            </h4>
          </div>

          <div className={styles.wrapperContentChallenge}>
            <div className={styles.appLeftContentChallenge}>
              <div className={styles.challengeDescription}>
                <div className={styles.contentChallengeInfo}>
                  <span className={styles.boldText}>Desafío:</span>
                  <span className={styles.challengeInfo} data-text="text">
                    Crear una vista de catálogo para una aplicación de programa
                    de fidelización.
                  </span>
                </div>
                <div className={styles.contentChallengeInfo}>
                  <span className={styles.boldText}>Fuente:</span>
                  <span className={styles.challengeInfo} data-text="text">
                    Aerolab
                  </span>
                </div>
                <div>
                  <div className={styles.contentStack}>
                    <span className={styles.stack}>Reactjs ContextApi</span>
                  </div>
                </div>
              </div>
              <div className={styles.challengeMyExplanation}>
                <p data-text="text" className={styles.pMyExplanation}>
                  En este desafió se proporcionó un diseño y una API para el
                  desarrollo de una app funcional, el desafío consistía en crear
                  una vista de catálogo para una aplicación de programa de
                  fidelización.
                </p>
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
                  <img src={phoneChallenge} width="390" alt="792" />
                  <IconSocial
                    urlGithub={
                      "https://github.com/JairDev/aerolab-coding-challenge"
                    }
                    urlLive={"https://aerolab-coding-challenges.vercel.app/"}
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
