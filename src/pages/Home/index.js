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
      refMain.current.classList.remove("hidden");
    }
    e.preventDefault();
  };

  const handleTransition = () => {
    const el = refMain.current;
    el.classList.add("hidden");
    if (el.className.includes("scale")) {
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
          className={"content-button-info-child"}
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
          <h3 className="title-personal-info">¿Shall we have a coffee?</h3>
          <span className="sub-title-personal-info">
            Yes, the title is true, I would like to have a coffee with you!
          </span>
          <p className="text-personal-info first">
            I am Alfredo Moscoso, frontend developer, I am excited to think that
            we can create important things, a web application, a website, those
            things that will change a person's life, being part of that
            experience keeps me in constant learning, being able to improve my
            skills all the days, technical skills in JavaScript, Reactjs, Sass,
            Html5, willing to continue learning new technologies, work hand in
            hand with a team and that we make that next big project possible.
          </p>

          <p className="text-personal-info">
            But not everything is technology, I enjoy the company of a pet,
            playing a video game, my new passion is gardening, these days it is
            a relaxing activity.
          </p>
        </div>

        <div className="App-content-skills kit-content">
          <div className="content-title-skills">
            <div className="title-skills">
              <h2>Skills</h2>
            </div>
          </div>
          <div className="over-hidden">
            <div ref={dragEl} className="over-kit">
              <IterateArray array={skills} Component={Skills} type={"skills"} />
            </div>
          </div>
        </div>
        <div className="App-content-tools kit-content">
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
        <div className="content-button-personal-info">
          <div className="parent-action-link-about-me">
            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={"button-action-about-me"}
            >
              ¡ Let's have that coffee !
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
