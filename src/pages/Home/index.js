import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Projects from "components/Projects/Projects";

import bxlReact from "@iconify/icons-bx/bxl-react";
import bxlJavascript from "@iconify/icons-bx/bxl-javascript";
import bxlSass from "@iconify/icons-bx/bxl-sass";
import bxlCss3 from "@iconify/icons-bx/bxl-css3";
import bxlHtml5 from "@iconify/icons-bx/bxl-html5";
import bxlGit from "@iconify/icons-bx/bxl-git";

import phone3 from "../../assets/hero-phone3.png";
import photoProfile from "../../assets/foto-perfil.png";
import phoneChallenge from "../../assets/phone-challenge.png";
import codeChallenge from "../../assets/content-creator.png";
import workCoin from "../../assets/coin.png";
import workDessert from "../../assets/desert.png";
import "../../assets/css.svg";
import "../../assets/git.svg";
import "../../assets/html.svg";
import "../../assets/js.svg";
import "../../assets/react.svg";
import "../../assets/sass.svg";
import ArrowIcon from "../../assets/arrow.svg";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import twitterIcon from "../../assets/twitter.svg";
import telegramIcon from "../../assets/telegram.svg";
import shadow from "../../assets/shadow-ball.png";
import shadowBlue from "../../assets/shadow-ball-blue.png";
import blurry from "../../assets/blurry.png";
import { personalProjects } from "../../data/info-portfolio";

import styles from "./Home.module.css";
import FormContact from "components/FormContact/FormContact";

const svgIcons = [
  { name: "React", svg: bxlReact },
  { name: "Javascript", svg: bxlJavascript },
  { name: "Sass", svg: bxlSass },
  { name: "Css3", svg: bxlCss3 },
  { name: "Html5", svg: bxlHtml5 },
  { name: "Git", svg: bxlGit },
];

const socialIcons = [
  { name: githubIcon, label: "Github" },
  { name: linkedinIcon, label: "Linkedin" },
  { name: twitterIcon, label: "Twitter" },
  { name: telegramIcon, label: "Telegram" },
];

const dataWork = [
  {
    name: workCoin,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: workDessert,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

gsap.registerPlugin(ScrollTrigger);

function smoothScroll(content, viewport, smoothness) {
  content = gsap.utils.toArray(content)[0];
  smoothness = smoothness || 1;

  gsap.set(viewport || content.parentNode, {
    overflow: "hidden",
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  console.log("h");
  gsap.set(content, { overflow: "visible", width: "100%" });

  let getProp = gsap.getProperty(content),
    setProp = gsap.quickSetter(content, "y", "px"),
    setScroll = ScrollTrigger.getScrollFunc(window),
    removeScroll = () => (content.style.overflow = "visible"),
    killScrub = (trigger) => {
      let scrub = trigger.getTween
        ? trigger.getTween()
        : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
      scrub && scrub.kill();
      trigger.animation.progress(trigger.progress);
    },
    height,
    isProxyScrolling;

  function onResize() {
    height = content.clientHeight;
    document.body.style.height = height + "px";
  }
  onResize();

  ScrollTrigger.addEventListener("refreshInit", onResize);
  ScrollTrigger.addEventListener("refresh", () => {
    removeScroll();
    requestAnimationFrame(removeScroll);
  });
  ScrollTrigger.defaults({ scroller: content });
  ScrollTrigger.prototype.update = (p) => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

  ScrollTrigger.scrollerProxy(content, {
    scrollTop(value) {
      if (arguments.length) {
        isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
        setProp(-value);
        setScroll(value);
        return;
      }
      return -getProp("y");
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  return ScrollTrigger.create({
    animation: gsap.fromTo(
      content,
      { y: 0 },
      {
        y: () => document.documentElement.clientHeight - height,
        ease: "none",
        onUpdate: ScrollTrigger.update,
      }
    ),
    scroller: window,
    invalidateOnRefresh: true,
    start: 0,
    end: () => height - document.documentElement.clientHeight,
    scrub: smoothness,
    onUpdate: (self) => {
      if (isProxyScrolling) {
        killScrub(self);
        isProxyScrolling = false;
      }
    },
    onRefresh: killScrub, // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
  });
}

function Home() {
  const animateBallHero = useRef(null);
  const word = useRef(null);
  const h2Name = useRef(null);
  const circleChallenge = useRef(null);
  const phoneRef = useRef(null);
  const codeImgRef = useRef(null);
  const circleLinkRef = useRef(null);
  const triggerButton = useRef(null);
  const animatePhoto = useRef(null);
  const layerPhoto = useRef(null);

  useEffect(() => {
    console.log("mount home");
    smoothScroll("#container");
    const tlBallHero = gsap.timeline();

    tlBallHero.to(animateBallHero.current, {
      y: "97vh",
      xPercent: 15,
      ease: "power4.out",
      duration: 2.7,
      delay: 0.6,
      scale: 1.0,
    });
    // tlBallHero.to(animateBallHero.current, {
    //   yPercent: 4,
    //   xPercent: 6,
    // });
    const tlNavHidden = gsap.timeline({
      scrollTrigger: {
        trigger: "#nav-hidden",
        start: "bottom -=50",
        end: "top -=800",
        scrub: true,
      },
    });
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: triggerButton.current,
    //     start: "center 50%",
    //     end: "top -=1500",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
    const tlw = gsap.timeline({
      scrollTrigger: {
        trigger: "#text",
        start: "center 90%",
        end: "bottom center",
        scrub: true,
      },
    });
    const tlCircleChallenge = gsap.timeline({
      scrollTrigger: {
        trigger: circleChallenge.current,
        start: "center 50%",
        end: "top -=1200",
        scrub: true,
      },
    });
    const tlAnimatePhoto = gsap.timeline({
      scrollTrigger: {
        trigger: animatePhoto.current,
        start: "center 50%",
        end: "top -=1000",
        scrub: true,
      },
    });
    const tlLayerPhoto = gsap.timeline({
      scrollTrigger: {
        trigger: layerPhoto.current,
        start: "top 80%",
        end: "top -=300",
        scrub: true,
      },
    });
    const tlPhone = gsap.timeline({
      scrollTrigger: {
        trigger: phoneRef.current,
        pin: true,
        start: "center 30%",
        end: "top -=550",
        scrub: true,
      },
    });
    const tlCodeImgProject = gsap.timeline({
      scrollTrigger: {
        trigger: "#code-project-img",
        pin: true,
        start: "center 10%",
        end: "top -=950",
        scrub: true,
        markers: true
      },
    });
    const tlCode = gsap.timeline({
      scrollTrigger: {
        trigger: codeImgRef.current,
        start: "center 50%",
        end: "top -=550",
        scrub: true,
      },
    });
    const tlCircleLink = gsap.timeline({
      scrollTrigger: {
        trigger: circleLinkRef.current,
        start: "center 30%",
        end: "top -=1500",
        scrub: true,
      },
    });
    // animations////////////////
    tlNavHidden.to("#nav-hidden", {
      yPercent: -100,
      opacity: 1,
      duration: 1,
    });
    tlNavHidden.to("#nav-hidden", {
      backgroundColor: "var(--body-color)",
      boxShadow: "0px 4px 20px 8px rgba(177, 181, 202, .2)",
      yPercent: 0,
      opacity: 1,
      duration: 1,
    });
    tlAnimatePhoto.to(animatePhoto.current, {
      yPercent: 100,
    });
    tlLayerPhoto.to(layerPhoto.current, {
      scaleY: 0,
      yPercent: 100,
    });
    tlw.to(word.current, {
      yPercent: -50,
      duration: 1,
    });
    gsap.utils.toArray("#text").forEach((item) => {
      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 98%",
          end: "center 80%",
          scrub: true,
        },
      });
      tlText.from(item, {
        opacity: 0,
        yPercent: 50,
      });
    });
    tlCircleChallenge.to(circleChallenge.current, {
      xPercent: -1300,
      yPercent: 1000,
    });
    tlCode.to(codeImgRef.current, {
      yPercent: 30,
      duration: 1,
    });
    tlCode.to(codeImgRef.current, {
      yPercent: -1,
      duration: 1,
    });
    tlCircleLink.to(circleLinkRef.current, {
      yPercent: 800,
    });

    return () => ScrollTrigger.getAll().forEach((ST) => ST.kill());
  }, []);

  return (
    <>
      <span ref={animateBallHero} className={styles.scrollBefore}>
        <img src={shadow} alt="" />
      </span>
      <section
        className={`${styles.wrapperPadding} ${styles.appContentHero}`}
        id={"wrapper-padding"}
      >
        <div className={styles.wrapperContentHero}>
          <div className={styles.appLeftContentHero}>
            <div className={styles.appLeftContentHeroRole}>
              <h1 className={styles.role}>Desarrollador Frontend</h1>
              <div
                ref={triggerButton}
                id="trigger-button"
                className={styles.contentButtonContact}
              >
                <form className={styles.contentButtonForm}>
                  <button className={styles.contactButton}>Contáctame</button>
                </form>
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
                ref={word}
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
        className={`${styles.wrapperPadding} ${styles.appContentAboutMe}`}
      >
        <div className={styles.appContentAboutMeHeader}>
          <div ref={animatePhoto} className={styles.appContentAboutMePhoto}>
            <span ref={layerPhoto} className={styles.layerPhoto}></span>
            <img
              className={styles.photo}
              src={photoProfile}
              alt="Foto de perfil"
            />
          </div>
          <div className={styles.appContentAboutMeTitle}>
            <h2 id="text" className={`${styles.text} ${styles.spanName}`}>
              Hola,
            </h2>
            <h4
              id="text"
              ref={h2Name}
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
              className={`${styles.text} ${styles.pDescription} ${styles.subTitleDescription}`}
              id="text"
            >
              Vivo en la caótica y bella ciudad de Caracas-Venezuela, donde
              estoy labrando mi futuro como desarrollador frontend.
            </p>
            <p id="text" className={`${styles.text} ${styles.pDescription}`}>
              Como desarrollador de software, es emocionante pensar que podemos
              crear proyectos importantes para el beneficio de otras personas,
              una aplicación, un sitio web, esos proyectos que tendrán un
              impacto positivo en la vida de alguien.
            </p>
            <p id="text" className={`${styles.text} ${styles.pDescription}`}>
              Poder ser parte de esa experiencia me motiva y mantiene en
              constante aprendizaje para seguir mejorando mis habilidades
              técnicas, estoy dispuesto a seguir aprendiendo nuevas tecnologías
              y así poder adaptarme a un equipo de trabajo, trabajar juntos y
              hacer posible ese proximo gran proyecto.
            </p>

            <h3 id="text" className={`${styles.text} ${styles.h3Description}`}>
              Un poco mas de mi
            </h3>
            <p id="text" className={`${styles.text} ${styles.pDescription}`}>
              Como seres humanos necesitamos conectar con nuestras emociones,
              nuestro entorno, disfruto de la naturaleza, amo la playa (tengo
              tiempo que no voy), me gustan las mascotas, sobre todo los perros,
              un sueño que quiero realizar es poder ayudar a tantos perros
              abandonados como sea posible, tener una casa con un terreno
              inmenso que sirva de refugio para estos amigos perrunos.
            </p>
            <p id="text" className={`${styles.text} ${styles.pDescription}`}>
              Cuando estoy estresado, la música despeja mi mente, en mis tiempos
              libres me gusta pasar el rato jugando algún videojuego o modelando
              algo 3d, es algo que encuentro muy interesante, lo hago como
              hobby...
            </p>

            <p
              className={`${styles.text} ${styles.pDescription} ${styles.footerDescription}`}
              id="text"
            >
              Un gusto haberte mostrado una parte mí, saludos !
            </p>
            <div className={styles.contentButtonContactAbout}>
              <form className={styles.contentButtonForm}>
                <button className={styles.contactButton}>Contáctame</button>
              </form>
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
          <h3 id="text" className={styles.h3Skills}>
            Habilidades Actuales
          </h3>
          <div className={styles.contentSkills}>
            <ul className={styles.contentItemSkills}>
              <div className={styles.flexSkills}>
                {svgIcons.map((icon) => (
                  <div className={styles.contentSkillsLabel} key={icon.name}>
                    <li id="text" className={styles.itemSkills}>
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

      <section
        className={`${styles.wrapperPadding} ${styles.appContentChallenges}`}
      >
        <span ref={circleChallenge} className={styles.circleChallenge}>
          <img src={shadowBlue} alt="" />
        </span>
        <div className={styles.appContentChallengesHeader}>
          <div className={styles.appContentChallengesTitle}>
            <h2 id="text" className={styles.spanChallengeName}>
              Desafíos
            </h2>
            <h4 id="text" className={styles.h2FrontendName}>
              Frontend
            </h4>
          </div>
        </div>

        <div className={styles.wrapperContentChallenge}>
          <div className={styles.appLeftContentChallenge}>
            <div className={styles.challengesSubTitle}>
              <h3 id="text" className={styles.h3Challenge}>
                Busco mejorar mis habilidades como desarrollador frontend, a
                traves de desafíos del mundo real.
              </h3>
            </div>
            <div className={styles.challengeDescription}>
              <span id="text">
                Desafío: Crear una aplicación de tareas pendientes
              </span>
              <span id="text">Dificultad: Intermedio</span>
              <span id="text">Fuente: frontendmentor.io</span>
            </div>
            <div className={styles.challengeCodeImg}>
              <div className={styles.wrapperCodeImg}>
                <img ref={codeImgRef} src={codeChallenge} alt="" />
              </div>
            </div>
            <div className={styles.challengeMyExplanation}>
              <p id="text" className={styles.pMyExplanation}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum..
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
              <div ref={phoneRef} className={styles.contentImgPhone}>
                <img src={phoneChallenge} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentMoreLink}>
          <div className={styles.contentLinesCustomLink}>
            <span className={styles.lineCustomLink}></span>
            <span className={styles.circleCustomLink}></span>
            <span
              ref={circleLinkRef}
              className={styles.circleCustomLinkAnimate}
            >
              <img src={shadow} alt="" />
            </span>
            <a className={styles.moreLink} href={"a"}>
              Mas desafíos
            </a>
          </div>
        </div>
      </section>
      <Projects
        projectsArray={personalProjects}
        title={"Proyectos"}
        subTitle={"Personales"}
      />
      <section className={`${styles.wrapperPadding}`}>
        <FormContact socialIcons={socialIcons} />
      </section>
    </>
  );
}

export default Home;
