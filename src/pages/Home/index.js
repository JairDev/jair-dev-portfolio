import React, { useEffect, useRef } from "react";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { users, skills, tools } from "data/info-portfolio";
import IterateArray from "components/IterateArray/IterateArray";
import Skills from "components/Skills/Skills";
import Projects from "components/Projects/Projects";
import Button from "components/Button/Button";
import CurrentTime from "components/CurrentTime/CurrentTime";
import gsap from "gsap";
import Draggable from "react-draggable";
import "./Home.css";

const svgProfile = (
  <svg className={`icon icon-user topSvg`}>
    <use xlinkHref={`#icon-user`}></use>
  </svg>
);

function Home() {
  const refPersonalInfo = useRef();
  const refMain = useRef();
  let borderTop = useRef(null);
  let borderLeft = useRef(null);
  let hi = useRef(null);
  let welcome = useRef(null);
  const dragEl = useRef(null);
  let span = useRef(null);

  const handleDisplay = (e) => {
    refPersonalInfo.current.classList.toggle("scale-info");
    refMain.current.classList.toggle("scale");
    span.classList.toggle("active");
    if (!refMain.current.className.includes("scale")) {
      console.log("click hidden true");
      refMain.current.classList.remove("hidden");
    }
    e.preventDefault();
  };

  const handleTransition = (e) => {
    const el = refMain.current;
    el.classList.add("hidden");
    console.log(el.className);
    if (el.className.includes("scale")) {
      console.log(true);
      el.classList.add("hidden");
    } else {
      el.classList.remove("hidden");
    }
  };

  useEffect(() => {
    gsap
      .timeline()
      .from(borderTop, {
        duration: 0.5,
        delay: 0.3,
        scaleX: 0,
        opacity: 0,
        ease: "slow(0.7, 0.7,  false)",
      })
      .from(
        borderLeft,
        {
          duration: 0.5,
          scaleY: 0,
          opacity: 0,
          ease: "slow(0.7, 0.7,  false)",
        },
        "-=0.5"
      )
      .from(
        ".span-content-date",
        {
          duration: 0.5,
          scaleY: 0,
          opacity: 0,
          ease: "slow(0.7, 0.7,  false)",
        },
        "-=0.5"
      )
      .from(".all", { duration: 0.5, opacity: 0, stagger: 0.2 })
      .from(hi, { opacity: 0 })
      .from(welcome, { duration: 1.5, opacity: 0 });
  }, []);

  return (
    <>
      <header className="App-header">
        <span
          ref={(span) => (borderTop = span)}
          className="border-animate"
        ></span>
        <div className="App-header-content">
          <span ref={(span) => (hi = span)} className="span-hi">
            Hi,
          </span>
          <span ref={(span) => (welcome = span)} className="span-welcome">
            Welcome
          </span>
        </div>
        <CurrentTime />
      </header>

      <aside className="App-aside">
        <span
          ref={(span) => (borderLeft = span)}
          className="border-aside-animate"
        ></span>
        <span
          ref={(el) => (span = el)}
          className="animate-span-profile active"
        ></span>
        <Button
          classSvg="topSvg"
          className={"content-button-info"}
          onClick={handleDisplay}
        >
          {svgProfile}
        </Button>
      </aside>

      <div
        ref={refPersonalInfo}
        onTransitionEnd={handleTransition}
        className={`App-content-personal-info`}
      >
        <div>
          <div>
            <img src="" alt=""></img>
          </div>
          <h3 className="title-personal-info">¿Nos tomamos un café?</h3>
          <span className="sub-title-personal-info">
            ¡Sí, el título es cierto, me gustaría tomar un café contigo!
          </span>
          <p className="text-personal-info first">
            Hola, mi nombre es Alfredo Moscoso, ¿Estas de acuerdo, que el
            desarrollo web es parte fundamental de nuestras vidas? Imaginar un
            mundo sin internet es difícil, una pagina web puede cambiar la vida
            de una persona, encontrar el trabajo soñado, hacer realidad el viaje
            planificado. Como desarrollador web, me satisface poder ayudar a
            crear esa pagina web, formar parte de un equipo que lo haga posible,
            es emocionante, eso me impulsó a tomar este camino.
          </p>
          <p className="text-personal-info">
            Pero no todo es tecnología, disfruto la compañía de una mascota, mi
            pasión recién descubierta es la jardinería, en estos tiempos es una
            actividad relajante
          </p>
        </div>
        <div className="content-button-personal-info">
          <div className="parent-action-link-about-me">
            <a
	      href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={"button-action-about-me"}
            >
              ¿Te invito un café?
            </a>
          </div>
        </div>
      </div>

      <section ref={refMain} className={`App-main`}>
        <section className="App-content-profile-skills">
          <div className="App-content-profile all">
            <IterateArray
              array={users}
              Component={ProfileCard}
              type={"userInfo"}
            />
          </div>
          <div className="App-content-skills all kit-content">
            <div className="content-title-skills">
              <div className="title-skills">
                <h2>Skills</h2>
              </div>
            </div>
            <div className="over-hidden">
              <Draggable nodeRef={dragEl} axis={"x"}>
                <div ref={dragEl} className="over-kit">
                  <IterateArray
                    array={skills}
                    Component={Skills}
                    type={"skills"}
                  />
                </div>
              </Draggable>
            </div>
          </div>
          <div className="App-content-tools all kit-content">
            <div className="content-title-tools">
              <div className="title-tools">
                <h2>Tools</h2>
              </div>
            </div>
            <div className="over-hidden">
              <div className="over-kit">
                <IterateArray array={tools} Component={Skills} type={"tools"} />
              </div>
            </div>
          </div>
        </section>

        <section className="App-parent-projects all">
          <div className="App-content-projects">
            <div className="content-title-projects">
              <div className="title-projects">
                <h2>Projects</h2>
              </div>
            </div>
            <div className="content-title-projects-top">
              <div className="title-projects-top">
                <h2>Projects</h2>
              </div>
            </div>
            <Projects />
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
